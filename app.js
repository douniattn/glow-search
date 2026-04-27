/**
 * Glow — App Logic
 * Search, match, and render beauty answers
 */

document.addEventListener("DOMContentLoaded", () => {
  const searchInput = document.getElementById("searchInput");
  const searchBtn = document.getElementById("searchBtn");
  const hero = document.getElementById("hero");
  const results = document.getElementById("results");
  const loading = document.getElementById("loading");
  const resultCard = document.getElementById("resultCard");
  const backBtn = document.getElementById("backBtn");
  const tags = document.querySelectorAll(".tag");

  // Search on button click
  searchBtn.addEventListener("click", () => handleSearch());

  // Search on Enter key
  searchInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") handleSearch();
  });

  // Popular tags
  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.dataset.query;
      handleSearch();
    });
  });

  // Back button
  backBtn.addEventListener("click", () => {
    results.style.display = "none";
    hero.style.display = "block";
    hero.style.animation = "fadeInUp 0.5s ease-out";
    searchInput.value = "";
    searchInput.focus();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  function handleSearch() {
    const query = searchInput.value.trim();
    if (!query) {
      searchInput.focus();
      return;
    }

    // Show loading
    hero.style.display = "none";
    results.style.display = "none";
    loading.style.display = "block";

    // Simulate a brief "thinking" delay for UX
    setTimeout(() => {
      const match = findBestMatch(query);
      renderResult(query, match);

      loading.style.display = "none";
      results.style.display = "block";
      results.style.animation = "fadeInUp 0.6s ease-out";
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 1200 + Math.random() * 800);
  }

  function findBestMatch(query) {
    const q = query.toLowerCase();
    let bestMatch = null;
    let bestScore = 0;

    for (const entry of knowledgeBase) {
      let score = 0;

      for (const keyword of entry.keywords) {
        if (q.includes(keyword)) {
          score += keyword.length * 3;
        } else if (keyword.includes(q)) {
          score += q.length * 2;
        } else {
          // Partial word matching
          const words = keyword.split(" ");
          for (const word of words) {
            if (q.includes(word) && word.length > 2) {
              score += word.length;
            }
          }
          // Also match query words against keywords
          const queryWords = q.split(" ");
          for (const qw of queryWords) {
            if (keyword.includes(qw) && qw.length > 2) {
              score += qw.length;
            }
          }
        }
      }

      if (score > bestScore) {
        bestScore = score;
        bestMatch = entry;
      }
    }

    return bestScore > 3 ? bestMatch : null;
  }

  function renderResult(query, match) {
    const data = match || defaultResponse;
    const displayQuestion = match ? data.question : `"${query}"`;

    resultCard.innerHTML = `
      <h2 class="result-question">${displayQuestion}</h2>
      <span class="result-badge">${data.badge}</span>
      <p class="result-intro">${data.intro}</p>

      <h3 class="result-section-title">
        <span class="emoji">💡</span> What we recommend
      </h3>

      <div class="reco-grid">
        ${data.recommendations
          .map(
            (r) => `
          <div class="reco-card">
            <div class="reco-card-header">
              <span class="reco-name">${r.name}</span>
              <span class="reco-type ${r.type}">${r.type}</span>
            </div>
            <p class="reco-desc">${r.desc}</p>
            <a href="${r.link}" target="_blank" rel="noopener noreferrer" class="reco-link">
              ${r.linkText}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14">
                <path d="M7 17L17 7M17 7H7M17 7V17"/>
              </svg>
            </a>
          </div>
        `
          )
          .join("")}
      </div>

      <div class="sweet-advice">
        <span class="sweet-icon">💝</span>
        <p>${data.sweetAdvice}</p>
      </div>
    `;
  }
});
