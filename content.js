const SITE = {
  email: "arbiujka@gmail.com",
  linkedin: "https://linkedin.com/company/onbrand1"
};

const CREATORS = [
  {
    name: "Andrew Schulz",
    role: "Comedian",
    img: "assets/andrew-schulz.png",
    link: "https://www.instagram.com/andrewschulz/",
    linkLabel: "Instagram"
  },
  {
    name: "Graham Stephan",
    role: "Personal finance creator",
    img: "assets/graham-stephan.png",
    link: "https://www.youtube.com/@GrahamStephan",
    linkLabel: "YouTube"
  },
  {
    name: "Charlamagne",
    role: "Radio host and entrepreneur",
    img: "assets/charlamagne.webp",
    link: "https://www.instagram.com/cthagod/",
    linkLabel: "Instagram"
  },
  {
    name: "Jay Shetty",
    role: "Author and podcast host",
    img: "assets/jay-shetty.jpeg",
    link: "https://www.youtube.com/@jayshetty",
    linkLabel: "YouTube"
  },
  {
    name: "Mike Majlak",
    role: "Content creator and host",
    img: "assets/mike-majlak.png",
    link: "https://www.youtube.com/@mikemajlak",
    linkLabel: "YouTube"
  },
  {
    name: "Caleb Hammer",
    role: "Personal finance creator",
    img: "assets/caleb-hammer.png",
    link: "https://www.youtube.com/calebhammer",
    linkLabel: "YouTube"
  }
];

const PODCASTS = [
  {
    name: "Flagrant",
    img: "assets/flagrant.png",
    link: "https://www.youtube.com/@OfficialFlagrant/",
    linkLabel: "YouTube"
  },
  {
    name: "Iced Coffee Hour",
    img: "assets/iced-coffee-hour.avif",
    link: "https://www.youtube.com/@TheIcedCoffeeHour",
    linkLabel: "YouTube"
  },
  {
    name: "Brilliant Idiots",
    img: "assets/brilliant-idiots.jpg",
    link: "https://www.youtube.com/@BrilliantIdiotsPod",
    linkLabel: "YouTube"
  },
  {
    name: "It Is What It Is",
    img: "assets/it-is-what-it-is.jpeg",
    link: "https://www.youtube.com/@itiswhatitispodcast1",
    linkLabel: "YouTube"
  },
  {
    name: "Impaulsive",
    img: "assets/impaulsive-logo.webp",
    link: "https://www.youtube.com/@Impaulsive",
    linkLabel: "YouTube"
  },
  {
    name: "Financial Audit",
    img: "assets/financial-audit-logo.png",
    link: "https://www.youtube.com/calebhammer",
    linkLabel: "YouTube"
  }
];

const MARQUEE_NAMES = [
  { name: "Flagrant" },
  { name: "Iced Coffee Hour" },
  { name: "Brilliant Idiots" },
  { name: "It Is What It Is" },
  { name: "Impaulsive" },
  { name: "Mike Majlak" },
  { name: "Jay Shetty" },
  { name: "Graham Stephan" }
];

const EPISODE_TIMELINE = {
  duration: "1:52:40",
  moments: [
    {
      time: "0:14:20",
      title: "Replace with the real caption for this clip",
      views: "26M views",
      thumb: "assets/clip1-flagrant.jpg",
      clip: "https://www.instagram.com/reel/DDP30ELs4-r/",
      clipLabel: "Watch on Instagram"
    },
    {
      time: "0:41:05",
      title: "Replace with the real caption for this clip",
      views: "21M views",
      thumb: "assets/clip2-brilliant-idiots.jpg",
      clip: "https://www.instagram.com/reel/DLIKuZCR4Op/",
      clipLabel: "Watch on Instagram"
    },
    {
      time: "1:08:50",
      title: "Roasted On A Viet Nail Sakon",
      views: "20M views",
      thumb: "assets/clip3-ireland-boys.jpg",
      clip: "https://www.youtube.com/shorts/-444slzA8Ag",
      clipLabel: "Watch on YouTube"
    },
    {
      time: "1:33:15",
      title: "Replace with the real caption for this clip",
      views: "5.8M views",
      thumb: "assets/clip4-iced-coffee.jpg",
      clip: "https://www.instagram.com/reel/DJE6Z-7OQhf/",
      clipLabel: "Watch on Instagram"
    }
  ]
};

const STATS = [
  { num: "1B+", label: "Total views across clipped content" },
  { num: "40+", label: "Shows and creators clipped for" },
  { num: "48hr", label: "Typical turnaround per episode" }
];

const QUOTES = [
  {
    quote: "Replace this with a real line from a client about working with OnBrand One.",
    who: "Client name, show"
  },
  {
    quote: "Another placeholder testimonial — swap in an actual quote when you have one.",
    who: "Client name, show"
  }
];

const GROWTH_CHALLENGES = [
  {
    client: "Flagrant",
    metric: "Followers",
    months: ["Oct 2023","Nov 2023","Dec 2023","Jan 2024","Feb 2024","Mar 2024","Apr 2024","May 2024","Jun 2024","Jul 2024","Aug 2024","Sep 2024","Oct 2024","Nov 2024","Dec 2024","Jan 2025","Feb 2025","Mar 2025","Apr 2025","May 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025","Oct 2025","Nov 2025","Dec 2025","Jan 2026","Feb 2026","Mar 2026","Apr 2026","May 2026","Jun 2026","Jul 2026"],
    values: [238000, 240000, 242000, 245000, 248000, 250000, 255000, 280000, 320000, 330000, 335000, 340000, 345000, 350000, 355000, 357000, 359000, 360000, 365000, 390000, 420000, 450000, 465000, 480000, 490000, 500000, 510000, 545000, 548000, 552000, 556000, 558000, 559000, 560000],
    start: "Mar 2025",
    context: "We started clipping Flagrant in March 2025. In the 16 months since, followers grew from 360K to 560K — a 55% increase."
  },
  {
    client: "It Is What It Is Podcast",
    metric: "Subscribers",
    months: ["Oct 2023","Nov 2023","Dec 2023","Jan 2024","Feb 2024","Mar 2024","Apr 2024","May 2024","Jun 2024","Jul 2024","Aug 2024","Sep 2024","Oct 2024","Nov 2024","Dec 2024","Jan 2025","Feb 2025"],
    values: [121000, 125000, 128000, 130000, 170000, 190000, 200000, 212000, 220000, 226000, 228000, 230000, 232000, 236000, 238000, 242000, 245000],
    start: "Jan 2024",
    context: "We started clipping It Is What It Is in January 2024. In the 13 months since, subscribers grew from 130K to 245K — nearly doubling."
  },
  {
    client: "Brilliant Idiots",
    metric: "Followers",
    months: ["Oct 2023","Nov 2023","Dec 2023","Jan 2024","Feb 2024","Mar 2024","Apr 2024","May 2024","Jun 2024","Jul 2024","Aug 2024","Sep 2024","Oct 2024","Nov 2024","Dec 2024","Jan 2025","Feb 2025","Mar 2025","Apr 2025","May 2025","Jun 2025","Jul 2025","Aug 2025","Sep 2025","Oct 2025","Nov 2025","Dec 2025","Jan 2026","Feb 2026","Mar 2026","Apr 2026","May 2026","Jun 2026","Jul 2026"],
    values: [106000, 107000, 108000, 132000, 133000, 134000, 135000, 136000, 137000, 138000, 140000, 143000, 148000, 152000, 156000, 158000, 159000, 160000, 170000, 178000, 183000, 200000, 215000, 230000, 245000, 248000, 250000, 260000, 258000, 257000, 255000, 254000, 252000, 250000],
    start: "Jul 2024",
    end: "Jan 2026",
    context: "We clipped for Brilliant Idiots starting in July 2024 until January 2026. During our run, followers surged from 138K up to 260K."
  }
];

function esc(str){
  const d = document.createElement('div');
  d.textContent = str;
  return d.innerHTML;
}

function renderCreatorGrid(elementId, list){
  const el = document.getElementById(elementId);
  if(!el) return;
  el.innerHTML = list.map(c => `
    <a class="card" href="${esc(c.link)}" target="_blank" rel="noopener">
      <img src="${esc(c.img)}" alt="${esc(c.name)}" loading="lazy">
      <div class="info">
        <h3>${esc(c.name)}</h3>
        <p>${esc(c.role)}</p>
        <span class="profile-link">${esc(c.linkLabel)} ↗</span>
      </div>
    </a>
  `).join('');
}

function renderPodcastGrid(elementId, list){
  const el = document.getElementById(elementId);
  if(!el) return;
  el.innerHTML = list.map(p => `
    <a class="card podcast-card" href="${esc(p.link)}" target="_blank" rel="noopener">
      <img src="${esc(p.img)}" alt="${esc(p.name)}" loading="lazy">
      <h3>${esc(p.name)}</h3>
      <span class="profile-link">${esc(p.linkLabel)} ↗</span>
    </a>
  `).join('');
}

function renderMarquee(elementId, list){
  const el = document.getElementById(elementId);
  if(!el) return;
  const names = list.map(p => p.name);
  if(names.length === 0) return;

  el.innerHTML = names.map(n => `<span>${esc(n)}</span>`).join('');
  const singleSetWidth = el.scrollWidth || 1;
  const targetWidth = window.innerWidth * 2.2;
  const repeats = Math.max(2, Math.ceil(targetWidth / singleSetWidth));

  let block = [];
  for(let i = 0; i < repeats; i++){ block = block.concat(names); }
  const doubled = block.concat(block);
  el.innerHTML = doubled.map(n => `<span>${esc(n)}</span>`).join('');

  const secondsPerSet = 9;
  el.style.animationDuration = (secondsPerSet * repeats) + 's';
}

function initMarqueeResizeHandling(elementId, list){
  let resizeTimer;
  window.addEventListener('resize', () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(() => renderMarquee(elementId, list), 200);
  });
  window.addEventListener('load', () => renderMarquee(elementId, list));
  if(document.fonts && document.fonts.ready){
    document.fonts.ready.then(() => renderMarquee(elementId, list));
  }
}

function timecodeToSeconds(t){
  return t.split(':').map(Number).reduce((acc, n) => acc * 60 + n, 0);
}

function renderHeroTimeline(elementId, data){
  const el = document.getElementById(elementId);
  if(!el || !data || !data.moments || !data.moments.length) return;

  const totalSeconds = timecodeToSeconds(data.duration);
  let seed = 11;
  let waveform = '';
  for(let i = 0; i < 180; i++){
    seed = (seed * 9301 + 49297) % 233280;
    const h = 10 + Math.round((seed / 233280) * 90);
    waveform += `<span style="height:${h}%"></span>`;
  }

  const marks = data.moments.map((m) => {
    const pct = Math.min(96, Math.max(4, (timecodeToSeconds(m.time) / totalSeconds) * 100));
    const align = pct < 15 ? 'align-left' : pct > 85 ? 'align-right' : '';
    const isIg = m.clip.includes('instagram');
    const platformLabel = isIg ? 'Instagram' : 'YouTube';
    return `
      <a class="moment ${align}" style="left:${pct}%" href="${esc(m.clip)}" target="_blank" rel="noopener">
        <span class="moment-marker"><span class="moment-dot"></span></span>
        <span class="moment-card">
          <span class="moment-media-wrap">
            <img src="${esc(m.thumb)}" alt="" loading="eager">
            <span class="moment-play-overlay">
              <span class="moment-play-btn">
                <svg viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg>
              </span>
            </span>
          </span>
          <span class="moment-card-body">
            <p>${esc(m.title)}</p>
            <span class="moment-meta-row">
              <span class="moment-views">${esc(m.views)}</span>
              <span class="moment-platform-badge">${platformLabel}</span>
            </span>
            <span class="moment-card-cta">${esc(m.clipLabel || 'Watch the clip')} ↗</span>
          </span>
        </span>
      </a>`;
  }).join('');

  const lastMoment = data.moments[data.moments.length - 1];
  const lastPct = Math.min(96, Math.max(4, (timecodeToSeconds(lastMoment.time) / totalSeconds) * 100));
  const arrowLeft = `calc(${lastPct}% - 142px)`;
  const tailX = `calc(${lastPct}% - 152px)`;
  const callout = `
    <svg class="clip-callout-arrow" viewBox="0 0 150 90" width="150" height="90" style="left:${arrowLeft}" aria-hidden="true">
      <defs>
        <marker id="clip-callout-arrowhead" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
          <path d="M 0 1 L 10 5 L 0 9 z" fill="#ffffff"/>
        </marker>
      </defs>
      <path d="M 6 12 C 55 4, 110 35, 140 74" stroke="#ffffff" stroke-width="2.5" fill="none" marker-end="url(#clip-callout-arrowhead)"/>
    </svg>
    <span class="clip-callout-text" style="left:${tailX}" aria-hidden="true">some of our top performing clips</span>`;

  el.innerHTML = `
    <div class="ruler-track-wrap">
      <div class="ruler-track">
        <div class="waveform" aria-hidden="true">${waveform}</div>
        <div class="ruler-baseline"></div>
        <div class="scrub-line" aria-hidden="true"></div>
        ${marks}
        ${callout}
      </div>
    </div>
  `;

  const track = el.querySelector('.ruler-track');
  const scrubLine = el.querySelector('.scrub-line');
  if(track && scrubLine){
    track.addEventListener('mousemove', (e) => {
      const rect = track.getBoundingClientRect();
      const pct = Math.min(100, Math.max(0, ((e.clientX - rect.left) / rect.width) * 100));
      scrubLine.style.left = pct + '%';
    });
  }
}

function renderStats(elementId, list){
  const el = document.getElementById(elementId);
  if(!el) return;
  el.innerHTML = list.map(s => `
    <div class="stat">
      <div class="num">${esc(s.num)}</div>
      <div class="label">${esc(s.label)}</div>
    </div>
  `).join('');
}

/* ============================================================
   GROWTH GAME ENGINE
   ============================================================ */

const GROWTH_CHART_DIMS = { width: 800, height: 280, padLeft: 60, padRight: 20, padTop: 45, padBottom: 40 };
const GROWTH_TOLERANCE = 1;

function fmtFollowers(n){
  return n >= 1000 ? (Math.round(n / 100) / 10) + 'K' : String(n);
}

function growthPoint(challenge, i){
  const d = GROWTH_CHART_DIMS;
  const n = challenge.values.length;
  const min = Math.min(...challenge.values);
  const max = Math.max(...challenge.values);
  const x = d.padLeft + (i / (n - 1)) * (d.width - d.padLeft - d.padRight);
  const y = d.height - d.padBottom - ((challenge.values[i] - min) / (max - min || 1)) * (d.height - d.padTop - d.padBottom);
  return { x, y };
}

function growthPathD(challenge, fromIdx, toIdx){
  let d = '';
  for(let i = fromIdx; i <= toIdx; i++){
    const p = growthPoint(challenge, i);
    d += (i === fromIdx ? 'M' : 'L') + p.x.toFixed(1) + ',' + p.y.toFixed(1) + ' ';
  }
  return d.trim();
}

function growthAreaD(challenge, fromIdx, toIdx){
  const dims = GROWTH_CHART_DIMS;
  const floorY = dims.height - dims.padBottom;
  const first = growthPoint(challenge, fromIdx);
  const last = growthPoint(challenge, toIdx);
  return growthPathD(challenge, fromIdx, toIdx) + ` L${last.x.toFixed(1)},${floorY} L${first.x.toFixed(1)},${floorY} Z`;
}

function renderGrowthGame(elementId, challenges){
  const root = document.getElementById(elementId);
  if(!root || !challenges || !challenges.length) return;

  root.innerHTML = `<div class="growth-cards-list"></div>`;
  const container = root.querySelector('.growth-cards-list');

  challenges.forEach((challenge, cIdx) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'growth-card';
    cardEl.id = `growth-card-${cIdx}`;
    container.appendChild(cardEl);

    const dims = GROWTH_CHART_DIMS;
    const n = challenge.values.length;
    const startIdx = challenge.months.indexOf(challenge.start);
    const stopIdx = challenge.end ? challenge.months.indexOf(challenge.end) : null;

    let answered = false;

    const minVal = Math.min(...challenge.values);
    const maxVal = Math.max(...challenge.values);
    const yTicks = [0, 0.33, 0.66, 1].map(pct => {
      const val = minVal + pct * (maxVal - minVal);
      const yPos = dims.height - dims.padBottom - pct * (dims.height - dims.padTop - dims.padBottom);
      return { val: fmtFollowers(val), y: yPos };
    });

    const xTicksCount = 5;
    const xTicks = [];
    for(let i = 0; i < xTicksCount; i++){
      const monthIndex = Math.round((i / (xTicksCount - 1)) * (n - 1));
      const p = growthPoint(challenge, monthIndex);
      xTicks.push({ label: challenge.months[monthIndex], x: p.x });
    }

    cardEl.innerHTML = `
      <div class="growth-head">
        <h3 class="growth-prompt">${esc(challenge.client)}</h3>
        <span class="growth-metric-tag">${esc(challenge.metric)}</span>
      </div>
      <p class="growth-sub" data-sub>Guess where we <span>started</span> working with them.</p>
      
      <div class="growth-chart-wrap">
        <svg class="growth-chart-svg" viewBox="0 0 ${dims.width} ${dims.height}" preserveAspectRatio="xMidYMid meet">
          <defs>
            <marker id="arrow-white-${cIdx}" viewBox="0 0 10 10" refX="6" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
              <path d="M 0 1 L 10 5 L 0 9 z" fill="#ffffff"/>
            </marker>
          </defs>

          <!-- Y Axis -->
          <g class="growth-y-axis">
            ${yTicks.map(t => `
              <line x1="${dims.padLeft}" y1="${t.y}" x2="${dims.width - dims.padRight}" y2="${t.y}" stroke="var(--line)" stroke-dasharray="3 3"/>
              <text x="${dims.padLeft - 10}" y="${t.y + 4}" fill="var(--muted)" font-size="11" text-anchor="end">${t.val}</text>
            `).join('')}
          </g>

          <!-- X Axis -->
          <g class="growth-x-axis">
            ${xTicks.map(t => `
              <text x="${t.x}" y="${dims.height - 12}" fill="var(--muted)" font-size="11" text-anchor="middle">${esc(t.label)}</text>
            `).join('')}
          </g>

          <!-- Main Chart -->
          <path class="growth-area" d="${growthAreaD(challenge, 0, n - 1)}"></path>
          <path class="growth-line" d="${growthPathD(challenge, 0, n - 1)}"></path>

          <!-- Dynamic Overlays -->
          <g class="growth-active-segments"></g>
          <g class="growth-annotations"></g>
          <g class="growth-markers"></g>

          <!-- Clickable Bounds -->
          <rect class="growth-hit" x="${dims.padLeft}" y="${dims.padTop}" width="${dims.width - dims.padLeft - dims.padRight}" height="${dims.height - dims.padTop - dims.padBottom}" fill="transparent"></rect>
        </svg>
      </div>

      <div class="growth-feedback" hidden></div>
    `;

    const svg = cardEl.querySelector('.growth-chart-svg');
    const hitRect = cardEl.querySelector('.growth-hit');
    const feedback = cardEl.querySelector('.growth-feedback');
    const subText = cardEl.querySelector('[data-sub]');
    const markersGroup = cardEl.querySelector('.growth-markers');
    const activeSegsGroup = cardEl.querySelector('.growth-active-segments');
    const annotationsGroup = cardEl.querySelector('.growth-annotations');
    const lineEl = cardEl.querySelector('.growth-line');
    const areaEl = cardEl.querySelector('.growth-area');

    hitRect.addEventListener('click', (e) => {
      if(answered) return;
      answered = true;

      const rect = svg.getBoundingClientRect();
      const vbX = ((e.clientX - rect.left) / rect.width) * dims.width;
      const fraction = (vbX - dims.padLeft) / (dims.width - dims.padLeft - dims.padRight);
      const guessIdx = Math.min(n - 1, Math.max(0, Math.round(fraction * (n - 1))));

      revealActualData(guessIdx);
    });

    function revealActualData(guessIdx) {
      lineEl.classList.add('growth-line-before');
      areaEl.classList.add('growth-area-before');

      const activeEnd = stopIdx !== null ? stopIdx : (n - 1);
      activeSegsGroup.innerHTML = `
        <path class="growth-area growth-area-after" d="${growthAreaD(challenge, startIdx, activeEnd)}"></path>
        <path class="growth-line growth-line-after" d="${growthPathD(challenge, startIdx, activeEnd)}"></path>
      `;

      let mSvg = '';
      let aSvg = '';

      const startPt = growthPoint(challenge, startIdx);
      mSvg += `<circle class="growth-marker-correct" cx="${startPt.x}" cy="${startPt.y}" r="7"></circle>`;

      const sIsLeft = startPt.x < (dims.width / 2);
      const sStartX = sIsLeft ? startPt.x + 45 : startPt.x - 45;
      const sStartY = Math.max(dims.padTop + 5, startPt.y - 45);
      const sCtrlX = sIsLeft ? startPt.x + 20 : startPt.x - 20;

      aSvg += `
        <g class="growth-arrow-group">
          <path d="M ${sStartX} ${sStartY} Q ${sCtrlX} ${startPt.y - 25} ${startPt.x} ${startPt.y - 8}" 
                stroke="#ffffff" stroke-width="2" fill="none" marker-end="url(#arrow-white-${cIdx})"/>
          <text x="${sStartX}" y="${sStartY - 6}" fill="#ffffff" font-size="12" font-weight="700" text-anchor="${sIsLeft ? 'start' : 'end'}">
            Started: ${esc(challenge.start)}
          </text>
        </g>
      `;

      const startAccurate = Math.abs(guessIdx - startIdx) <= GROWTH_TOLERANCE;
      if(!startAccurate) {
        const g1Pt = growthPoint(challenge, guessIdx);
        mSvg += `
          <g class="growth-marker-x" transform="translate(${g1Pt.x},${g1Pt.y})">
            <line x1="-6" y1="-6" x2="6" y2="6"></line>
            <line x1="-6" y1="6" x2="6" y2="-6"></line>
          </g>`;
      }

      if(challenge.end && stopIdx !== null) {
        const stopPt = growthPoint(challenge, stopIdx);
        mSvg += `<circle class="growth-marker-correct" cx="${stopPt.x}" cy="${stopPt.y}" r="7"></circle>`;

        const eIsLeft = stopPt.x < (dims.width / 2);
        const eStartX = eIsLeft ? stopPt.x + 45 : stopPt.x - 45;
        const eStartY = Math.max(dims.padTop + 5, stopPt.y - 60);
        const eCtrlX = eIsLeft ? stopPt.x + 20 : stopPt.x - 20;

        aSvg += `
          <g class="growth-arrow-group">
            <path d="M ${eStartX} ${eStartY} Q ${eCtrlX} ${stopPt.y - 30} ${stopPt.x} ${stopPt.y - 8}" 
                  stroke="#ffffff" stroke-width="2" fill="none" marker-end="url(#arrow-white-${cIdx})"/>
            <text x="${eStartX}" y="${eStartY - 6}" fill="#ffffff" font-size="12" font-weight="700" text-anchor="${eIsLeft ? 'start' : 'end'}">
              Stopped: ${esc(challenge.end)}
            </text>
          </g>
        `;
        
        feedback.innerHTML = startAccurate
          ? `<p class="growth-verdict growth-verdict-correct">Spot on!</p><p class="growth-context">${esc(challenge.context)}</p>`
          : `<p class="growth-verdict growth-verdict-wrong">Not quite!</p><p class="growth-context">${esc(challenge.context)}</p>`;
          
        subText.innerHTML = `Clipping Period: <strong>${esc(challenge.start)}</strong> – <strong>${esc(challenge.end)}</strong>`;

      } else {
        feedback.innerHTML = startAccurate
          ? `<p class="growth-verdict growth-verdict-correct">Spot on!</p><p class="growth-context">${esc(challenge.context)}</p>`
          : `<p class="growth-verdict growth-verdict-wrong">Not quite!</p><p class="growth-context">${esc(challenge.context)}</p>`;
        subText.innerHTML = `Started Clipping: <strong>${esc(challenge.start)}</strong>`;
      }

      markersGroup.innerHTML = mSvg;
      annotationsGroup.innerHTML = aSvg;
      feedback.hidden = false;
    }
  });
}

function wireMailLinks(){
  document.querySelectorAll('[data-mailto]').forEach(a => {
    a.href = "mailto:" + SITE.email;
  });
  document.querySelectorAll('[data-email-text]').forEach(a => {
    a.textContent = SITE.email;
  });
  document.querySelectorAll('[data-linkedin]').forEach(a => {
    a.href = SITE.linkedin;
    a.target = "_blank";
    a.rel = "noopener";
  });
}
document.addEventListener('DOMContentLoaded', wireMailLinks);