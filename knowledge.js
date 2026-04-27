/**
 * Glow — Beauty Knowledge Base
 * Curated answers for common beauty concerns
 */

const knowledgeBase = [
  {
    id: "dark-circles",
    keywords: ["dark circles", "under eye", "under eyes", "eye bags", "puffy eyes", "undereye", "bags under", "tired eyes", "hollow eyes", "eye hollows", "tear trough"],
    question: "What's the best treatment for dark circles?",
    badge: "Eye Care",
    intro: "Dark circles are so common, and they can be caused by genetics, lack of sleep, thin under-eye skin, or even allergies. The good news? There are real solutions that work — from simple skincare to professional treatments. Here's what actually helps:",
    recommendations: [
      {
        name: "Vitamin C + Caffeine Eye Serum",
        type: "skincare",
        desc: "A lightweight eye serum with vitamin C brightens pigmentation while caffeine reduces puffiness by constricting blood vessels. Apply every morning on clean skin before moisturizer.",
        link: "https://www.sephora.com/shop/eye-cream-dark-circles",
        linkText: "Shop Vitamin C Eye Serums →"
      },
      {
        name: "Retinol Eye Cream (start low, 0.025%)",
        type: "skincare",
        desc: "Retinol boosts collagen production and thickens the delicate under-eye skin over time, making dark circles less visible. Start with a low concentration 2-3 times a week at night.",
        link: "https://www.paulaschoice.com/skin-care-advice/retinol",
        linkText: "Learn about retinol for eyes →"
      },
      {
        name: "Tear Trough Filler (Hyaluronic Acid)",
        type: "procedure",
        desc: "If your dark circles are caused by volume loss (hollow look), hyaluronic acid filler injected under the eyes can instantly brighten the area. Results last 12-18 months. Always go to a board-certified injector.",
        link: "https://www.realself.com/tear-trough-implants",
        linkText: "Read real patient reviews →"
      },
      {
        name: "Get 7-8 Hours of Quality Sleep",
        type: "lifestyle",
        desc: "It sounds simple, but sleep is when your skin repairs itself. Elevate your pillow slightly to prevent fluid from pooling under your eyes overnight.",
        link: "https://www.sleepfoundation.org/how-sleep-works/how-sleep-works",
        linkText: "Sleep tips from experts →"
      }
    ],
    sweetAdvice: "Remember, a little concealer on a tired day is totally fine — even supermodels use it. You're already beautiful, and these small steps are just about helping you feel your best. 🌸"
  },
  {
    id: "acne-scars",
    keywords: ["acne scars", "acne marks", "pimple scars", "post acne", "acne scarring", "acne hyperpigmentation", "pimple marks", "textured skin", "ice pick scars", "boxcar scars", "rolling scars", "acne pits"],
    question: "How do I get rid of acne scars?",
    badge: "Skin Texture",
    intro: "Acne scars can feel frustrating, but you're definitely not stuck with them. The right approach depends on whether your scars are pigmented (dark marks) or textured (pits/indentations). Here's what dermatologists actually recommend:",
    recommendations: [
      {
        name: "Vitamin C Serum (15-20%)",
        type: "skincare",
        desc: "A potent vitamin C serum helps fade dark post-acne marks by inhibiting melanin production. Look for L-ascorbic acid formulas. Use every morning under SPF for best results.",
        link: "https://www.sephora.com/shop/vitamin-c-skincare",
        linkText: "Shop Vitamin C serums →"
      },
      {
        name: "Chemical Exfoliant (AHA/BHA)",
        type: "skincare",
        desc: "Glycolic acid (AHA) or salicylic acid (BHA) gently dissolves dead skin cells and speeds up cell turnover, helping scars fade faster. Start with 2-3 times a week.",
        link: "https://www.paulaschoice.com/skin-care-advice/exfoliants",
        linkText: "Guide to chemical exfoliants →"
      },
      {
        name: "Microneedling (Professional)",
        type: "procedure",
        desc: "Microneedling creates tiny controlled injuries that trigger your skin's healing response, producing new collagen. Amazing for textured scars — most people see results after 3-6 sessions.",
        link: "https://www.realself.com/microneedling",
        linkText: "See before & after photos →"
      },
      {
        name: "Fractional Laser Resurfacing",
        type: "procedure",
        desc: "For deeper scars, fractional CO2 or Erbium lasers resurface the skin at a deeper level. More downtime (5-7 days of redness) but dramatic results for stubborn scarring.",
        link: "https://www.realself.com/fractional-laser-skin-resurfacing",
        linkText: "Compare laser options →"
      }
    ],
    sweetAdvice: "Scars tell a story, and yours is one of resilience. While you work on fading them, please wear SPF 50 daily — sun exposure is the #1 reason scars darken. You're doing great, beautiful. ☀️"
  },
  {
    id: "anti-aging-20s-30s",
    keywords: ["anti aging", "anti-aging", "aging", "wrinkles", "fine lines", "preventive", "prevention", "late 20s", "early 30s", "look younger", "forehead lines", "crow's feet", "laugh lines", "aging skin", "first wrinkles", "premature aging"],
    question: "What's the best anti-aging routine for my late 20s / early 30s?",
    badge: "Prevention",
    intro: "Your late 20s and early 30s are the perfect time to start — your skin is still resilient, and prevention is 10x easier than correction. You don't need 20 products, just the right ones. Here's a dermatologist-backed routine:",
    recommendations: [
      {
        name: "SPF 50 Every Single Day",
        type: "skincare",
        desc: "This is THE #1 anti-aging product, period. UV damage causes 80-90% of visible aging. Use a broad-spectrum SPF 50 daily, even indoors. Look for elegant, non-greasy formulas you'll actually enjoy wearing.",
        link: "https://www.sephora.com/shop/sunscreen-faces",
        linkText: "Shop face sunscreens →"
      },
      {
        name: "Retinol (Vitamin A) at Night",
        type: "skincare",
        desc: "Retinol is the gold standard for anti-aging. It boosts collagen, speeds cell turnover, and prevents fine lines. Start with 0.3% retinol 2-3x per week, then build up. Your skin may purge initially — that's normal.",
        link: "https://www.sephora.com/shop/retinol-skincare",
        linkText: "Browse retinol products →"
      },
      {
        name: "Preventive Botox ('Baby Botox')",
        type: "procedure",
        desc: "Small doses of Botox in expression lines (forehead, between brows, crow's feet) prevent them from becoming permanent creases. Many women start in their late 20s. Results last 3-4 months.",
        link: "https://www.realself.com/botox",
        linkText: "Learn about Baby Botox →"
      },
      {
        name: "Hyaluronic Acid + Peptide Moisturizer",
        type: "skincare",
        desc: "Hyaluronic acid holds 1000x its weight in water, keeping skin plump. Peptides signal your skin to produce more collagen. Together, they're a hydration powerhouse.",
        link: "https://www.sephora.com/shop/hyaluronic-acid-skincare",
        linkText: "Shop hydrating skincare →"
      }
    ],
    sweetAdvice: "Starting early doesn't mean you're vain — it means you're smart. Future you will thank present you for every drop of sunscreen and every night of retinol. Keep glowing, love. 🌙"
  },
  {
    id: "glowing-skin",
    keywords: ["glow", "glowing skin", "radiant", "dull skin", "bright skin", "luminous", "dewy", "glass skin", "healthy glow", "dullness", "skin brightening", "radiance"],
    question: "How do I get glowing, radiant skin?",
    badge: "Radiance",
    intro: "That lit-from-within glow isn't just good genes — it's good habits and the right products. Glowing skin means well-hydrated, exfoliated, and nourished skin. Here's how to actually get there:",
    recommendations: [
      {
        name: "Glycolic Acid Toner (5-7%)",
        type: "skincare",
        desc: "A gentle glycolic acid toner dissolves dead skin buildup that causes dullness. Use 3-4 nights a week after cleansing. Your skin will look brighter within a week.",
        link: "https://www.sephora.com/shop/glycolic-acid-skincare",
        linkText: "Shop glycolic toners →"
      },
      {
        name: "Vitamin C Serum Every Morning",
        type: "skincare",
        desc: "Vitamin C is an antioxidant that brightens, evens tone, and protects against pollution. Apply on clean skin before moisturizer and SPF. Look for 15-20% L-ascorbic acid.",
        link: "https://www.sephora.com/shop/vitamin-c-skincare",
        linkText: "Find your Vitamin C →"
      },
      {
        name: "HydraFacial Treatment",
        type: "procedure",
        desc: "A HydraFacial deeply cleanses, exfoliates, and hydrates in one session. No downtime, instant glow. Perfect before events or as a monthly skin maintenance treatment.",
        link: "https://www.realself.com/hydrafacial",
        linkText: "Find HydraFacial near you →"
      },
      {
        name: "Hydrate from the Inside Out",
        type: "lifestyle",
        desc: "Drink at least 2L of water daily, eat omega-3 rich foods (salmon, avocado, walnuts), and get your beauty sleep. Glowing skin starts from within.",
        link: "https://www.healthline.com/nutrition/foods-for-healthy-skin",
        linkText: "Best foods for your skin →"
      }
    ],
    sweetAdvice: "That glow you're chasing? It's already inside you — you're just learning how to let it shine through. Be consistent, be patient, and enjoy the ritual. 🫧"
  },
  {
    id: "botox",
    keywords: ["botox", "botulinum", "baby botox", "preventive botox", "forehead botox", "frown lines", "expression lines", "wrinkle injection", "dysport", "xeomin", "neurotoxin"],
    question: "Is Botox worth it in your early 30s?",
    badge: "Injectables",
    intro: "Great question — and one a lot of women in their early 30s are asking. The short answer: if you're starting to notice lines that linger even when your face is relaxed, preventive Botox can be a great investment. Here's the full picture:",
    recommendations: [
      {
        name: "Preventive Botox (20-30 units)",
        type: "procedure",
        desc: "Starting Botox in your early 30s with small doses prevents dynamic lines (forehead, frown, crow's feet) from becoming permanent wrinkles. It relaxes muscles so lines can't deepen. Results last 3-4 months.",
        link: "https://www.realself.com/botox",
        linkText: "Read real Botox reviews →"
      },
      {
        name: "Choose Your Injector Wisely",
        type: "procedure",
        desc: "Always go to a board-certified dermatologist or plastic surgeon. A good injector preserves natural movement — you should still look like you. Ask to see their before/after photos.",
        link: "https://www.realself.com/find/botox",
        linkText: "Find certified injectors →"
      },
      {
        name: "Topical Alternatives: Argireline Serum",
        type: "skincare",
        desc: "If you're not ready for needles, Argireline (acetyl hexapeptide-3) is called 'Botox in a bottle.' It mildly relaxes facial muscles topically. Not as strong as Botox, but a good stepping stone.",
        link: "https://www.sephora.com/shop/anti-wrinkle-skincare",
        linkText: "Shop peptide serums →"
      },
      {
        name: "Retinol + SPF as Your Foundation",
        type: "skincare",
        desc: "Whether or not you get Botox, a daily retinol + SPF combo is non-negotiable for anti-aging. They work on the skin's structure while Botox works on the muscles — together, they're unbeatable.",
        link: "https://www.paulaschoice.com/skin-care-advice/anti-aging-wrinkles",
        linkText: "Anti-aging skincare guide →"
      }
    ],
    sweetAdvice: "There's no wrong answer here — whether you choose Botox or prefer to go the skincare-only route, what matters is that you feel confident. Your body, your rules, always. 💫"
  },
  {
    id: "lip-fillers",
    keywords: ["lip filler", "lip fillers", "lip injection", "lip augmentation", "bigger lips", "fuller lips", "lip plump", "lip volume", "juvederm", "restylane lip", "thin lips"],
    question: "What should I know about lip fillers?",
    badge: "Injectables",
    intro: "Lip fillers have come a long way — when done well, they look completely natural. Whether you want subtle fullness or defined borders, here's everything you need to know before your appointment:",
    recommendations: [
      {
        name: "Hyaluronic Acid Lip Filler (0.5-1ml)",
        type: "procedure",
        desc: "HA fillers (Juvederm, Restylane) add volume and definition while feeling natural. Start with 0.5ml for a subtle enhancement — you can always add more later. Results last 6-12 months and are fully reversible.",
        link: "https://www.realself.com/lip-augmentation",
        linkText: "See lip filler results →"
      },
      {
        name: "Lip Flip (Botox Alternative)",
        type: "procedure",
        desc: "If you want a subtle pout without filler, a 'lip flip' uses a tiny amount of Botox along the upper lip to gently roll it outward. Lasts 6-8 weeks. Great as a first-time treatment.",
        link: "https://www.realself.com/lip-flip",
        linkText: "Learn about lip flip →"
      },
      {
        name: "Lip-Plumping Gloss (No Needles)",
        type: "skincare",
        desc: "If you want temporary fullness without commitment, peptide-infused lip glosses with hyaluronic acid provide a plumping effect that lasts a few hours. Great for special occasions.",
        link: "https://www.sephora.com/shop/lip-plumper",
        linkText: "Shop lip plumpers →"
      },
      {
        name: "Lip Care Routine",
        type: "skincare",
        desc: "Keep your lips in top shape with a sugar lip scrub 1-2x per week and a hydrating lip balm with SPF daily. Healthy lips hold filler better and look more beautiful naturally.",
        link: "https://www.sephora.com/shop/lip-balms-treatments",
        linkText: "Shop lip treatments →"
      }
    ],
    sweetAdvice: "Whether you add a little filler or just rock a great lip gloss, your smile is your most beautiful feature. Own it! 💋"
  },
  {
    id: "pores",
    keywords: ["pores", "large pores", "minimize pores", "open pores", "visible pores", "pore size", "shrink pores", "big pores", "nose pores", "blackheads", "clogged pores", "sebaceous filaments"],
    question: "How do I minimize large pores?",
    badge: "Skin Texture",
    intro: "Let's be real — you can't actually change your pore size (it's genetic), but you can absolutely make them look smaller. The trick is keeping them clean and your skin smooth. Here's what really works:",
    recommendations: [
      {
        name: "Niacinamide Serum (10%)",
        type: "skincare",
        desc: "Niacinamide regulates oil production and visibly tightens pores over time. It's gentle enough for daily use, morning and night. One of the most researched ingredients for pore appearance.",
        link: "https://www.sephora.com/shop/niacinamide-skincare",
        linkText: "Shop Niacinamide serums →"
      },
      {
        name: "BHA Exfoliant (Salicylic Acid 2%)",
        type: "skincare",
        desc: "BHA is oil-soluble, meaning it gets inside your pores to dissolve buildup. Use 2-3 times a week. This is the single best ingredient for keeping pores clear and minimized.",
        link: "https://www.paulaschoice.com/skin-care-advice/paulas-choice-product-tips/skin-perfecting-2-bha-liquid-exfoliant",
        linkText: "Popular BHA exfoliant →"
      },
      {
        name: "Chemical Peel (Light/Medium)",
        type: "procedure",
        desc: "Professional chemical peels (glycolic, mandelic, or TCA) remove the top layer of skin, refining pore appearance and texture. Monthly treatments give the best cumulative results.",
        link: "https://www.realself.com/chemical-peel",
        linkText: "Learn about chemical peels →"
      },
      {
        name: "Oil Cleansing Method",
        type: "skincare",
        desc: "Counterintuitive but true: cleansing with an oil-based cleanser dissolves sebaceous filaments (those dots on your nose) better than harsh scrubs. Double cleanse every evening.",
        link: "https://www.sephora.com/shop/cleansing-oil",
        linkText: "Shop cleansing oils →"
      }
    ],
    sweetAdvice: "Fun fact: pores are a sign of healthy, living skin — literally everyone has them. While you minimize their appearance, remember that nobody sees them as closely as you do. You look amazing. 🪞"
  },
  {
    id: "hyperpigmentation",
    keywords: ["hyperpigmentation", "dark spots", "sun spots", "melasma", "uneven skin tone", "discoloration", "skin discoloration", "brown spots", "age spots", "pigmentation", "uneven tone", "skin tone"],
    question: "How do I treat hyperpigmentation and dark spots?",
    badge: "Brightening",
    intro: "Hyperpigmentation is one of the most common skin concerns — whether it's from sun exposure, hormones, or post-inflammatory marks. The key is patience and the right ingredients. Here's your game plan:",
    recommendations: [
      {
        name: "Vitamin C + Alpha Arbutin Serum",
        type: "skincare",
        desc: "This combo is a brightening powerhouse. Vitamin C (L-ascorbic acid) inhibits melanin production while alpha arbutin gently fades existing spots. Use every morning before SPF.",
        link: "https://www.sephora.com/shop/dark-spot-correctors",
        linkText: "Shop dark spot correctors →"
      },
      {
        name: "SPF 50 (Non-Negotiable)",
        type: "skincare",
        desc: "Any dark spot treatment is useless without strict sun protection. UV light triggers melanin production and darkens existing spots. Reapply every 2 hours when outdoors.",
        link: "https://www.laroche-posay.us/sunscreen",
        linkText: "Shop dermatologist-loved SPF →"
      },
      {
        name: "Tranexamic Acid Serum",
        type: "skincare",
        desc: "A rising star for melasma and stubborn pigmentation. Tranexamic acid blocks the pigmentation pathway at multiple levels. Gentle enough for sensitive skin. Use morning and/or night.",
        link: "https://www.sephora.com/shop/tranexamic-acid-skincare",
        linkText: "Explore tranexamic acid →"
      },
      {
        name: "IPL / Laser Treatment",
        type: "procedure",
        desc: "Intense Pulsed Light (IPL) or laser treatments can dramatically reduce stubborn sun spots and pigmentation in 1-3 sessions. Best done in fall/winter when sun exposure is lower.",
        link: "https://www.realself.com/ipl-treatment",
        linkText: "Learn about IPL treatments →"
      }
    ],
    sweetAdvice: "Dark spots take time to fade — we're talking 8-12 weeks of consistent use. Be patient with yourself and your skin. You're doing all the right things, and the results will come. 🌻"
  },
  {
    id: "dry-skin",
    keywords: ["dry skin", "dehydrated", "flaky", "tight skin", "moisture", "moisturizer", "cracked skin", "peeling skin", "dry patches", "winter skin", "barrier repair", "skin barrier", "damaged barrier"],
    question: "How do I fix dry, dehydrated skin?",
    badge: "Hydration",
    intro: "Dry and dehydrated skin are actually two different things — dry skin lacks oil, dehydrated skin lacks water. Most people have a mix of both. The good news: a few simple swaps can transform your skin in days. Here's how:",
    recommendations: [
      {
        name: "Ceramide-Rich Moisturizer",
        type: "skincare",
        desc: "Ceramides are the building blocks of your skin barrier. A ceramide cream repairs and strengthens the barrier, locking in moisture. Apply on damp skin for best absorption.",
        link: "https://www.sephora.com/shop/ceramide-skincare",
        linkText: "Shop ceramide creams →"
      },
      {
        name: "Hyaluronic Acid Layering",
        type: "skincare",
        desc: "Apply hyaluronic acid serum on damp skin (this is key!), then seal with moisturizer. HA pulls water into your skin, but needs moisture on top to prevent it from evaporating.",
        link: "https://www.sephora.com/shop/hyaluronic-acid-skincare",
        linkText: "Shop HA serums →"
      },
      {
        name: "Gentle Cleanser (Cream/Oil-Based)",
        type: "skincare",
        desc: "Ditch foaming cleansers — they strip natural oils. Switch to a cream, milk, or oil-based cleanser that cleans without that tight feeling. Your barrier will thank you.",
        link: "https://www.sephora.com/shop/cleansers-for-dry-skin",
        linkText: "Shop gentle cleansers →"
      },
      {
        name: "Hydrating Facial (Professional)",
        type: "procedure",
        desc: "A professional hydrating facial with hyaluronic acid infusion, enzyme mask, and LED therapy can deeply replenish moisture. Perfect as a monthly treat for persistently dry skin.",
        link: "https://www.realself.com/hydrafacial",
        linkText: "Find hydrating facials →"
      }
    ],
    sweetAdvice: "Your skin is simply asking for a little more love right now. Think of your skincare routine as a cozy ritual — a few minutes of self-care that tell your skin 'I've got you.' 🧴"
  },
  {
    id: "acne",
    keywords: ["acne", "breakouts", "pimples", "zits", "hormonal acne", "cystic acne", "adult acne", "chin acne", "jawline acne", "blemishes", "spots", "whiteheads", "papules"],
    question: "What's the best treatment for adult acne?",
    badge: "Acne Care",
    intro: "Dealing with acne as an adult can feel so unfair — but you're far from alone. Adult acne (especially hormonal, along the jawline and chin) affects many women in their late 20s and 30s. Let's tackle it together:",
    recommendations: [
      {
        name: "Salicylic Acid Cleanser (2%)",
        type: "skincare",
        desc: "BHA (salicylic acid) unclogs pores and reduces inflammation. Use as your daily cleanser, letting it sit on skin for 60 seconds before rinsing. Gentle enough for everyday use.",
        link: "https://www.sephora.com/shop/salicylic-acid-skincare",
        linkText: "Shop BHA cleansers →"
      },
      {
        name: "Benzoyl Peroxide (2.5%) Spot Treatment",
        type: "skincare",
        desc: "BP kills acne bacteria on contact. The 2.5% concentration is just as effective as 10% but way less irritating. Dab on active pimples at night. Heads up: it can bleach pillowcases!",
        link: "https://www.paulaschoice.com/skin-care-advice/acne",
        linkText: "Acne treatment guide →"
      },
      {
        name: "Spironolactone (Prescription)",
        type: "procedure",
        desc: "For hormonal acne that doesn't respond to topicals, spironolactone (a prescription medication) blocks androgens that trigger breakouts. Talk to your dermatologist — it's a game-changer for many women.",
        link: "https://www.realself.com/spironolactone-for-acne",
        linkText: "Learn about spironolactone →"
      },
      {
        name: "LED Blue Light Therapy",
        type: "procedure",
        desc: "Blue LED light kills acne-causing bacteria without irritation. Available as professional treatments or at-home devices. Great as an add-on to your skincare routine.",
        link: "https://www.sephora.com/shop/led-light-therapy",
        linkText: "Shop LED devices →"
      }
    ],
    sweetAdvice: "Acne doesn't define your beauty — not even a little. Be gentle with your skin and with yourself. Consistency over perfection, always. Clear days are coming. 🌷"
  },
  {
    id: "rosacea",
    keywords: ["rosacea", "redness", "red face", "flushing", "broken capillaries", "red cheeks", "sensitive skin redness", "visible veins", "spider veins face", "facial redness"],
    question: "How do I manage rosacea and facial redness?",
    badge: "Sensitive Skin",
    intro: "Rosacea and persistent redness can feel tricky to manage, but with the right approach, it absolutely gets better. The key is calming inflammation and strengthening your skin barrier. Here's what helps most:",
    recommendations: [
      {
        name: "Azelaic Acid (15-20%)",
        type: "skincare",
        desc: "Azelaic acid is a dermatologist favorite for rosacea — it reduces redness, calms inflammation, and even treats bumps. Gentle enough for sensitive skin. Use morning and/or evening.",
        link: "https://www.paulaschoice.com/skin-care-advice/rosacea",
        linkText: "Rosacea skincare guide →"
      },
      {
        name: "Centella Asiatica (Cica) Moisturizer",
        type: "skincare",
        desc: "Cica (centella asiatica) is a powerhouse for calming irritated, red skin. Look for moisturizers with centella, ceramides, and panthenol — the holy trinity of barrier repair.",
        link: "https://www.sephora.com/shop/cica-skincare",
        linkText: "Shop Cica products →"
      },
      {
        name: "IPL / V-Beam Laser",
        type: "procedure",
        desc: "For persistent redness and visible blood vessels, IPL or V-Beam pulsed dye laser targets and reduces broken capillaries. Usually 2-4 sessions needed. Very effective for rosacea-related redness.",
        link: "https://www.realself.com/ipl-treatment",
        linkText: "Learn about IPL for redness →"
      },
      {
        name: "Mineral SPF (Zinc Oxide)",
        type: "skincare",
        desc: "Chemical sunscreens can trigger rosacea flares. Switch to a mineral/physical sunscreen with zinc oxide — it's anti-inflammatory and sits on top of skin rather than absorbing in.",
        link: "https://www.sephora.com/shop/mineral-sunscreen",
        linkText: "Shop mineral sunscreens →"
      }
    ],
    sweetAdvice: "Sensitive skin isn't a flaw — it just means your skin needs a little extra kindness. Treat your routine like a gentle hug for your face. You're doing beautifully. 🌸"
  },
  {
    id: "hair-removal",
    keywords: ["hair removal", "laser hair", "waxing", "unwanted hair", "facial hair", "body hair", "upper lip hair", "peach fuzz", "ingrown hairs", "shaving", "ipl hair removal", "electrolysis"],
    question: "What's the best method for hair removal?",
    badge: "Hair Removal",
    intro: "From peach fuzz to body hair, there are so many options now — and no one-size-fits-all answer. The best method depends on the area, your skin tone, and how permanent you want the results. Here's the breakdown:",
    recommendations: [
      {
        name: "Laser Hair Removal (Professional)",
        type: "procedure",
        desc: "The gold standard for long-term reduction. Works best on dark hair/lighter skin, but newer lasers (Nd:YAG) work on all skin tones. Usually 6-8 sessions needed. Worth every session.",
        link: "https://www.realself.com/laser-hair-removal",
        linkText: "Find laser hair removal →"
      },
      {
        name: "At-Home IPL Device",
        type: "skincare",
        desc: "Devices like the Braun Silk Expert or Ulike use IPL technology at home. More affordable than professional laser, but requires consistency (weekly for 8-12 weeks, then monthly touch-ups).",
        link: "https://www.sephora.com/shop/hair-removal-devices",
        linkText: "Shop IPL devices →"
      },
      {
        name: "Dermaplaning (Face)",
        type: "procedure",
        desc: "A gentle blade removes peach fuzz and dead skin from your face, leaving it silky smooth. Also helps skincare absorb better. Can be done professionally or with at-home tools.",
        link: "https://www.realself.com/dermaplaning",
        linkText: "Learn about dermaplaning →"
      },
      {
        name: "Ingrown Hair Prevention",
        type: "skincare",
        desc: "Whichever method you choose, prevent ingrowns with a glycolic acid body lotion and gentle exfoliation 2-3 times a week. Avoid tight clothing on freshly treated areas.",
        link: "https://www.sephora.com/shop/body-exfoliators",
        linkText: "Shop body exfoliators →"
      }
    ],
    sweetAdvice: "Your body hair choices are 100% yours — remove it, keep it, do whatever makes you feel comfortable and confident. There's no wrong answer here, only your answer. 🦋"
  },
  {
    id: "under-eye",
    keywords: ["eye cream", "eye bags", "puffy eyes", "under eye wrinkles", "eye wrinkles", "crow feet", "crows feet", "eye aging", "tired looking eyes", "eye puffiness", "swollen eyes morning"],
    question: "What's the best eye cream and under-eye care?",
    badge: "Eye Care",
    intro: "The under-eye area is the thinnest, most delicate skin on your face — it shows everything from fatigue to aging first. But with the right care, you can keep it looking fresh and bright. Here's what really works:",
    recommendations: [
      {
        name: "Peptide Eye Cream",
        type: "skincare",
        desc: "Peptides stimulate collagen production in the delicate eye area without irritation. Look for formulas with palmitoyl tripeptide and copper peptides. Apply with your ring finger (lightest pressure).",
        link: "https://www.sephora.com/shop/eye-cream",
        linkText: "Shop peptide eye creams →"
      },
      {
        name: "Caffeine Eye Serum",
        type: "skincare",
        desc: "Caffeine constricts blood vessels and reduces puffiness fast. Keep your eye serum in the fridge for an extra de-puffing boost. Perfect for mornings when you need to look awake quickly.",
        link: "https://www.sephora.com/shop/eye-serum",
        linkText: "Shop eye serums →"
      },
      {
        name: "Under-Eye Filler",
        type: "procedure",
        desc: "For hollow under-eyes or deep tear troughs that no cream can fix, hyaluronic acid filler adds volume and reduces the shadow effect. Subtle but transformative. Go to an experienced injector.",
        link: "https://www.realself.com/tear-trough-implants",
        linkText: "Read about under-eye filler →"
      },
      {
        name: "Cold Compress + Lymphatic Massage",
        type: "lifestyle",
        desc: "Morning puffiness? Use a cold jade roller or chilled spoons for 2 minutes, rolling outward toward your ears. This drains excess fluid. Do it daily for the best results.",
        link: "https://www.healthline.com/health/beauty-skin-care/jade-roller",
        linkText: "Jade roller techniques →"
      }
    ],
    sweetAdvice: "Your eyes tell the most beautiful stories. A little extra care for the area around them is just making sure the frame matches the masterpiece. 👁️✨"
  }
];

// Default/fallback response for unmatched queries
const defaultResponse = {
  question: "Great question!",
  badge: "General Beauty",
  intro: "I don't have a specific answer ready for that exact question yet, but here are some universal beauty tips that dermatologists recommend for women in their late 20s to early 30s. These are the foundation of any great beauty routine:",
  recommendations: [
    {
      name: "SPF 50 Every Day — Rain or Shine",
      type: "skincare",
      desc: "Sunscreen is the most important beauty product you'll ever own. 80-90% of visible aging comes from UV damage. Find one you love wearing, and you'll actually use it every day.",
      link: "https://www.sephora.com/shop/sunscreen-faces",
      linkText: "Shop face sunscreens →"
    },
    {
      name: "Retinol — Start Low, Go Slow",
      type: "skincare",
      desc: "Retinol (vitamin A) is the gold standard for anti-aging, acne, texture, and tone. Start with 0.3% 2-3x per week at night. Your skin will adjust and the results are worth it.",
      link: "https://www.sephora.com/shop/retinol-skincare",
      linkText: "Browse retinol options →"
    },
    {
      name: "Consult a Dermatologist",
      type: "procedure",
      desc: "For specific concerns, nothing beats a professional opinion. A dermatologist can analyze your skin and create a personalized plan. Many offer virtual consultations now.",
      link: "https://www.zocdoc.com/dermatologists",
      linkText: "Find a dermatologist near you →"
    },
    {
      name: "Hydrate, Sleep, Repeat",
      type: "lifestyle",
      desc: "No product can replace the basics: 2L of water daily, 7-8 hours of sleep, and managing stress. Your skin is a reflection of your overall health and wellbeing.",
      link: "https://www.healthline.com/nutrition/foods-for-healthy-skin",
      linkText: "Skin health from within →"
    }
  ],
  sweetAdvice: "Every skin journey is unique, and it's totally okay not to have all the answers yet. You're already ahead just by caring enough to ask. Try refining your question above, and I'll do my best to help! 💕"
};
