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

// Arrow tip precisely touches the top edge of the dot (y=60px in 140px track)
const arrowLeft = `calc(${lastPct}% - 140px)`;
const tailX = `calc(${lastPct}% - 134px)`;
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