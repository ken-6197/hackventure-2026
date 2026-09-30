/**
 * HACKVENTURE 2026 - Interactive Application Logic
 * Pure ES6+, Zero external runtime dependencies, Zero emojis.
 */

// ============================================================================
// 1. DATA REPOSITORIES & CONSTANTS
// ============================================================================

// Replace this with your exact Google Form link:
const GOOGLE_REGISTRATION_FORM_URL = 'https://forms.google.com';

const INITIAL_HACKERS = [
  {
    id: 'h-1',
    name: 'Sofia Rodriguez',
    role: 'AI/ML',
    roleFull: 'AI / ML Engineer',
    tz: 'UTC-5 (EST)',
    skills: ['PyTorch', 'Transformers', 'FastAPI', 'LangChain'],
    bio: 'Looking for a frontend specialist to build an agentic research copilot for climate datasets.',
    contact: 'discord: sofia_ai#4281'
  },
  {
    id: 'h-2',
    name: 'David Kim',
    role: 'Frontend',
    roleFull: 'Frontend Developer',
    tz: 'UTC-8 (PST)',
    skills: ['Next.js', 'TypeScript', 'Tailwind', 'Three.js'],
    bio: 'Passionate about 3D data visualizations and interactive WebGL canvas experiences.',
    contact: 'github: @davidkim_dev'
  },
  {
    id: 'h-3',
    name: 'Elena Rostova',
    role: 'Backend',
    roleFull: 'Backend Systems Eng',
    tz: 'UTC+1 (CET)',
    skills: ['Go', 'Rust', 'PostgreSQL', 'WebSockets', 'Docker'],
    bio: 'Building low-latency streaming infrastructure. Ready to pair with AI or Web3 teams.',
    contact: 'telegram: @elena_rust'
  },
  {
    id: 'h-4',
    name: 'Marcus Vance',
    role: 'UI/UX',
    roleFull: 'Product & UI/UX Designer',
    tz: 'UTC+0 (GMT)',
    skills: ['Figma', 'Design Systems', 'Micro-interactions', 'Prototyping'],
    bio: 'Can turn rough technical wireframes into clean, award-winning user interfaces in 12 hours.',
    contact: 'twitter: @marcus_pixels'
  },
  {
    id: 'h-5',
    name: 'Aarav Patel',
    role: 'Product',
    roleFull: 'Pitch & Product Lead',
    tz: 'UTC+5:30 (IST)',
    skills: ['Pitching', 'Business Modeling', 'User Testing', 'API Integrations'],
    bio: 'Former hackathon winner. I craft 3-minute winning demo decks and crisp value propositions.',
    contact: 'email: aarav.ventures@gmail.com'
  },
  {
    id: 'h-6',
    name: 'Chloe Dubois',
    role: 'AI/ML',
    roleFull: 'Computer Vision Dev',
    tz: 'UTC+2 (CEST)',
    skills: ['YOLOv8', 'OpenCV', 'TensorFlow.js', 'Python'],
    bio: 'Want to build an edge camera app that tracks biodiversity and environmental signals.',
    contact: 'discord: chloe_vision#9090'
  }
];

const CURATED_RESOURCES = [
  {
    name: 'Google Gemini API',
    category: 'AI / LLM',
    desc: 'Multimodal generative reasoning with high-rate free tier for text, vision, audio & code.',
    url: 'https://ai.google.dev',
    freeTier: '60 RPM Free Tier',
    tag: 'Recommended'
  },
  {
    name: 'Supabase',
    category: 'Backend / DB',
    desc: 'Instant open-source Postgres database, authentication, realtime subscriptions, and vector storage.',
    url: 'https://supabase.com',
    freeTier: 'Free 500MB DB & Auth',
    tag: 'Database'
  },
  {
    name: 'Vercel / Cloudflare Pages',
    category: 'Hosting',
    desc: 'Deploy full-stack web applications or static frontend repos in under 60 seconds with SSL & CDN.',
    url: 'https://vercel.com',
    freeTier: 'Generous Free Tier',
    tag: 'Deployment'
  },
  {
    name: 'Hugging Face Inference API',
    category: 'AI / Models',
    desc: 'Access thousands of open-source vision, text, speech, and diffusion models via simple REST endpoints.',
    url: 'https://huggingface.co',
    freeTier: 'Free Community Tier',
    tag: 'Open Weights'
  },
  {
    name: 'Lucide Icons & Tailwind CSS',
    category: 'UI / Design',
    desc: 'Clean, consistent SVG icon set and utility CSS framework for lightning-fast frontend styling.',
    url: 'https://lucide.dev',
    freeTier: '100% Free Open Source',
    tag: 'Frontend'
  },
  {
    name: 'OpenWeatherMap & NASA Open APIs',
    category: 'Datasets',
    desc: 'Global real-time satellite imagery, atmospheric data, weather predictions, and telemetry.',
    url: 'https://api.nasa.gov',
    freeTier: 'Unlimited Free Non-commercial',
    tag: 'Sensors / Science'
  }
];

const IDEA_DATABASE = [
  {
    domain: 'ai',
    tech: 'agents',
    audience: 'devs',
    track: 'AI & Agents',
    difficulty: 'Moderate (High Prize Potential)',
    name: 'PatchPilot: Self-Healing Open Source Agent',
    tagline: 'Autonomous bug triage agent that forks failing test suites and submits verified fix PRs.',
    problem: 'Open source maintainers spend 70% of their time reproducing stale issue reports and writing regression tests.',
    features: [
      'Listens to GitHub webhook failure events and sandboxes reproduction in WebAssembly.',
      'Generates contextual minimal reproducible examples using LLM AST reasoning.',
      'Drafts automated pull request with verified passing unit test diffs.'
    ],
    techStack: ['Gemini API', 'Docker / WASM', 'GitHub Octokit API', 'FastAPI'],
    pitch: 'Maintainers are drowning in issues. PatchPilot acts as a tireless 24/7 triager that reproduces bugs in an isolated sandbox, generates verified fix PRs, and cuts issue backlog by 60%.'
  },
  {
    domain: 'climate',
    tech: 'vision',
    audience: 'smb',
    track: 'ClimateTech & Sustainability',
    difficulty: 'Intermediate',
    name: 'CircularScan: Smart Inventory Waste Auditing',
    tagline: 'Computer vision camera app that identifies perishable excess and connects to local food redistribution.',
    problem: 'Independent grocers and restaurants discard 35% of edible inventory due to manual inventory expiration tracking.',
    features: [
      'Phone camera scans produce crates and automatically grades freshness and shelf-life remaining.',
      'Automated discount pricing tags pushed directly to square / stripe registers.',
      'One-tap donation broadcast to local food banks via real-time geo-routing.'
    ],
    techStack: ['TensorFlow.js', 'React Native / PWA', 'Mapbox API', 'Supabase'],
    pitch: 'CircularScan turns food waste into community nutrition and tax credits. Using on-device computer vision, businesses audit perishable goods in seconds and route excess before it hits landfills.'
  },
  {
    domain: 'health',
    tech: 'webrtc',
    audience: 'doctors',
    track: 'Digital Health & BioData',
    difficulty: 'Moderate',
    name: 'AuraScribe: Zero-Latency Bedside Voice Assistant',
    tagline: 'Ambient medical audio dictation that extracts structured EHR FHIR records in real time.',
    problem: 'Clinicians spend two hours entering EHR documentation for every one hour spent with patients.',
    features: [
      'Low-latency WebRTC bidirectional streaming audio with noise reduction.',
      'Medical entity extraction: automatically maps medications, symptoms, and dosages.',
      'FHIR JSON format exporter compatible with major hospital health records.'
    ],
    techStack: ['WebRTC', 'Gemini Flash Audio', 'FHIR API', 'Tailwind'],
    pitch: 'AuraScribe eliminates doctor burnout. By ambiently listening during patient consultations, it extracts clinical terminology into structured medical notes in real time, saving 2 hours per shift.'
  },
  {
    domain: 'web3',
    tech: 'zk',
    audience: 'students',
    track: 'Web3 & Decentralized',
    difficulty: 'Advanced',
    name: 'ZeroCred: Verifiable Student Credentials without DoXXing',
    tagline: 'Prove enrollment and GPA tiers for student discounts and job boards without sharing PII.',
    problem: 'Students are forced to upload unencrypted scans of passports and transcripts to third-party discount portals.',
    features: [
      'ZK-SNARK proof generator running locally in browser WebAssembly.',
      'Verification portal for employers and software sponsors.',
      'Decentralized identity badge stored in user wallet.'
    ],
    techStack: ['Circom / SnarkJS', 'WASM', 'Ethers.js', 'Next.js'],
    pitch: 'Students should not have to sacrifice their privacy for a student discount. ZeroCred provides cryptographic mathematical proofs of university enrollment without leaking identity or personal transcripts.'
  },
  {
    domain: 'devtools',
    tech: 'wasm',
    audience: 'devs',
    track: 'Wildcard & Developer Tools',
    difficulty: 'Moderate (Hackathon-ready)',
    name: 'SandSnap: Instant Browser Micro-VM Benchmarking',
    tagline: 'Run multi-language code snippets safely inside browser workers with live CPU/RAM instrumentation.',
    problem: 'Developers lack lightweight ways to benchmark algorithms across languages without setting up heavy local runtimes.',
    features: [
      'In-browser WebAssembly runtimes for Python, SQLite, and QuickJS.',
      'Real-time memory and execution millisecond graphs.',
      'One-click shareable URL snapshot with embedded execution sandbox.'
    ],
    techStack: ['Pyodide (WASM)', 'Chart.js', 'Web Workers', 'Vanilla JS'],
    pitch: 'SandSnap brings zero-install, zero-backend code experimentation to the browser. Benchmark and share complex algorithms in Python or SQLite with microsecond profiling right from a link.'
  }
];

// ============================================================================
// 2. WEB AUDIO SYNTHESIZER (PITCH TIMER SOUNDS)
// ============================================================================

class SoundFX {
  constructor() {
    this.ctx = null;
    this.enabled = true;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playTone(freq, type = 'sine', duration = 0.15, gainVal = 0.2) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.0001, this.ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio tone error:', e);
    }
  }

  warning() {
    this.playTone(660, 'sine', 0.18, 0.25);
    setTimeout(() => this.playTone(880, 'sine', 0.25, 0.25), 120);
  }

  doubleAlert() {
    this.playTone(800, 'triangle', 0.1, 0.3);
    setTimeout(() => this.playTone(800, 'triangle', 0.15, 0.3), 150);
  }

  finishFanfare() {
    this.playTone(523.25, 'triangle', 0.2, 0.3); // C5
    setTimeout(() => this.playTone(659.25, 'triangle', 0.2, 0.3), 150); // E5
    setTimeout(() => this.playTone(783.99, 'triangle', 0.2, 0.3), 300); // G5
    setTimeout(() => this.playTone(1046.50, 'triangle', 0.5, 0.4), 450); // C6
  }
}

const sfx = new SoundFX();

// ============================================================================
// 3. TOAST NOTIFICATION UTILITY
// ============================================================================

function showToast(message) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = 'toast';
  toast.innerHTML = `<span>${message}</span>`;
  container.appendChild(toast);

  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateY(10px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 3200);
}

// ============================================================================
// 4. HERO COUNTDOWN TIMER
// ============================================================================

function initHeroCountdown() {
  const now = new Date();
  const targetDate = new Date(now.getTime() + (45 * 24 * 60 * 60 * 1000) + (18 * 60 * 60 * 1000));

  function update() {
    const current = new Date();
    const diff = targetDate - current;

    if (diff <= 0) {
      document.getElementById('countDays').textContent = '00';
      document.getElementById('countHours').textContent = '00';
      document.getElementById('countMinutes').textContent = '00';
      document.getElementById('countSeconds').textContent = '00';
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / 1000 / 60) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    const pad = (n) => String(n).padStart(2, '0');

    const daysEl = document.getElementById('countDays');
    const hoursEl = document.getElementById('countHours');
    const minEl = document.getElementById('countMinutes');
    const secEl = document.getElementById('countSeconds');

    if (daysEl) daysEl.textContent = pad(days);
    if (hoursEl) hoursEl.textContent = pad(hours);
    if (minEl) minEl.textContent = pad(minutes);
    if (secEl) secEl.textContent = pad(seconds);
  }

  update();
  setInterval(update, 1000);
}

// ============================================================================
// 5. SCHEDULE TABS CONTROLLER
// ============================================================================

function initScheduleTabs() {
  const tabs = document.querySelectorAll('.schedule-tab-nav .tab-btn');
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.classList.remove('active');
        t.setAttribute('aria-selected', 'false');
      });
      tab.classList.add('active');
      tab.setAttribute('aria-selected', 'true');

      const targetDay = tab.getAttribute('data-day');
      document.querySelectorAll('.schedule-content .tab-panel').forEach(panel => {
        if (panel.id === `${targetDay}-panel`) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
}

// ============================================================================
// 6. DEVELOPER TOOLBOX TAB SWITCHER
// ============================================================================

function initToolboxTabs() {
  const toolBtns = document.querySelectorAll('.tools-navigation .tool-nav-btn');
  toolBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toolBtns.forEach(b => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const toolName = btn.getAttribute('data-tool');
      document.querySelectorAll('.tool-card-panel').forEach(panel => {
        if (panel.id === `tool-${toolName}-panel`) {
          panel.classList.add('active');
          panel.removeAttribute('hidden');
        } else {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        }
      });
    });
  });
}

// ============================================================================
// 7. TOOL 1: PITCH & DEMO TIMER
// ============================================================================

let timerInterval = null;
let timerTotalSeconds = 180;
let timerRemainingSeconds = 180;
let timerIsRunning = false;
const CIRCUMFERENCE = 2 * Math.PI * 105;

function initPitchTimer() {
  const digitsEl = document.getElementById('timerDigits');
  const phaseEl = document.getElementById('timerPhase');
  const startBtn = document.getElementById('timerStartBtn');
  const startBtnText = document.getElementById('startBtnText');
  const resetBtn = document.getElementById('timerResetBtn');
  const progressRing = document.getElementById('timerProgressRing');
  const soundToggle = document.getElementById('soundToggle');
  const presetChips = document.querySelectorAll('.timer-presets .btn-chip');
  const customInput = document.getElementById('customMinutesInput');
  const applyCustomBtn = document.getElementById('applyCustomTimeBtn');

  if (soundToggle) {
    soundToggle.addEventListener('change', (e) => {
      sfx.enabled = e.target.checked;
    });
  }

  function formatTime(totalSec) {
    const mins = Math.floor(totalSec / 60);
    const secs = totalSec % 60;
    return `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
  }

  function updateDisplay() {
    digitsEl.textContent = formatTime(timerRemainingSeconds);

    const ratio = timerRemainingSeconds / timerTotalSeconds;
    const offset = CIRCUMFERENCE - (ratio * CIRCUMFERENCE);
    progressRing.style.strokeDashoffset = offset;

    if (timerRemainingSeconds === 0) {
      phaseEl.textContent = "Time's Up! Wrap Up!";
      phaseEl.style.color = 'var(--accent-rose)';
      progressRing.style.stroke = 'var(--accent-rose)';
    } else if (ratio <= 0.15) {
      phaseEl.textContent = 'Final 15% - Closing Pitch';
      phaseEl.style.color = 'var(--accent-rose)';
      progressRing.style.stroke = 'var(--accent-rose)';
    } else if (ratio <= 0.35) {
      phaseEl.textContent = 'Q&A & Key Takeaways';
      phaseEl.style.color = 'var(--accent-amber)';
      progressRing.style.stroke = 'var(--accent-amber)';
    } else {
      phaseEl.textContent = timerIsRunning ? 'Pitch in Progress...' : 'Ready to Pitch';
      phaseEl.style.color = 'var(--accent-cyan)';
      progressRing.style.stroke = 'var(--accent-cyan)';
    }
  }

  function startTimer() {
    sfx.init();
    if (timerIsRunning) {
      clearInterval(timerInterval);
      timerIsRunning = false;
      startBtnText.textContent = 'Resume Pitch';
      phaseEl.textContent = 'Paused';
    } else {
      if (timerRemainingSeconds <= 0) {
        timerRemainingSeconds = timerTotalSeconds;
      }
      timerIsRunning = true;
      startBtnText.textContent = 'Pause Pitch';

      timerInterval = setInterval(() => {
        timerRemainingSeconds--;

        if (timerRemainingSeconds === 60) {
          sfx.warning();
          showToast('1 Minute Remaining');
        } else if (timerRemainingSeconds === 30) {
          sfx.doubleAlert();
          showToast('30 Seconds Remaining. Conclude your presentation.');
        } else if (timerRemainingSeconds <= 0) {
          clearInterval(timerInterval);
          timerIsRunning = false;
          startBtnText.textContent = 'Pitch Finished';
          sfx.finishFanfare();
          showToast("Time's Up. Presentation complete.");
        }

        updateDisplay();
      }, 1000);
    }
    updateDisplay();
  }

  function resetTimer() {
    clearInterval(timerInterval);
    timerIsRunning = false;
    timerRemainingSeconds = timerTotalSeconds;
    startBtnText.textContent = 'Start Pitch';
    updateDisplay();
  }

  function setPreset(seconds) {
    timerTotalSeconds = seconds;
    resetTimer();
  }

  startBtn.addEventListener('click', startTimer);
  resetBtn.addEventListener('click', resetTimer);

  presetChips.forEach(chip => {
    chip.addEventListener('click', () => {
      presetChips.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      const secs = parseInt(chip.getAttribute('data-time'), 10);
      setPreset(secs);
    });
  });

  applyCustomBtn.addEventListener('click', () => {
    const mins = parseInt(customInput.value, 10);
    if (mins > 0 && mins <= 60) {
      presetChips.forEach(c => c.classList.remove('active'));
      setPreset(mins * 60);
      showToast(`Timer set to ${mins} minutes`);
    }
  });

  updateDisplay();
}

// ============================================================================
// 8. TOOL 2: IDEA MATRIX GENERATOR
// ============================================================================

function initIdeaMatrix() {
  const domainSelect = document.getElementById('ideaDomainSelect');
  const techSelect = document.getElementById('ideaTechSelect');
  const audienceSelect = document.getElementById('ideaAudienceSelect');
  const generateBtn = document.getElementById('generateIdeaBtn');
  const randomBtn = document.getElementById('randomIdeaBtn');
  const copyPitchBtn = document.getElementById('copyIdeaPitchBtn');
  const sendToReadmeBtn = document.getElementById('sendToReadmeBtn');

  let currentIdea = IDEA_DATABASE[0];

  function renderIdea(idea) {
    currentIdea = idea;
    document.getElementById('ideaTrackTag').textContent = idea.track;
    document.getElementById('ideaDifficulty').textContent = idea.difficulty;
    document.getElementById('ideaProjectName').textContent = idea.name;
    document.getElementById('ideaTagline').textContent = `"${idea.tagline}"`;
    document.getElementById('ideaProblem').textContent = idea.problem;

    const featuresList = document.getElementById('ideaFeaturesList');
    featuresList.innerHTML = '';
    idea.features.forEach(feat => {
      const li = document.createElement('li');
      li.textContent = feat;
      featuresList.appendChild(li);
    });

    const techTags = document.getElementById('ideaTechTags');
    techTags.innerHTML = '';
    idea.techStack.forEach(t => {
      const span = document.createElement('span');
      span.className = 'tag';
      span.textContent = t;
      techTags.appendChild(span);
    });
  }

  function generate() {
    const domVal = domainSelect.value;
    const techVal = techSelect.value;
    const audVal = audienceSelect.value;

    let pool = IDEA_DATABASE.filter(item => {
      const matchDom = (domVal === 'any' || item.domain === domVal);
      const matchTech = (techVal === 'any' || item.tech === techVal);
      const matchAud = (audVal === 'any' || item.audience === audVal);
      return matchDom || matchTech || matchAud;
    });

    if (pool.length === 0) pool = IDEA_DATABASE;
    const selected = pool[Math.floor(Math.random() * pool.length)];
    renderIdea(selected);
    showToast(`Generated: ${selected.name}`);
  }

  function surpriseMe() {
    domainSelect.value = 'any';
    techSelect.value = 'any';
    audienceSelect.value = 'any';
    const rand = IDEA_DATABASE[Math.floor(Math.random() * IDEA_DATABASE.length)];
    renderIdea(rand);
    showToast(`Random Idea: ${rand.name}`);
  }

  generateBtn.addEventListener('click', generate);
  randomBtn.addEventListener('click', surpriseMe);

  copyPitchBtn.addEventListener('click', () => {
    const text = `${currentIdea.name} - ${currentIdea.tagline}\n\nProblem:\n${currentIdea.problem}\n\nPitch:\n${currentIdea.pitch}`;
    navigator.clipboard.writeText(text).then(() => {
      showToast('Pitch copied to clipboard.');
    });
  });

  sendToReadmeBtn.addEventListener('click', () => {
    const readmeTabBtn = document.querySelector('.tool-nav-btn[data-tool="readme"]');
    if (readmeTabBtn) readmeTabBtn.click();

    document.getElementById('readmeProjectName').value = currentIdea.name;
    document.getElementById('readmeTagline').value = currentIdea.tagline;
    document.getElementById('readmeInspiration').value = currentIdea.problem;
    document.getElementById('readmeWhatItDoes').value = currentIdea.features.map(f => `- ${f}`).join('\n');
    document.getElementById('readmeTechBuilt').value = currentIdea.techStack.join(', ');
    updateMarkdownPreview();
    showToast('Exported idea details into README Builder.');
  });

  renderIdea(IDEA_DATABASE[0]);
}

// ============================================================================
// 9. TOOL 3: TEAM MATCHER & ROSTER
// ============================================================================

function initTeamMatcher() {
  const hackersGrid = document.getElementById('hackersGrid');
  const roleFilters = document.querySelectorAll('#roleFilters .chip-filter');
  const searchInput = document.getElementById('hackerSearchInput');
  const openModalBtn = document.getElementById('openAddProfileBtn');
  const profileModal = document.getElementById('profileModal');
  const closeProfileBtn = document.getElementById('closeProfileModalBtn');
  const cancelProfileBtn = document.getElementById('cancelProfileBtn');
  const profileForm = document.getElementById('profileForm');

  let stored = localStorage.getItem('hackventure_hackers_roster');
  let hackers = stored ? JSON.parse(stored) : INITIAL_HACKERS;

  let activeRoleFilter = 'all';
  let searchTerm = '';

  function renderHackers() {
    hackersGrid.innerHTML = '';

    const filtered = hackers.filter(h => {
      const matchRole = activeRoleFilter === 'all' || h.role.toLowerCase() === activeRoleFilter.toLowerCase();
      const matchSearch = searchTerm === '' ||
        h.name.toLowerCase().includes(searchTerm) ||
        h.skills.some(s => s.toLowerCase().includes(searchTerm)) ||
        h.bio.toLowerCase().includes(searchTerm);
      return matchRole && matchSearch;
    });

    if (filtered.length === 0) {
      hackersGrid.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 40px; color: var(--text-muted);">
          <p style="font-size: 1.2rem; margin-bottom: 8px;">No matching profiles found.</p>
          <p style="font-size: 0.9rem;">Try adjusting your filter or publish your profile.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(h => {
      const initials = h.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
      const card = document.createElement('div');
      card.className = 'hacker-card';
      card.innerHTML = `
        <div class="hacker-header">
          <div class="hacker-avatar">${initials}</div>
          <div class="hacker-info">
            <h4 class="hacker-name">${h.name}</h4>
            <span class="hacker-role-tag">${h.roleFull || h.role}</span>
          </div>
        </div>
        <p class="hacker-bio">${h.bio}</p>
        <div class="hacker-skills">
          ${h.skills.map(s => `<span class="tag">${s}</span>`).join('')}
        </div>
        <div class="hacker-footer">
          <span class="hacker-tz">Location: ${h.tz}</span>
          <button class="btn btn-outline btn-sm connect-hacker-btn" data-contact="${h.contact}" data-name="${h.name}">Connect</button>
        </div>
      `;
      hackersGrid.appendChild(card);
    });

    document.querySelectorAll('.connect-hacker-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const contact = btn.getAttribute('data-contact');
        const name = btn.getAttribute('data-name');
        navigator.clipboard.writeText(contact).then(() => {
          showToast(`Copied contact for ${name}: ${contact}`);
        });
      });
    });
  }

  roleFilters.forEach(chip => {
    chip.addEventListener('click', () => {
      roleFilters.forEach(c => c.classList.remove('active'));
      chip.classList.add('active');
      activeRoleFilter = chip.getAttribute('data-filter');
      renderHackers();
    });
  });

  searchInput.addEventListener('input', (e) => {
    searchTerm = e.target.value.toLowerCase().trim();
    renderHackers();
  });

  openModalBtn.addEventListener('click', () => {
    profileModal.showModal();
  });

  function closeDialog() {
    profileModal.close();
  }

  closeProfileBtn.addEventListener('click', closeDialog);
  cancelProfileBtn.addEventListener('click', closeDialog);

  profileModal.addEventListener('click', (e) => {
    if (e.target === profileModal) profileModal.close();
  });

  profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('profName').value.trim();
    const role = document.getElementById('profRole').value;
    const tz = document.getElementById('profTimezone').value.trim();
    const skills = document.getElementById('profSkills').value.split(',').map(s => s.trim()).filter(Boolean);
    const bio = document.getElementById('profBio').value.trim();
    const contact = document.getElementById('profContact').value.trim() || 'Contact via Discord';

    if (!name) return;

    const newHacker = {
      id: 'h-' + Date.now(),
      name,
      role,
      roleFull: role + ' Specialist',
      tz,
      skills,
      bio: bio || 'Excited to build innovative projects at HackVenture 2026.',
      contact
    };

    hackers.unshift(newHacker);
    localStorage.setItem('hackventure_hackers_roster', JSON.stringify(hackers));
    renderHackers();
    profileForm.reset();
    profileModal.close();
    showToast('Your profile has been published to the roster.');
  });

  renderHackers();
}

// ============================================================================
// 10. TOOL 4: README & SUBMISSION BUILDER
// ============================================================================

function updateMarkdownPreview() {
  const name = document.getElementById('readmeProjectName').value || 'Project Title';
  const tagline = document.getElementById('readmeTagline').value || 'Catchy 1-line elevator pitch for judges';
  const track = document.getElementById('readmeTrack').value;
  const demoUrl = document.getElementById('readmeDemoUrl').value || 'https://github.com/your-team/hackventure-project';
  const inspiration = document.getElementById('readmeInspiration').value || 'Explain what inspired your team to build this solution during the 48 hours.';
  const whatItDoes = document.getElementById('readmeWhatItDoes').value || 'Bullet point list of primary features and user journey.';
  const techBuilt = document.getElementById('readmeTechBuilt').value || 'Languages, frameworks, databases, and APIs leveraged.';
  const challenges = document.getElementById('readmeChallenges').value || 'The hardest obstacles, bugs, or pivots overcome.';
  const next = document.getElementById('readmeNext').value || 'Future milestones, real-world deployment, and long-term roadmap.';

  const md = `# ${name}

> ${tagline}

[![HackVenture 2026 Submission](https://img.shields.io/badge/HackVenture-2026%20Submission-blueviolet)](https://hackventure.dev)
[![Track](https://img.shields.io/badge/Track-${encodeURIComponent(track)}-informational)](https://hackventure.dev#tracks)
[![Demo](https://img.shields.io/badge/Live%20Demo-Available-brightgreen)](${demoUrl})

---

## Overview & Inspiration
${inspiration}

## What It Does
${whatItDoes}

## How We Built It
- **Track**: ${track}
- **Architecture & Tech Stack**:
${techBuilt}
- **Repositories & Links**: [Live Deployment / Repository](${demoUrl})

## Challenges We Conquered
${challenges}

## Key Accomplishments
- Designed, built, and shipped a functional prototype in under 48 hours.
- Verified seamless end-to-end user workflows and error recovery.

## What's Next for ${name}
${next}

---
*Built during HackVenture 2026.*
`;

  const codeEl = document.getElementById('markdownCode');
  if (codeEl) codeEl.textContent = md;
  return md;
}

function initReadmeBuilder() {
  const inputs = [
    'readmeProjectName', 'readmeTagline', 'readmeTrack', 'readmeDemoUrl',
    'readmeInspiration', 'readmeWhatItDoes', 'readmeTechBuilt', 'readmeChallenges', 'readmeNext'
  ];

  inputs.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.addEventListener('input', updateMarkdownPreview);
  });

  const fillDemoBtn = document.getElementById('fillReadmeDemoBtn');
  const copyBtn = document.getElementById('copyReadmeBtn');
  const downloadBtn = document.getElementById('downloadReadmeBtn');

  fillDemoBtn.addEventListener('click', () => {
    document.getElementById('readmeProjectName').value = 'PulseGuard AI';
    document.getElementById('readmeTagline').value = 'Real-time proactive bio-telemetry anomaly detection for senior emergency response.';
    document.getElementById('readmeDemoUrl').value = 'https://github.com/hackventure-pulseguard/mvp';
    document.getElementById('readmeInspiration').value = 'Over 1 in 4 elderly citizens experience unassisted falls every year. We wanted to build a zero-wearable computer vision and sensor fusion monitor that preserves privacy while guaranteeing instant emergency dispatch.';
    document.getElementById('readmeWhatItDoes').value = '- Privacy-preserving skeletal pose tracking running 100% on-device via WebAssembly.\n- Automated high-confidence fall and cardiac distress detection.\n- Real-time SMS and automated dispatch with live GPS coordinate pin.';
    document.getElementById('readmeTechBuilt').value = 'FastAPI, MediaPipe WASM, WebSockets, Supabase Postgres, Tailwind CSS.';
    document.getElementById('readmeChallenges').value = 'Calibrating false-positive reduction for pet movement versus human falls under low-light camera feeds.';
    document.getElementById('readmeNext').value = 'Deploy pilot trials in assisted living communities and obtain healthcare compliance certifications.';
    updateMarkdownPreview();
    showToast('Loaded sample project into README Builder.');
  });

  copyBtn.addEventListener('click', () => {
    const md = updateMarkdownPreview();
    navigator.clipboard.writeText(md).then(() => {
      showToast('Markdown copied to clipboard.');
    });
  });

  downloadBtn.addEventListener('click', () => {
    const md = updateMarkdownPreview();
    const blob = new Blob([md], { type: 'text/markdown;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'README.md';
    link.click();
    URL.revokeObjectURL(url);
    showToast('Downloaded README.md');
  });

  updateMarkdownPreview();
}

// ============================================================================
// 11. TOOL 5: RUBRIC CALCULATOR
// ============================================================================

function initRubricCalculator() {
  const sliders = {
    innovation: document.getElementById('sliderInnovation'),
    technical: document.getElementById('sliderTechnical'),
    design: document.getElementById('sliderDesign'),
    impact: document.getElementById('sliderImpact')
  };

  const valDisplays = {
    innovation: document.getElementById('valInnovation'),
    technical: document.getElementById('valTechnical'),
    design: document.getElementById('valDesign'),
    impact: document.getElementById('valImpact')
  };

  const subscoreDisplays = {
    innovation: document.getElementById('subscoreInnovation'),
    technical: document.getElementById('subscoreTechnical'),
    design: document.getElementById('subscoreDesign'),
    impact: document.getElementById('subscoreImpact')
  };

  const totalDisplay = document.getElementById('totalScorePercent');
  const tierBadge = document.getElementById('rubricTierBadge');
  const judgeTip = document.getElementById('rubricJudgeTip');
  const resetBtn = document.getElementById('resetRubricBtn');

  function calculate() {
    const sInno = parseInt(sliders.innovation.value, 10);
    const sTech = parseInt(sliders.technical.value, 10);
    const sDesi = parseInt(sliders.design.value, 10);
    const sImpa = parseInt(sliders.impact.value, 10);

    valDisplays.innovation.textContent = `${sInno} / 10`;
    valDisplays.technical.textContent = `${sTech} / 10`;
    valDisplays.design.textContent = `${sDesi} / 10`;
    valDisplays.impact.textContent = `${sImpa} / 10`;

    const ptsInno = (sInno / 10) * 25;
    const ptsTech = (sTech / 10) * 25;
    const ptsDesi = (sDesi / 10) * 25;
    const ptsImpa = (sImpa / 10) * 25;

    subscoreDisplays.innovation.textContent = `${ptsInno.toFixed(1)} pts`;
    subscoreDisplays.technical.textContent = `${ptsTech.toFixed(1)} pts`;
    subscoreDisplays.design.textContent = `${ptsDesi.toFixed(1)} pts`;
    subscoreDisplays.impact.textContent = `${ptsImpa.toFixed(1)} pts`;

    const total = ptsInno + ptsTech + ptsDesi + ptsImpa;
    totalDisplay.textContent = `${total.toFixed(1)}%`;

    if (total >= 90) {
      tierBadge.textContent = 'Tier 1: Grand Prize Winner Material';
      tierBadge.style.background = 'linear-gradient(135deg, #10b981, #059669)';
      judgeTip.textContent = 'Outstanding across all four pillars. Ensure your live pitch rehearsal is crisp, respects the 3-minute hard stop, and features a reliable live demo.';
    } else if (total >= 80) {
      tierBadge.textContent = 'Tier 2: Strong Finalist Contender';
      tierBadge.style.background = 'linear-gradient(135deg, #a855f7, #6366f1)';
      judgeTip.textContent = 'High caliber build. Focus your presentation on demonstrating the live user flow and highlighting clear business or social metrics.';
    } else if (total >= 68) {
      tierBadge.textContent = 'Tier 3: Solid Functional MVP';
      tierBadge.style.background = 'linear-gradient(135deg, #0284c7, #38bdf8)';
      judgeTip.textContent = 'Your core technical concept works. Dedicate your final 2 hours to UI styling, polishing empty states, and writing a comprehensive README.';
    } else {
      tierBadge.textContent = 'Tier 4: In Progress / Needs Polish';
      tierBadge.style.background = 'linear-gradient(135deg, #f59e0b, #d97706)';
      judgeTip.textContent = 'Narrow your MVP scope to one killer feature that works reliably end-to-end rather than several incomplete components.';
    }
  }

  Object.values(sliders).forEach(slider => {
    slider.addEventListener('input', calculate);
  });

  resetBtn.addEventListener('click', () => {
    sliders.innovation.value = 8;
    sliders.technical.value = 8;
    sliders.design.value = 7;
    sliders.impact.value = 8;
    calculate();
    showToast('Reset rubric sliders to defaults.');
  });

  calculate();
}

// ============================================================================
// 12. TOOL 6: RESOURCES DIRECTORY
// ============================================================================

function initResourcesHub() {
  const grid = document.getElementById('resourcesGrid');
  const searchInput = document.getElementById('resourceSearchInput');

  function render(query = '') {
    grid.innerHTML = '';
    const filtered = CURATED_RESOURCES.filter(r =>
      r.name.toLowerCase().includes(query) ||
      r.category.toLowerCase().includes(query) ||
      r.desc.toLowerCase().includes(query)
    );

    filtered.forEach(r => {
      const card = document.createElement('div');
      card.className = 'resource-card';
      card.innerHTML = `
        <span class="resource-cat-tag">${r.category}</span>
        <h4 class="resource-title">${r.name}</h4>
        <p class="resource-desc">${r.desc}</p>
        <div class="resource-action">
          <span class="resource-badge-free">${r.freeTier}</span>
          <a href="${r.url}" target="_blank" rel="noopener" class="btn btn-outline btn-sm">Explore</a>
        </div>
      `;
      grid.appendChild(card);
    });
  }

  searchInput.addEventListener('input', (e) => {
    render(e.target.value.toLowerCase().trim());
  });

  render();
}

// ============================================================================
// 13. REGISTRATION & HACKER PASS MODALS
// ============================================================================

function initRegistrationAndPass() {
  const navRegBtn = document.getElementById('navRegisterBtn');
  const heroRegBtn = document.getElementById('heroRegisterBtn');
  const viewPassBtn = document.getElementById('viewPassBtn');

  const regModal = document.getElementById('registerModal');
  const closeRegBtn = document.getElementById('closeRegisterModalBtn');
  const cancelRegBtn = document.getElementById('cancelRegisterBtn');
  const regForm = document.getElementById('registrationForm');

  const passModal = document.getElementById('passModal');
  const closePassBtn = document.getElementById('closePassModalBtn');
  const printPassBtn = document.getElementById('printPassBtn');
  const copyPassIdBtn = document.getElementById('copyPassIdBtn');

  let savedPass = localStorage.getItem('hackventure_attendee_pass');
  if (savedPass) {
    try {
      const passData = JSON.parse(savedPass);
      applyPassData(passData);
      viewPassBtn.classList.remove('hidden');
    } catch (e) {
      console.warn(e);
    }
  }

  // Direct register buttons to Google Form
  if (navRegBtn) {
    navRegBtn.href = GOOGLE_REGISTRATION_FORM_URL;
  }
  if (heroRegBtn) {
    heroRegBtn.href = GOOGLE_REGISTRATION_FORM_URL;
  }

  closeRegBtn.addEventListener('click', closeRegModal);
  cancelRegBtn.addEventListener('click', closeRegModal);

  regModal.addEventListener('click', (e) => {
    if (e.target === regModal) regModal.close();
  });

  function applyPassData(data) {
    document.getElementById('ticketIdDisplay').textContent = data.id;
    document.getElementById('ticketNameDisplay').textContent = data.name;
    document.getElementById('ticketRoleDisplay').textContent = data.role;
    document.getElementById('ticketTrackDisplay').textContent = data.track;

    const initials = data.name.split(' ').map(n => n[0]).join('').substring(0, 2).toUpperCase();
    document.getElementById('ticketAvatar').textContent = initials;
  }

  regForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('regFullName').value.trim();
    const email = document.getElementById('regEmail').value.trim();
    const role = document.getElementById('regRole').value;
    const track = document.getElementById('regTrack').value;

    const randomNum = Math.floor(1000 + Math.random() * 9000);
    const passId = `#HV-${randomNum}-${role.substring(0, 2).toUpperCase()}`;

    const passData = {
      id: passId,
      name,
      email,
      role,
      track
    };

    localStorage.setItem('hackventure_attendee_pass', JSON.stringify(passData));
    applyPassData(passData);

    regModal.close();
    viewPassBtn.classList.remove('hidden');
    passModal.showModal();
    sfx.finishFanfare();
    showToast(`Welcome to HackVenture 2026, ${name}!`);
  });

  viewPassBtn.addEventListener('click', () => {
    passModal.showModal();
  });

  closePassBtn.addEventListener('click', () => {
    passModal.close();
  });

  passModal.addEventListener('click', (e) => {
    if (e.target === passModal) passModal.close();
  });

  printPassBtn.addEventListener('click', () => {
    window.print();
  });

  copyPassIdBtn.addEventListener('click', () => {
    const id = document.getElementById('ticketIdDisplay').textContent;
    navigator.clipboard.writeText(id).then(() => {
      showToast(`Copied Pass ID: ${id}`);
    });
  });
}

// ============================================================================
// 14. MOBILE NAVIGATION TOGGLE
// ============================================================================

function initMobileNav() {
  const menuToggle = document.getElementById('menuToggle');
  const navMenu = document.getElementById('navMenu');

  menuToggle.addEventListener('click', () => {
    const isShown = navMenu.classList.toggle('show');
    menuToggle.setAttribute('aria-expanded', isShown);
  });

  document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('show');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

// ============================================================================
// INITIALIZATION ENTRY POINT
// ============================================================================

document.addEventListener('DOMContentLoaded', () => {
  initHeroCountdown();
  initScheduleTabs();
  initToolboxTabs();
  initPitchTimer();
  initIdeaMatrix();
  initTeamMatcher();
  initReadmeBuilder();
  initRubricCalculator();
  initResourcesHub();
  initRegistrationAndPass();
  initMobileNav();
});
