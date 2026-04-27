/**
 * Glow — Consult a Specialist
 * AI-driven consultation logic with chat interface
 */

// ⚡ Paste your Google Apps Script Web App URL here (see SETUP_GOOGLE_SHEETS.md)
const GOOGLE_SHEET_URL = "https://script.google.com/macros/s/AKfycbzoGqelNbHwNP_t_YtIWaUpXWkKaFtOZvfpaPn3OowGyfEoC2jI_k_oGd_eKb0enWrG/exec";

document.addEventListener("DOMContentLoaded", () => {
  // ---- Tab Navigation ----
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabSearch = document.getElementById("tabSearch");
  const tabConsult = document.getElementById("tabConsult");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tabBtns.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      if (btn.dataset.tab === "search") {
        tabSearch.style.display = "";
        tabConsult.style.display = "none";
      } else {
        tabSearch.style.display = "none";
        tabConsult.style.display = "";
      }
    });
  });

  // ---- Plan Selection ----
  const consultHero = document.getElementById("consultHero");
  const intakeSection = document.getElementById("intakeSection");
  const chatSection = document.getElementById("chatSection");
  const intakeBackBtn = document.getElementById("intakeBackBtn");
  const chatBackBtn = document.getElementById("chatBackBtn");
  const planBtns = document.querySelectorAll(".plan-btn[data-plan]");

  let selectedPlan = "starter";

  planBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      selectedPlan = btn.dataset.plan;
      consultHero.style.display = "none";
      intakeSection.style.display = "block";
      intakeSection.style.animation = "fadeInUp 0.5s ease-out";
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  intakeBackBtn.addEventListener("click", () => {
    intakeSection.style.display = "none";
    consultHero.style.display = "block";
    consultHero.style.animation = "fadeInUp 0.5s ease-out";
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  chatBackBtn.addEventListener("click", () => {
    chatSection.style.display = "none";
    consultHero.style.display = "block";
    consultHero.style.animation = "fadeInUp 0.5s ease-out";
    resetForm();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  // ---- Chip Selection ----
  const skinTypeChips = document.getElementById("skinTypeChips");
  const concernChips = document.getElementById("concernChips");
  const procedureChips = document.getElementById("procedureChips");

  // Single select for skin type & procedure openness
  [skinTypeChips, procedureChips].forEach((group) => {
    group.addEventListener("click", (e) => {
      const chip = e.target.closest(".chip");
      if (!chip) return;
      group.querySelectorAll(".chip").forEach((c) => c.classList.remove("selected"));
      chip.classList.add("selected");
    });
  });

  // Multi select for concerns
  concernChips.addEventListener("click", (e) => {
    const chip = e.target.closest(".chip");
    if (!chip) return;
    chip.classList.toggle("selected");
  });

  // ---- Form Submission ----
  const intakeForm = document.getElementById("intakeForm");
  const chatMessages = document.getElementById("chatMessages");
  const chatInput = document.getElementById("chatInput");
  const chatSendBtn = document.getElementById("chatSendBtn");

  let userProfile = {};

  intakeForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const skinType = skinTypeChips.querySelector(".selected");
    const procedure = procedureChips.querySelector(".selected");
    const concerns = [...concernChips.querySelectorAll(".selected")].map((c) => c.dataset.value);

    if (!skinType) {
      alert("Please select your skin type 💕");
      return;
    }
    if (concerns.length === 0) {
      alert("Please select at least one concern 💕");
      return;
    }
    if (!procedure) {
      alert("Please let us know if you're open to procedures 💕");
      return;
    }

    userProfile = {
      name: document.getElementById("userName").value.trim(),
      age: document.getElementById("userAge").value,
      budget: document.getElementById("userBudget").value,
      location: document.getElementById("userLocation").value.trim(),
      skinType: skinType.dataset.value,
      concerns: concerns,
      procedureOpenness: procedure.dataset.value,
      message: document.getElementById("userMessage").value.trim(),
      plan: selectedPlan,
    };

    // Send to Google Sheets
    submitToGoogleSheets(userProfile);

    intakeSection.style.display = "none";
    chatSection.style.display = "block";
    chatSection.style.animation = "fadeInUp 0.5s ease-out";
    window.scrollTo({ top: 0, behavior: "smooth" });

    chatMessages.innerHTML = "";
    startConsultation();
  });

  // ---- Chat Logic ----
  chatSendBtn.addEventListener("click", () => sendUserMessage());
  chatInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") sendUserMessage();
  });

  function sendUserMessage() {
    const text = chatInput.value.trim();
    if (!text) return;
    appendMessage("user", text);
    chatInput.value = "";

    showTyping();
    setTimeout(() => {
      removeTyping();
      const reply = generateFollowUp(text);
      appendMessage("bot", reply);
    }, 1500 + Math.random() * 1000);
  }

  function appendMessage(role, html) {
    const bubble = document.createElement("div");
    bubble.className = `chat-bubble ${role}`;
    bubble.innerHTML = html;
    chatMessages.appendChild(bubble);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function showTyping() {
    const typing = document.createElement("div");
    typing.className = "typing-indicator";
    typing.id = "typingIndicator";
    typing.innerHTML = "<span></span><span></span><span></span>";
    chatMessages.appendChild(typing);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  function removeTyping() {
    const el = document.getElementById("typingIndicator");
    if (el) el.remove();
  }

  function resetForm() {
    intakeForm.reset();
    document.querySelectorAll(".chip.selected").forEach((c) => c.classList.remove("selected"));
    chatMessages.innerHTML = "";
  }

  // ---- AI Consultation Generator ----
  function startConsultation() {
    const { name, age, budget, location, skinType, concerns, procedureOpenness, plan } = userProfile;

    // Greeting
    showTyping();
    setTimeout(() => {
      removeTyping();
      appendMessage(
        "bot",
        `<h4>Hi ${name}! 💕</h4>
        <p>Thank you for trusting Glow with your beauty journey. I've analyzed your profile and I'm building a personalized plan just for you. Let me walk you through what I found…</p>`
      );

      // After a beat, show the analysis
      setTimeout(() => {
        showTyping();
        setTimeout(() => {
          removeTyping();
          appendMessage("bot", generateProfileSummary());

          // Then the recommendations
          setTimeout(() => {
            showTyping();
            setTimeout(() => {
              removeTyping();
              appendMessage("bot", generateRecommendations());

              // If pro/vip, add specialist info
              if (plan === "pro" || plan === "vip") {
                setTimeout(() => {
                  showTyping();
                  setTimeout(() => {
                    removeTyping();
                    appendMessage("bot", generateSpecialistInfo());
                  }, 1200);
                }, 800);
              }
            }, 1800);
          }, 600);
        }, 2000);
      }, 800);
    }, 1500);
  }

  function generateProfileSummary() {
    const { name, age, budget, location, skinType, concerns, procedureOpenness } = userProfile;
    const concernLabels = {
      acne: "Acne",
      aging: "Fine lines & aging",
      pigmentation: "Dark spots",
      texture: "Texture & scars",
      redness: "Redness",
      hydration: "Dryness & hydration",
      pores: "Pores",
      "dark-circles": "Dark circles",
      glow: "Overall radiance",
    };
    const concernList = concerns.map((c) => concernLabels[c] || c).join(", ");

    return `<h4>📋 Your Profile</h4>
      <ul>
        <li><strong>Age range:</strong> ${age}</li>
        <li><strong>Skin type:</strong> ${skinType}</li>
        <li><strong>Concerns:</strong> ${concernList}</li>
        <li><strong>Budget:</strong> ${budget}</li>
        <li><strong>Location:</strong> ${location}</li>
        <li><strong>Open to:</strong> ${formatProcedure(procedureOpenness)}</li>
      </ul>
      <p>Based on this, I've identified the most effective treatments and products within your budget. Here's your plan 👇</p>`;
  }

  function generateRecommendations() {
    const { concerns, budget, procedureOpenness, skinType, age, location } = userProfile;
    let html = `<span class="plan-tag">Your Personalized Plan</span>`;

    // Skincare routine
    html += `<h4>🧴 Your Daily Skincare Routine</h4>`;
    html += `<p>Here's a routine tailored to your <strong>${skinType}</strong> skin:</p><ul>`;

    // Morning
    html += `<li><strong>Morning:</strong> Gentle cleanser → `;
    if (concerns.includes("pigmentation") || concerns.includes("glow")) {
      html += `Vitamin C serum (<a href="https://www.sephora.com/shop/vitamin-c-skincare" target="_blank">browse options</a>) → `;
    } else if (concerns.includes("acne")) {
      html += `Niacinamide serum (<a href="https://www.sephora.com/shop/niacinamide-skincare" target="_blank">browse options</a>) → `;
    } else {
      html += `Hyaluronic acid serum → `;
    }
    html += `Moisturizer → SPF 50 (non-negotiable!)</li>`;

    // Evening
    html += `<li><strong>Evening:</strong> Double cleanse → `;
    if (concerns.includes("acne")) {
      html += `Salicylic acid (BHA) toner → `;
    } else if (concerns.includes("texture") || concerns.includes("pores")) {
      html += `Glycolic acid toner (3x/week) → `;
    } else {
      html += `Hydrating toner → `;
    }
    if (concerns.includes("aging") || age === "30-35" || age === "36-40") {
      html += `Retinol (start 2x/week, <a href="https://www.sephora.com/shop/retinol-skincare" target="_blank">shop retinol</a>) → `;
    }
    html += `Night cream with ceramides</li></ul>`;

    // Budget-specific product picks
    html += `<h4>💰 Products in Your Budget (${budget})</h4><ul>`;
    if (budget === "Under $50" || budget === "$50 – $150") {
      html += `<li><a href="https://www.cerave.com" target="_blank">CeraVe</a> — Affordable, dermatologist-backed cleansers & moisturizers</li>`;
      html += `<li><a href="https://theordinary.com" target="_blank">The Ordinary</a> — Incredible active ingredients at drugstore prices</li>`;
      html += `<li><a href="https://www.laroche-posay.us" target="_blank">La Roche-Posay</a> — Best SPF & sensitive skin options</li>`;
    } else {
      html += `<li><a href="https://www.skinceuticals.com" target="_blank">SkinCeuticals</a> — Gold-standard vitamin C & professional-grade actives</li>`;
      html += `<li><a href="https://www.drbarbarasturm.com" target="_blank">Dr. Barbara Sturm</a> — Luxury anti-aging & hydration</li>`;
      html += `<li><a href="https://www.augustinusbader.com" target="_blank">Augustinus Bader</a> — Cult-favorite cell renewal cream</li>`;
    }
    html += `</ul>`;

    // Procedures (if open to them)
    if (procedureOpenness !== "skincare-only") {
      html += `<h4>💉 Recommended Treatments near ${location}</h4><ul>`;
      if (concerns.includes("aging") || concerns.includes("texture")) {
        if (procedureOpenness === "open" || procedureOpenness === "anything") {
          html += `<li><strong>Baby Botox</strong> — Preventive doses for expression lines, $200-400/session (<a href="https://www.realself.com/botox" target="_blank">learn more</a>)</li>`;
        }
        html += `<li><strong>Microneedling</strong> — Collagen boost for texture & fine lines, $200-700/session (<a href="https://www.realself.com/microneedling" target="_blank">learn more</a>)</li>`;
      }
      if (concerns.includes("pigmentation")) {
        html += `<li><strong>IPL Treatment</strong> — Targets dark spots & sun damage, $300-600/session (<a href="https://www.realself.com/ipl-treatment" target="_blank">learn more</a>)</li>`;
      }
      if (concerns.includes("glow") || concerns.includes("hydration")) {
        html += `<li><strong>HydraFacial</strong> — Deep hydration & instant glow, $150-300/session (<a href="https://www.realself.com/hydrafacial" target="_blank">learn more</a>)</li>`;
      }
      if (concerns.includes("acne")) {
        html += `<li><strong>Chemical Peel</strong> — Clears congestion & smooths skin, $150-400/session (<a href="https://www.realself.com/chemical-peel" target="_blank">learn more</a>)</li>`;
      }
      if (concerns.includes("dark-circles") && (procedureOpenness === "open" || procedureOpenness === "anything")) {
        html += `<li><strong>Tear Trough Filler</strong> — Fills hollow under-eyes, $600-1200 (<a href="https://www.realself.com/tear-trough-implants" target="_blank">learn more</a>)</li>`;
      }
      if (procedureOpenness === "mild") {
        html += `<li><strong>Monthly Facial</strong> — Professional extractions, hydration & LED therapy, $100-250/session</li>`;
      }
      html += `</ul>`;
      html += `<p>🔍 <a href="https://www.realself.com/find" target="_blank">Find top-rated specialists near ${location}</a></p>`;
    }

    // Sweet advice
    const advices = [
      `Remember ${userProfile.name}, the best beauty investment is the one that makes you feel like yourself — only more radiant. ✨`,
      `${userProfile.name}, real beauty isn't about perfection — it's about feeling good in your own skin. You're already gorgeous. 🌸`,
      `Take it one step at a time, ${userProfile.name}. Consistency beats intensity every single day. You've got this! 💫`,
    ];
    html += `<div class="sweet-note">${advices[Math.floor(Math.random() * advices.length)]}</div>`;

    return html;
  }

  function generateSpecialistInfo() {
    const planLabel = userProfile.plan === "vip" ? "Glow VIP" : "Glow Pro";
    return `<h4>👩‍⚕️ Your ${planLabel} Specialist</h4>
      <p>As a <strong>${planLabel}</strong> member, you'll be matched with a certified beauty specialist who will:</p>
      <ul>
        <li>✅ Review your full profile & skin history</li>
        <li>✅ Fine-tune this plan during a ${userProfile.plan === "vip" ? "private" : "30-minute"} video consultation</li>
        <li>✅ Recommend specific clinics & doctors near <strong>${userProfile.location}</strong></li>
        <li>✅ Help you navigate pricing & book appointments</li>
        ${userProfile.plan === "vip" ? "<li>✅ Provide ongoing monthly check-ins & routine adjustments</li>" : "<li>✅ Follow up with you via chat for 7 days</li>"}
      </ul>
      <p>📅 We'll reach out within 24 hours to schedule your consultation. Keep an eye on your inbox!</p>
      <div class="sweet-note">You've just taken a beautiful step towards feeling your absolute best. We're so excited for you, ${userProfile.name}! 💝</div>`;
  }

  function generateFollowUp(question) {
    const q = question.toLowerCase();
    const { name, concerns, budget, location, procedureOpenness } = userProfile;

    if (q.includes("retinol") || q.includes("vitamin a")) {
      return `<p>Great question, ${name}! For your skin type, I'd recommend starting with a <strong>0.3% retinol</strong> 2-3 nights per week. Apply it after cleansing on dry skin, then moisturizer on top.</p>
        <p>⚠️ Always use SPF the next morning — retinol makes skin sun-sensitive. And give it 4-6 weeks before judging results.</p>
        <p>👉 <a href="https://www.sephora.com/shop/retinol-skincare" target="_blank">Browse beginner-friendly retinol products</a></p>
        <div class="sweet-note">Your skin might purge a little in weeks 2-3 — that's actually a good sign. Hang in there! 🌙</div>`;
    }

    if (q.includes("cost") || q.includes("price") || q.includes("expensive") || q.includes("afford") || q.includes("how much")) {
      return `<p>I totally understand wanting clarity on costs, ${name}. Here's a rough breakdown for your area (${location}):</p>
        <ul>
          <li><strong>Basic skincare routine:</strong> $30-80/month</li>
          <li><strong>Monthly facial:</strong> $100-250</li>
          <li><strong>Botox:</strong> $200-500/session (every 3-4 months)</li>
          <li><strong>Microneedling:</strong> $200-700/session</li>
          <li><strong>Laser treatments:</strong> $300-800/session</li>
          <li><strong>Fillers:</strong> $500-1200 (lasts 6-18 months)</li>
        </ul>
        <p>With your budget of <strong>${budget}</strong>, I'd prioritize a solid skincare routine first, then save up for targeted treatments. Quality skincare alone can transform your skin!</p>
        <div class="sweet-note">Remember — investing in your skin is never frivolous. It's self-care at its finest. 💰✨</div>`;
    }

    if (q.includes("botox") || q.includes("inject")) {
      return `<p>Botox is a popular choice for your age range, ${name}! Here's what to know:</p>
        <ul>
          <li>🎯 <strong>Best for:</strong> Forehead lines, frown lines, crow's feet</li>
          <li>⏱️ <strong>Takes:</strong> 15-20 minutes, minimal pain</li>
          <li>📅 <strong>Results:</strong> Show in 3-7 days, last 3-4 months</li>
          <li>💰 <strong>Cost:</strong> $200-500 near ${location}</li>
        </ul>
        <p>The key is finding a great injector — always go board-certified. 👉 <a href="https://www.realself.com/find/botox" target="_blank">Find top injectors near you</a></p>
        <div class="sweet-note">Start small (Baby Botox) and you'll still look 100% like you — just refreshed. 💫</div>`;
    }

    if (q.includes("sensitive") || q.includes("irritat") || q.includes("react")) {
      return `<p>With sensitive skin, less is more, ${name}. Here's my advice:</p>
        <ul>
          <li>🧴 Use fragrance-free, minimal-ingredient products</li>
          <li>🌡️ Patch test everything new on your inner arm for 24 hours</li>
          <li>🧊 Introduce one new product at a time, 2 weeks apart</li>
          <li>💧 Focus on barrier repair: ceramides, centella, panthenol</li>
        </ul>
        <p>👉 <a href="https://www.sephora.com/shop/sensitive-skin-care" target="_blank">Shop sensitive skin essentials</a></p>
        <div class="sweet-note">Sensitive skin isn't a weakness — it just means your skin is extra communicative. Listen to it! 🌸</div>`;
    }

    if (q.includes("spf") || q.includes("sunscreen") || q.includes("sun")) {
      return `<p>SPF is literally the #1 anti-aging product, ${name}! Here's my quick guide:</p>
        <ul>
          <li>☀️ <strong>Use SPF 50 broad-spectrum</strong> every single day — even cloudy days</li>
          <li>🔄 Reapply every 2 hours if outdoors</li>
          <li>🧴 <strong>Chemical SPF</strong> — lightweight, great under makeup</li>
          <li>🪨 <strong>Mineral SPF</strong> — better for sensitive/rosacea-prone skin</li>
        </ul>
        <p>👉 <a href="https://www.sephora.com/shop/sunscreen-faces" target="_blank">Find your perfect SPF</a></p>
        <div class="sweet-note">Think of sunscreen as your daily love letter to future-you. 🌻</div>`;
    }

    // Generic follow-up
    return `<p>That's a great question, ${name}! Based on your profile (${userProfile.skinType} skin, focused on ${concerns.slice(0, 2).join(" & ")}), here's what I'd suggest:</p>
      <p>For the most personalized answer, I'd recommend ${
        userProfile.plan === "starter"
          ? `upgrading to <strong>Glow Pro</strong> where a certified specialist can discuss this with you in detail during a 30-min video call.`
          : `discussing this during your upcoming specialist consultation — they'll have the expertise to give you the most accurate advice for your specific situation.`
      }</p>
      <p>In the meantime, I recommend checking these resources:</p>
      <ul>
        <li>👉 <a href="https://www.realself.com" target="_blank">RealSelf</a> — Real reviews & before/afters</li>
        <li>👉 <a href="https://www.paulaschoice.com/skin-care-advice" target="_blank">Paula's Choice</a> — Evidence-based skincare guides</li>
        <li>👉 <a href="https://www.aad.org" target="_blank">AAD</a> — American Academy of Dermatology resources</li>
      </ul>
      <div class="sweet-note">No question is too small or silly — asking is always the smart thing to do! 💕</div>`;
  }

  function formatProcedure(value) {
    const labels = {
      "skincare-only": "Skincare products only",
      mild: "Mild procedures (facials, peels)",
      open: "Open to injectables",
      anything: "Open to all treatments",
    };
    return labels[value] || value;
  }

  // ---- Google Sheets Integration ----
  function submitToGoogleSheets(profile) {
    if (!GOOGLE_SHEET_URL) {
      console.log("Google Sheets URL not configured — form data logged locally:", profile);
      return;
    }

    const payload = {
      timestamp: new Date().toISOString(),
      plan: profile.plan,
      name: profile.name,
      age: profile.age,
      budget: profile.budget,
      location: profile.location,
      skinType: profile.skinType,
      concerns: profile.concerns.join(", "),
      procedureOpenness: formatProcedure(profile.procedureOpenness),
      message: profile.message,
    };

    fetch(GOOGLE_SHEET_URL, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    })
      .then(() => console.log("✅ Form submitted to Google Sheets"))
      .catch((err) => console.error("❌ Google Sheets submission error:", err));
  }
});
