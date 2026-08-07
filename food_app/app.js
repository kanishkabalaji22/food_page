/**
 * AURA - Anti-Gravity Natural Health Foods E-Commerce Engine
 */

// Product Database with granular transparency data
const PRODUCTS = [
  {
    id: 'honey-wildflower',
    title: 'Pure Raw Wildflower Honey',
    category: 'honey',
    categoryLabel: 'Pure Honey & Bee Products',
    purityBadge: '100% Raw & Cold-Filtered',
    rating: 4.9,
    reviewsCount: 342,
    image: './images/raw_wildflower_honey.jpg',
    basePrice: 18.00,
    grammageOptions: [
      { weight: '250g', price: 18.00 },
      { weight: '500g', price: 32.00, popular: true },
      { weight: '1kg', price: 58.00, discount: 'Save 20%' }
    ],
    summary: 'Raw, unheated, and unfiltered wild forest honey rich in active bio-enzymes, natural bee propolis, and wild pollen.',
    healthGoals: ['immunity', 'gut', 'energy'],
    labBatch: 'AG-2026-9912',
    labMetrics: {
      purityScore: '100% Pure Organic',
      heavyMetals: '< 0.001 ppm (Undetected)',
      moistureContent: '16.8% (Gold Standard)',
      sucroseSyrupRatio: '0.00% (Zero C4/C3 Sugar)',
      pollenCount: '34,000 grains / 10g'
    },
    ingredients: [
      { name: 'Raw Forest Honey', origin: 'Western Ghats Bio-Reserve', note: 'Cold-harvested from wild forest hives' },
      { name: 'Wildflower Pollen', origin: 'Native Flora Meadows', note: 'Naturally preserved bioactive particles' },
      { name: 'Bee Propolis', origin: 'Natural Hive Resin', note: 'Antioxidant & antimicrobial shield' }
    ],
    nutrition: [
      { metric: 'Energy (Calories)', perServing: '64 kcal', per100g: '320 kcal' },
      { metric: 'Natural Carbs / Sugars', perServing: '16g', per100g: '80g' },
      { metric: 'Bio-Active Enzymes', perServing: 'Diastase > 15 DN', per100g: 'High Potency' },
      { metric: 'Potassium & Minerals', perServing: '42 mg', per100g: '210 mg' },
      { metric: 'Vitamin C & Folate', perServing: '4.2 mg', per100g: '21 mg' },
      { metric: 'Added Synthetic Sugar', perServing: '0.00g', per100g: '0.00g' }
    ],
    healthBenefits: [
      { title: 'Gut Microbiome Support', desc: 'Prebiotic oligosaccharides feed beneficial digestive flora.', icon: '🌿' },
      { title: 'Cellular Immunity Boost', desc: 'Active propolis protects against seasonal oxidative stress.', icon: '🛡️' },
      { title: 'Sustained Glycemic Release', desc: 'Natural fructose-glucose balance provides steady energy.', icon: '⚡' }
    ],
    processingSteps: [
      { step: 1, title: 'Ethical Forest Harvest', desc: 'Harvested without harming bee colonies during peak wildflower bloom.' },
      { step: 2, title: 'Cold-Gravity Settling', desc: 'Settled naturally without heat processing (>38°C) to preserve enzymes.' },
      { step: 3, title: 'Coarse Silk Filtered', desc: 'Filtered only through coarse silk to retain natural pollen grains.' }
    ],
    recipe: {
      dosage: 'Take 1 to 2 tablespoons daily with lukewarm water or herbal tea.',
      quickIdea: 'Morning Vitality Tonic: 1 tbsp Raw Honey + 1/2 squeezed lemon in warm water at sunrise.'
    }
  },
  {
    id: 'abc-malt-drink',
    title: 'ABC Vitality Malt (Apple, Beetroot, Carrot)',
    category: 'malts',
    categoryLabel: 'Nutritional Malts',
    purityBadge: 'Bio-Available Iron & Vit C',
    rating: 5.0,
    reviewsCount: 512,
    image: './images/abc_malt_jar.jpg',
    basePrice: 24.00,
    grammageOptions: [
      { weight: '250g', price: 24.00 },
      { weight: '500g', price: 42.00, popular: true },
      { weight: '1kg', price: 76.00 }
    ],
    summary: 'The ultimate hemoglobin and radiant skin elixir made from low-temp dehydrated Kashmiri Apples, Organic Beetroot, and Nilgiri Carrots, sweetened with unrefined palm jaggery.',
    healthGoals: ['anemia', 'energy', 'growth'],
    labBatch: 'AG-2026-8812',
    labMetrics: {
      purityScore: '100% Plant-Based Vitality',
      heavyMetals: '< 0.001 ppm (Passed)',
      naturalIronContent: '14.2 mg / 100g (High Bioavailability)',
      vitaminC: '48 mg / 100g',
      preservatives: '0 Synthetic Additives'
    },
    ingredients: [
      { name: 'Kashmiri Apples', origin: 'Sopore Orchards', note: 'Dehydrated at <40°C to preserve enzymes' },
      { name: 'Organic Red Beetroot', origin: 'Ooty Organic Farms', note: 'Nitrate-rich for vascular health & iron' },
      { name: 'Nilgiri Sweet Carrots', origin: 'Nilgiri High Country', note: 'Beta-carotene antioxidant core' },
      { name: 'Unrefined Palm Jaggery', origin: 'Traditional Rural Farms', note: 'Mineral-rich natural sweetener' },
      { name: 'Green Cardamom', origin: 'Idukki Hills', note: 'Aromatic digestive catalyst' }
    ],
    nutrition: [
      { metric: 'Energy', perServing: '72 kcal', per100g: '360 kcal' },
      { metric: 'Bio-Available Iron', perServing: '3.5 mg (25% RDA)', per100g: '14.2 mg' },
      { metric: 'Natural Vitamin C', perServing: '12 mg', per100g: '48 mg' },
      { metric: 'Dietary Fiber', perServing: '2.8g', per100g: '14g' },
      { metric: 'Potassium', perServing: '180 mg', per100g: '900 mg' }
    ],
    healthBenefits: [
      { title: 'Boosts Hemoglobin & RBCs', desc: 'Synergistic combination of natural iron + Vit C maxes iron absorption.', icon: '🩸' },
      { title: 'Vascular & Stamina Booster', desc: 'Natural dietary nitrates improve nitric oxide levels and oxygen flow.', icon: '⚡' },
      { title: 'Radiant Cellular Skin Glow', desc: 'Rich in antioxidants and beta-carotene for clear skin health.', icon: '✨' }
    ],
    processingSteps: [
      { step: 1, title: 'Triple-Wash & Puree', desc: 'Fresh farm produce is washed in purified ozone water.' },
      { step: 2, title: 'Low-Temp Air Dehydration', desc: 'Dehydrated at controlled 38°C to lock in heat-sensitive vitamins.' },
      { step: 3, title: 'Stone-Ground & Blended', desc: 'Ground using traditional granite mills and blended with palm jaggery.' }
    ],
    recipe: {
      dosage: 'Mix 2 tablespoons (20g) in 200ml warm milk or water twice daily.',
      quickIdea: 'ABC Golden Smoothie: Blend 2 tbsp ABC Malt + chilled almond milk + 1/2 banana.'
    }
  },
  {
    id: 'sprouted-health-mix',
    title: 'Sprouted Multi-Grain Health Mix',
    category: 'mixes',
    categoryLabel: 'Traditional Health Mixes',
    purityBadge: '14 Sprouted Millets & Pulses',
    rating: 4.8,
    reviewsCount: 289,
    image: './images/sprouted_health_mix.jpg',
    basePrice: 22.00,
    grammageOptions: [
      { weight: '500g', price: 22.00, popular: true },
      { weight: '1kg', price: 39.00 }
    ],
    summary: 'A time-tested nourishing blend of 14 sprouted millets, pulses, nuts, and dry fruits. Sprouting unlocks maximum nutrients and eliminates anti-nutrients.',
    healthGoals: ['energy', 'growth', 'gut'],
    labBatch: 'AG-2026-7734',
    labMetrics: {
      purityScore: '100% Sprouted Superfood',
      digestibilityIndex: '94% Protein Bioavailability',
      glutenStatus: 'Naturally Gluten-Friendly',
      aflatoxinScreen: 'Negative (Passed)'
    },
    ingredients: [
      { name: 'Sprouted Finger Millet (Ragi)', origin: 'Karnataka Organic Belt', note: 'Sprouted for 48 hours for 3x Calcium' },
      { name: 'Sprouted Pearl Millet & Sorghum', origin: 'Rajasthan Drylands', note: 'Rich in fiber and minerals' },
      { name: 'Sprouted Green Gram & Bengal Gram', origin: 'Madhya Pradesh', note: 'Plant protein bio-fortified' },
      { name: 'California Almonds & Cashews', origin: 'Premium Dry Fruits', note: 'Healthy fats & brain nourishment' },
      { name: 'Dry Ginger & Cardamom', origin: 'Kerala Spices', note: 'Digestive soothing agents' }
    ],
    nutrition: [
      { metric: 'Protein', perServing: '6.5g', per100g: '18.5g' },
      { metric: 'Calcium', perServing: '120 mg', per100g: '340 mg' },
      { metric: 'Dietary Fiber', perServing: '4.2g', per100g: '12g' },
      { metric: 'Complex Carbohydrates', perServing: '22g', per100g: '62g' }
    ],
    healthBenefits: [
      { title: 'Sustained Whole-Day Energy', desc: 'Low-GI complex carbs prevent energy spikes and crashes.', icon: '🌾' },
      { title: 'Child Growth & Bone Density', desc: 'Sprouted calcium and natural protein support healthy development.', icon: '💪' },
      { title: 'Easy Digestive Assimilation', desc: 'Sprouting breaks down complex starches for effortless digestion.', icon: '🌱' }
    ],
    processingSteps: [
      { step: 1, title: 'Pure Water Soaking', desc: 'Soaked in spring water for 12 hours.' },
      { step: 2, title: '48-Hour Cotton Sprouting', desc: 'Sprouted in organic cotton cloths to activate live enzymes.' },
      { step: 3, title: 'Clay Pot Roasting & Milling', desc: 'Slow roasted in clay pots and stone-milled into fine powder.' }
    ],
    recipe: {
      dosage: 'Mix 2 tbsp with 250ml milk/water, simmer for 3-5 mins until smooth porridge forms.',
      quickIdea: 'Power Porridge: Top cooked mix with sliced bananas and a drizzle of Raw Honey.'
    }
  },
  {
    id: 'cold-pressed-seed-mix',
    title: 'Cold-Pressed Seeds & Conscious Snack Mix',
    category: 'snacks',
    categoryLabel: 'Low-GI & Conscious Snacks',
    purityBadge: 'Low-GI & Omega-3 Rich',
    rating: 4.9,
    reviewsCount: 198,
    image: './images/cold-pressed_seeds.jpg',
    basePrice: 19.50,
    grammageOptions: [
      { weight: '250g', price: 19.50 },
      { weight: '500g', price: 34.00, popular: true }
    ],
    summary: 'Sun-dried, unrefined functional food blend of activated chia, flax, pumpkin, and watermelon seeds drizzled with cold-pressed virgin coconut oil.',
    healthGoals: ['diabetes', 'gut', 'energy'],
    labBatch: 'AG-2026-6120',
    labMetrics: {
      purityScore: '100% Raw Functional Mix',
      glycemicIndex: 'GI < 25 (Low Glycemic)',
      omega3Content: '2,400 mg / 100g',
      transFat: '0.00g (Pure Unsaturated Fats)'
    },
    ingredients: [
      { name: 'Activated Chia & Flaxseeds', origin: 'Sustainably Farmed', note: 'Cold-soaked to unlock bio-available Omega-3' },
      { name: 'Pumpkin & Sunflower Seeds', origin: 'Non-GMO Fields', note: 'High Zinc and Magnesium' },
      { name: 'Sun-Dried Watermelon Seeds', origin: 'Heritage Crops', note: 'Arginine and healthy amino acids' },
      { name: 'Cold-Pressed Virgin Coconut Oil', origin: 'Kerala Coconut Groves', note: 'Medium-chain triglycerides (MCTs)' }
    ],
    nutrition: [
      { metric: 'Healthy Fats (Omega-3/6)', perServing: '9.5g', per100g: '38g' },
      { metric: 'Dietary Fiber', perServing: '5.0g', per100g: '20g' },
      { metric: 'Protein', perServing: '5.8g', per100g: '23g' },
      { metric: 'Net Carbs', perServing: '1.2g', per100g: '4.8g' }
    ],
    healthBenefits: [
      { title: 'Diabetes & Sugar Balance', desc: 'Ultra-low GI rating buffers glucose spikes after meals.', icon: '⚖️' },
      { title: 'Heart & Cholesterol Care', desc: 'Plant sterols and ALA Omega-3 support arterial elasticity.', icon: '❤️' },
      { title: 'Keto & Satiety Champion', desc: 'Keeps you full for 4+ hours without metabolic heaviness.', icon: '🧘' }
    ],
    processingSteps: [
      { step: 1, title: 'Triple Seed Sorting', desc: 'Optically sorted for maximum purity and zero grit.' },
      { step: 2, title: 'Low-Temp Solar Drying', desc: 'Sun-dried at natural ambient temperatures below 35°C.' },
      { step: 3, title: 'Cold Oil Infusion', desc: 'Tossed with cold-pressed virgin coconut oil and pink salt.' }
    ],
    recipe: {
      dosage: 'Eat 2 tablespoons straight as a mid-day snack or sprinkle over salads/yogurt.',
      quickIdea: 'Crunchy Parfait: Layer Greek yogurt, seed mix, and fresh berries.'
    }
  }
];

// App State
let cartState = JSON.parse(localStorage.getItem('aura_cart')) || [];
let activeCategory = 'all';
let currentSearchQuery = '';
let activePdpProduct = null;
let selectedGrammage = null;
let pdpQuantity = 1;

// DOM Content Loaded Handler
document.addEventListener('DOMContentLoaded', () => {
  initLucideIcons();
  renderProducts();
  updateCartBadge();
  setupEventListeners();
});

function initLucideIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

// Render Product Catalog
function renderProducts() {
  const grid = document.getElementById('productsGrid');
  if (!grid) return;

  const filtered = PRODUCTS.filter(p => {
    const matchCat = activeCategory === 'all' || p.category === activeCategory;
    const matchQuery = p.title.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                       p.summary.toLowerCase().includes(currentSearchQuery.toLowerCase()) ||
                       p.categoryLabel.toLowerCase().includes(currentSearchQuery.toLowerCase());
    return matchCat && matchQuery;
  });

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
        <p style="font-size: 1.2rem; color: var(--text-muted); margin-bottom: 12px;">No natural products matched your search.</p>
        <button class="btn-secondary" onclick="resetFilters()">Reset Search & Filters</button>
      </div>
    `;
    return;
  }

  grid.innerHTML = filtered.map(product => {
    const selectedGram = product.grammageOptions[0];
    return `
      <div class="product-card">
        <div class="card-image-wrap" onclick="openPdpModal('${product.id}')">
          <img src="${product.image}" alt="${product.title}" loading="lazy" />
          <span class="purity-tag">${product.purityBadge}</span>
          <button class="quick-view-btn" title="Quick View PDP" onclick="event.stopPropagation(); openPdpModal('${product.id}')">
            <i data-lucide="eye"></i>
          </button>
        </div>
        <div class="product-category-name">${product.categoryLabel}</div>
        <h3 class="product-title" onclick="openPdpModal('${product.id}')">${product.title}</h3>
        
        <div class="rating-row">
          <span class="rating-stars">★★★★★</span>
          <span><strong>${product.rating}</strong> (${product.reviewsCount})</span>
        </div>

        <div class="grammage-selector">
          ${product.grammageOptions.map((g, idx) => `
            <button class="gram-pill ${idx === 0 ? 'selected' : ''}" 
                    onclick="selectCardGram(this, '${product.id}', ${g.price})">
              ${g.weight}
            </button>
          `).join('')}
        </div>

        <div class="card-footer">
          <div class="card-price" id="price-${product.id}">$${selectedGram.price.toFixed(2)}</div>
          <button class="add-cart-btn" onclick="addToCart('${product.id}', 1, null)">
            <i data-lucide="shopping-bag"></i> Add
          </button>
        </div>
      </div>
    `;
  }).join('');

  initLucideIcons();
}

function selectCardGram(btn, productId, price) {
  const parent = btn.closest('.grammage-selector');
  parent.querySelectorAll('.gram-pill').forEach(b => b.classList.remove('selected'));
  btn.classList.add('selected');

  const priceEl = document.getElementById(`price-${productId}`);
  if (priceEl) {
    priceEl.innerText = `$${price.toFixed(2)}`;
  }
}

function filterCategory(cat, btn) {
  activeCategory = cat;
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  renderProducts();
}

function resetFilters() {
  activeCategory = 'all';
  currentSearchQuery = '';
  document.getElementById('searchInput').value = '';
  document.querySelectorAll('.cat-tab').forEach(b => b.classList.remove('active'));
  document.querySelector('.cat-tab').classList.add('active');
  renderProducts();
}

// Health Quiz Logic
function selectGoalCard(card, goalId) {
  document.querySelectorAll('.goal-card').forEach(c => c.classList.remove('selected'));
  card.classList.add('selected');

  // Find match
  const matched = PRODUCTS.find(p => p.healthGoals.includes(goalId)) || PRODUCTS[0];
  const container = document.getElementById('quizResultContainer');
  
  container.innerHTML = `
    <div class="quiz-result-info">
      <img src="${matched.image}" class="quiz-result-thumb" alt="${matched.title}" />
      <div>
        <span class="match-badge">⚡ 98% Match for your Goal</span>
        <h4 style="font-size: 1.2rem; font-weight: 800; margin-bottom: 4px;">${matched.title}</h4>
        <p style="font-size: 0.88rem; color: var(--text-muted);">${matched.summary}</p>
      </div>
    </div>
    <div style="display: flex; gap: 12px; align-items: center;">
      <button class="btn-primary" onclick="addToCart('${matched.id}', 1); openCartDrawer();">
        Add Matched Item - $${matched.basePrice.toFixed(2)}
      </button>
      <button class="btn-secondary" onclick="openPdpModal('${matched.id}')">
        View Transparency Breakdown
      </button>
    </div>
  `;
  container.classList.add('active');
  initLucideIcons();
}

// Product Detail Page (PDP) Modal Blueprint
function openPdpModal(productId) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  activePdpProduct = product;
  selectedGrammage = product.grammageOptions[0];
  pdpQuantity = 1;

  const modal = document.getElementById('pdpModalOverlay');
  const content = document.getElementById('pdpModalContent');

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closePdpModal()">
      <i data-lucide="x"></i>
    </button>
    
    <div class="pdp-hero-grid">
      <div class="pdp-gallery">
        <div class="pdp-main-image-wrap">
          <img id="pdpMainImg" src="${product.image}" alt="${product.title}" />
        </div>
        <div class="pdp-trust-pills">
          <span class="trust-badge-pill">🌿 100% Raw</span>
          <span class="trust-badge-pill">🍯 Zero Added Sugar</span>
          <span class="trust-badge-pill">🔬 Lab Certified</span>
          <span class="trust-badge-pill">🌱 Non-GMO</span>
        </div>
      </div>

      <div class="pdp-details">
        <span class="product-category-name">${product.categoryLabel}</span>
        <h2 class="pdp-title">${product.title}</h2>
        
        <div class="pdp-price-row">
          <div class="pdp-price" id="pdpDisplayPrice">$${selectedGrammage.price.toFixed(2)}</div>
          <div class="rating-stars">★★★★★ <span style="color: var(--text-muted); font-size: 0.9rem;">(${product.rating} rating)</span></div>
        </div>

        <p class="pdp-summary">${product.summary}</p>

        <div class="pdp-grammage-box">
          <div class="pdp-label">Select Package Size (Grammage):</div>
          <div class="pdp-gram-options">
            ${product.grammageOptions.map((g, i) => `
              <button class="pdp-gram-btn ${i === 0 ? 'active' : ''}" 
                      onclick="changePdpGram(this, ${g.price}, '${g.weight}')">
                ${g.weight} - $${g.price.toFixed(2)}
              </button>
            `).join('')}
          </div>
        </div>

        <div class="pdp-actions">
          <div class="quantity-control">
            <button class="qty-btn" onclick="adjustPdpQty(-1)">-</button>
            <input type="text" class="qty-input" id="pdpQtyInput" value="1" readonly />
            <button class="qty-btn" onclick="adjustPdpQty(1)">+</button>
          </div>
          <button class="btn-primary" style="flex: 1;" onclick="addActivePdpToCart()">
            <i data-lucide="shopping-bag"></i> Add to Cart
          </button>
        </div>
      </div>
    </div>

    <!-- Granular Transparency Breakdown Tabs -->
    <div class="pdp-transparency-tabs">
      <h3 style="font-size: 1.4rem; margin-bottom: 16px; color: var(--primary-sage);">Product Transparency Passport</h3>
      <div class="pdp-tabs-header">
        <button class="pdp-tab-btn active" onclick="switchPdpTab(this, 'tab-ingredients')">100% Ingredients Disclosure</button>
        <button class="pdp-tab-btn" onclick="switchPdpTab(this, 'tab-nutrition')">Nutritional Matrix & Facts</button>
        <button class="pdp-tab-btn" onclick="switchPdpTab(this, 'tab-benefits')">Health Benefits</button>
        <button class="pdp-tab-btn" onclick="switchPdpTab(this, 'tab-process')">Processing & Sourcing</button>
        <button class="pdp-tab-btn" onclick="switchPdpTab(this, 'tab-recipe')">Recipes & Dosage</button>
        <button class="pdp-tab-btn" onclick="switchPdpTab(this, 'tab-lab')">NABL Lab Clearance Report</button>
      </div>

      <!-- Tab 1: Ingredients -->
      <div id="tab-ingredients" class="pdp-tab-content active">
        <p style="margin-bottom: 16px; color: var(--text-muted);">Zero synthetic preservatives, zero added cane sugar, zero chemical fillers. 100% pure natural ingredients.</p>
        <div class="ingredients-grid">
          ${product.ingredients.map(ing => `
            <div class="ingredient-chip">
              <div class="chip-icon">🌿</div>
              <div>
                <div class="chip-name">${ing.name}</div>
                <div class="chip-origin">Source: ${ing.origin}</div>
                <div style="font-size: 0.78rem; color: var(--primary-sage); margin-top: 2px;">${ing.note}</div>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 2: Nutrition Matrix -->
      <div id="tab-nutrition" class="pdp-tab-content">
        <table class="nutrition-table">
          <thead>
            <tr>
              <th>Nutrient / Micronutrient</th>
              <th>Per Serving</th>
              <th>Per 100g Standard</th>
            </tr>
          </thead>
          <tbody>
            ${product.nutrition.map(n => `
              <tr>
                <td><strong>${n.metric}</strong></td>
                <td>${n.perServing}</td>
                <td>${n.per100g}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <!-- Tab 3: Health Benefits -->
      <div id="tab-benefits" class="pdp-tab-content">
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px;">
          ${product.healthBenefits.map(b => `
            <div style="background: white; padding: 20px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
              <div style="font-size: 2rem; margin-bottom: 8px;">${b.icon}</div>
              <h4 style="font-size: 1.1rem; margin-bottom: 6px;">${b.title}</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted);">${b.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 4: Processing Timeline -->
      <div id="tab-process" class="pdp-tab-content">
        <div class="process-timeline">
          ${product.processingSteps.map(s => `
            <div class="timeline-step">
              <h4 style="font-size: 1rem; color: var(--primary-sage);">Step ${s.step}: ${s.title}</h4>
              <p style="font-size: 0.88rem; color: var(--text-muted); margin-top: 4px;">${s.desc}</p>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Tab 5: Recipe & Dosage -->
      <div id="tab-recipe" class="pdp-tab-content">
        <div style="background: white; padding: 24px; border-radius: var(--radius-md); border: 1px solid var(--border-light);">
          <h4 style="font-size: 1.1rem; color: var(--primary-sage); margin-bottom: 8px;">📋 Daily Dosage Recommendation</h4>
          <p style="margin-bottom: 16px;">${product.recipe.dosage}</p>
          <h4 style="font-size: 1.1rem; color: var(--honey-gold-dark); margin-bottom: 8px;">💡 Chef & Clinical Recipe Suggestion</h4>
          <p>${product.recipe.quickIdea}</p>
        </div>
      </div>

      <!-- Tab 6: Lab Clearance -->
      <div id="tab-lab" class="pdp-tab-content">
        <div class="lab-cert-box">
          <div>
            <span class="match-badge">Verified NABL Batch #${product.labBatch}</span>
            <h4 style="font-size: 1.2rem; margin: 8px 0 4px 0;">Heavy Metal & Chemical Purity Pass</h4>
            <p style="font-size: 0.88rem; color: var(--text-muted);">Passed 48-point test for Lead, Mercury, Arsenic, Pesticides, and Synthetic Sugars.</p>
          </div>
          <button class="btn-primary" onclick="openLabPassportModal('${product.labBatch}')">
            View Official Certificate
          </button>
        </div>
      </div>
    </div>
  `;

  modal.classList.add('active');
  initLucideIcons();
}

function closePdpModal() {
  document.getElementById('pdpModalOverlay').classList.remove('active');
}

function changePdpGram(btn, price, weight) {
  document.querySelectorAll('.pdp-gram-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  selectedGrammage = { price, weight };
  document.getElementById('pdpDisplayPrice').innerText = `$${(price * pdpQuantity).toFixed(2)}`;
}

function adjustPdpQty(delta) {
  pdpQuantity = Math.max(1, pdpQuantity + delta);
  document.getElementById('pdpQtyInput').value = pdpQuantity;
  if (selectedGrammage) {
    document.getElementById('pdpDisplayPrice').innerText = `$${(selectedGrammage.price * pdpQuantity).toFixed(2)}`;
  }
}

function switchPdpTab(btn, tabId) {
  document.querySelectorAll('.pdp-tab-btn').forEach(b => b.classList.remove('active'));
  document.querySelectorAll('.pdp-tab-content').forEach(c => c.classList.remove('active'));
  
  btn.classList.add('active');
  document.getElementById(tabId).classList.add('active');
}

function addActivePdpToCart() {
  if (!activePdpProduct) return;
  addToCart(activePdpProduct.id, pdpQuantity, selectedGrammage);
  closePdpModal();
  openCartDrawer();
}

// Shopping Cart Engine
function addToCart(productId, qty = 1, grammageObj = null) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const gram = grammageObj || product.grammageOptions[0];
  const cartKey = `${product.id}-${gram.weight}`;

  const existing = cartState.find(item => item.key === cartKey);
  if (existing) {
    existing.qty += qty;
  } else {
    cartState.push({
      key: cartKey,
      id: product.id,
      title: product.title,
      image: product.image,
      weight: gram.weight,
      unitPrice: gram.price,
      qty: qty
    });
  }

  saveCart();
  updateCartBadge();
  animateCartButton();
}

function saveCart() {
  localStorage.setItem('aura_cart', JSON.stringify(cartState));
}

function updateCartBadge() {
  const badge = document.getElementById('cartBadge');
  const count = cartState.reduce((acc, item) => acc + item.qty, 0);
  if (badge) {
    badge.innerText = count;
    badge.classList.add('bump');
    setTimeout(() => badge.classList.remove('bump'), 400);
  }
}

function animateCartButton() {
  const btn = document.getElementById('cartBtn');
  if (btn) {
    btn.style.transform = 'scale(1.2)';
    setTimeout(() => btn.style.transform = 'scale(1)', 300);
  }
}

function openCartDrawer() {
  renderCartItems();
  document.getElementById('cartDrawerOverlay').classList.add('active');
  document.getElementById('cartDrawer').classList.add('open');
}

function closeCartDrawer() {
  document.getElementById('cartDrawerOverlay').classList.remove('active');
  document.getElementById('cartDrawer').classList.remove('open');
}

function renderCartItems() {
  const container = document.getElementById('cartItemsList');
  const subtotalEl = document.getElementById('cartSubtotal');
  const totalEl = document.getElementById('cartTotal');
  const shippingBar = document.getElementById('shippingBarFill');
  const shippingMsg = document.getElementById('shippingMsg');

  if (cartState.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <i data-lucide="shopping-bag" style="width: 48px; height: 48px; opacity: 0.4; margin-bottom: 12px;"></i>
        <p>Your Anti-Gravity cart is empty.</p>
      </div>
    `;
    subtotalEl.innerText = '$0.00';
    totalEl.innerText = '$0.00';
    if (shippingBar) shippingBar.style.width = '0%';
    if (shippingMsg) shippingMsg.innerText = 'Add items for Free Express Shipping!';
    initLucideIcons();
    return;
  }

  const subtotal = cartState.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);
  const freeShippingThreshold = 50.00;
  const progressPct = Math.min(100, (subtotal / freeShippingThreshold) * 100);

  if (shippingBar) shippingBar.style.width = `${progressPct}%`;
  if (shippingMsg) {
    if (subtotal >= freeShippingThreshold) {
      shippingMsg.innerHTML = '🎉 You unlocked <strong>FREE Express Anti-Gravity Delivery!</strong>';
    } else {
      const diff = (freeShippingThreshold - subtotal).toFixed(2);
      shippingMsg.innerHTML = `Add <strong>$${diff}</strong> more to unlock FREE Express Delivery!`;
    }
  }

  container.innerHTML = cartState.map(item => `
    <div class="cart-item">
      <img src="${item.image}" class="cart-item-img" alt="${item.title}" />
      <div class="cart-item-details">
        <div class="cart-item-title">${item.title}</div>
        <div class="cart-item-meta">Size: ${item.weight} | $${item.unitPrice.toFixed(2)}</div>
        <div style="display: flex; align-items: center; justify-content: space-between; margin-top: 8px;">
          <div class="quantity-control" style="padding: 2px;">
            <button class="qty-btn" style="width: 26px; height: 26px; font-size: 0.9rem;" onclick="updateCartQty('${item.key}', -1)">-</button>
            <span style="padding: 0 8px; font-weight: 800; font-size: 0.85rem;">${item.qty}</span>
            <button class="qty-btn" style="width: 26px; height: 26px; font-size: 0.9rem;" onclick="updateCartQty('${item.key}', 1)">+</button>
          </div>
          <button style="color: #EF4444; font-size: 0.8rem; font-weight: 700;" onclick="removeCartItem('${item.key}')">Remove</button>
        </div>
      </div>
    </div>
  `).join('');

  subtotalEl.innerText = `$${subtotal.toFixed(2)}`;
  totalEl.innerText = `$${subtotal.toFixed(2)}`;
  initLucideIcons();
}

function updateCartQty(key, delta) {
  const item = cartState.find(i => i.key === key);
  if (!item) return;
  item.qty += delta;
  if (item.qty <= 0) {
    cartState = cartState.filter(i => i.key !== key);
  }
  saveCart();
  updateCartBadge();
  renderCartItems();
}

function removeCartItem(key) {
  cartState = cartState.filter(i => i.key !== key);
  saveCart();
  updateCartBadge();
  renderCartItems();
}

// Lab Passport Modal
function openLabPassportModal(batchNum) {
  const modal = document.getElementById('labModalOverlay');
  const content = document.getElementById('labModalContent');

  content.innerHTML = `
    <button class="modal-close-btn" onclick="closeLabModal()">
      <i data-lucide="x"></i>
    </button>
    <div style="padding: 32px;">
      <div style="display: flex; align-items: center; justify-content: space-between; border-bottom: 2px solid var(--primary-sage); padding-bottom: 16px; margin-bottom: 24px;">
        <div>
          <h2 style="font-size: 1.6rem; color: var(--primary-sage);">NABL ACCREDITED LAB CERTIFICATE</h2>
          <p style="font-size: 0.85rem; color: var(--text-muted);">Independent Batch Analysis Report • Certificate ID: #${batchNum || 'AG-2026-9912'}</p>
        </div>
        <span class="match-badge" style="font-size: 1rem; padding: 8px 16px;">100% PASSED</span>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 24px;">
        <div style="background: var(--bg-main); padding: 16px; border-radius: 12px;">
          <h4 style="font-size: 0.9rem; color: var(--text-muted);">HEAVY METAL SCREENING</h4>
          <p style="font-size: 1.1rem; font-weight: 800; color: #2E7D32;">Lead & Mercury: UNDETECTED (<0.001 ppm)</p>
        </div>
        <div style="background: var(--bg-main); padding: 16px; border-radius: 12px;">
          <h4 style="font-size: 0.9rem; color: var(--text-muted);">PESTICIDE RESIDUE</h4>
          <p style="font-size: 1.1rem; font-weight: 800; color: #2E7D32;">Organophosphates: 0.00% CLEAN</p>
        </div>
      </div>

      <button class="btn-primary" style="width: 100%;" onclick="alert('Downloading Official NABL Certified PDF Report for Batch ${batchNum}...')">
        <i data-lucide="download"></i> Download Signed Lab Certificate PDF
      </button>
    </div>
  `;

  modal.classList.add('active');
  initLucideIcons();
}

function closeLabModal() {
  document.getElementById('labModalOverlay').classList.remove('active');
}

// Checkout Modal Workflow
function openCheckoutModal() {
  if (cartState.length === 0) {
    alert('Your cart is empty!');
    return;
  }
  closeCartDrawer();
  
  const modal = document.getElementById('checkoutModalOverlay');
  const subtotal = cartState.reduce((acc, item) => acc + (item.unitPrice * item.qty), 0);

  document.getElementById('checkoutModalContent').innerHTML = `
    <button class="modal-close-btn" onclick="closeCheckoutModal()">
      <i data-lucide="x"></i>
    </button>
    <div style="padding: 36px;">
      <h2 style="font-size: 1.8rem; margin-bottom: 8px;">Anti-Gravity Express Checkout</h2>
      <p style="color: var(--text-muted); margin-bottom: 24px;">Complete your order for pure, organic nourishment.</p>

      <form onsubmit="submitOrder(event)">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
          <div>
            <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 6px;">First Name</label>
            <input type="text" required style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--border-light);" placeholder="Jane" />
          </div>
          <div>
            <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 6px;">Last Name</label>
            <input type="text" required style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--border-light);" placeholder="Doe" />
          </div>
        </div>

        <div style="margin-bottom: 16px;">
          <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 6px;">Shipping Address</label>
          <input type="text" required style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--border-light);" placeholder="123 Organic Way, Suite 400" />
        </div>

        <div style="margin-bottom: 24px;">
          <label style="font-size: 0.85rem; font-weight: 700; display: block; margin-bottom: 6px;">Payment Method</label>
          <select style="width: 100%; padding: 12px; border-radius: 10px; border: 1px solid var(--border-light);">
            <option>Apple Pay / Google Pay</option>
            <option>Credit / Debit Card</option>
            <option>UPI / Instant NetBanking</option>
          </select>
        </div>

        <div style="background: var(--primary-sage-light); padding: 16px; border-radius: 12px; margin-bottom: 24px; display: flex; justify-content: space-between; font-weight: 800;">
          <span>Total Payable Amount:</span>
          <span style="color: var(--primary-sage); font-size: 1.2rem;">$${subtotal.toFixed(2)}</span>
        </div>

        <button type="submit" class="btn-primary" style="width: 100%;">
          Place Anti-Gravity Order 🚀
        </button>
      </form>
    </div>
  `;

  modal.classList.add('active');
  initLucideIcons();
}

function closeCheckoutModal() {
  document.getElementById('checkoutModalOverlay').classList.remove('active');
}

function submitOrder(e) {
  e.preventDefault();
  const modalContent = document.getElementById('checkoutModalContent');
  modalContent.innerHTML = `
    <div style="padding: 48px; text-align: center;">
      <div style="width: 80px; height: 80px; background: #E8F5E9; color: #2E7D32; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 2.5rem; margin: 0 auto 20px auto;">✓</div>
      <h2 style="font-size: 2rem; margin-bottom: 12px; color: var(--primary-sage);">Order Placed Successfully!</h2>
      <p style="color: var(--text-muted); margin-bottom: 20px;">Order ID: <strong>#AG-2026-88392</strong> • Estimated Delivery in 48 Hours.</p>
      <p style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 28px;">We have dispatched your batch clearance certificate and tracking details to your email.</p>
      <button class="btn-primary" onclick="cartState = []; saveCart(); updateCartBadge(); closeCheckoutModal();">
        Back to Natural Shop
      </button>
    </div>
  `;
}

// Event Listeners setup
function setupEventListeners() {
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      currentSearchQuery = e.target.value;
      renderProducts();
    });
  }
}
