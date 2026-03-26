(function () {
  // ── Inject Orbitron font if not already loaded ──
  if (!document.querySelector('link[href*="Orbitron"]')) {
    const font = document.createElement('link');
    font.rel  = 'stylesheet';
    font.href = 'https://fonts.googleapis.com/css2?family=Orbitron:wght@700&display=swap';
    document.head.appendChild(font);
  }

  // ── Inject styles ──
  const style = document.createElement('style');
  style.textContent = `
    #bottom-nav {
      position: fixed; bottom: 0; left: 0; right: 0; z-index: 9999;
      display: flex; justify-content: space-around; align-items: center;
      padding: 10px 16px 18px;
      background: rgba(19,19,20,0.95);
      backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px);
      border-top: 1px solid rgba(255,255,255,0.07);
    }
    .nav-item {
      display: flex; flex-direction: column; align-items: center; gap: 4px;
      text-decoration: none; color: rgba(255,255,255,0.3);
      font-family: 'Orbitron', sans-serif; font-size: 8px; font-weight: 700;
      letter-spacing: 0.12em; text-transform: uppercase;
      transition: color 0.2s, transform 0.2s;
      padding: 4px 20px; border-radius: 12px;
      -webkit-tap-highlight-color: transparent;
    }
    .nav-item svg { transition: stroke 0.2s; }
    .nav-item:active { transform: scale(0.92); }
    .nav-item.active { color: #4285F4; }
    .nav-item.active svg {
      stroke: #4285F4;
      filter: drop-shadow(0 0 6px rgba(66,133,244,0.5));
    }

    /* ── Spacer block that pushes page content above the nav ── */
    #bottom-nav-spacer {
      display: block;
      width: 100%;
      flex-shrink: 0;
    }
  `;
  document.head.appendChild(style);

  // ── Inject nav HTML ──
  const nav = document.createElement('nav');
  nav.id = 'bottom-nav';
  nav.innerHTML = `
    <a href="dashboard.html" class="nav-item" data-page="dashboard">
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M3 12L12 3l9 9M4 10v10a1 1 0 001 1h5v-6h4v6h5a1 1 0 001-1V10"/>
      </svg>
      <span>Home</span>
    </a>
    <a href="lobby.html" class="nav-item" data-page="lobby">
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M17 20h5v-2a4 4 0 00-5.356-3.765M9 20H4v-2a4 4 0 015.356-3.765
             M15 7a4 4 0 11-8 0 4 4 0 018 0z
             m6 3a3 3 0 11-6 0 3 3 0 016 0z
             m-18 0a3 3 0 116 0 3 3 0 01-6 0z"/>
      </svg>
      <span>Lobbies</span>
    </a>
    <a href="leaderboard.html" class="nav-item" data-page="leaderboard">
      <svg width="22" height="22" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.8">
        <path stroke-linecap="round" stroke-linejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2z
             m0 0V9a2 2 0 012-2h2a2 2 0 012 2v10
             m-6 0a2 2 0 002 2h2a2 2 0 002-2
             m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
      <span>Ranks</span>
    </a>
  `;
  document.body.appendChild(nav);

  // ── Lock body margin equal to nav's actual rendered height ──
  // A spacer div is inserted at the bottom of <body> so the last
  // piece of content always has breathing room above the fixed nav.
  const spacer = document.createElement('div');
  spacer.id = 'bottom-nav-spacer';
  document.body.appendChild(spacer);

  function lockNavMargin() {
    const navHeight = nav.getBoundingClientRect().height;
    // Add extra clearance for iOS safe-area notches
    const safeArea = parseInt(
      getComputedStyle(document.documentElement)
        .getPropertyValue('--sat') || '0',
      10
    ) || 0;
    const totalGap = navHeight + safeArea + 12; // 12 px breathing room
    spacer.style.height = totalGap + 'px';
    document.body.style.paddingBottom = '0'; // spacer handles it now
  }

  // Apply immediately and keep it synced on resize / orientation change
  lockNavMargin();
  window.addEventListener('resize', lockNavMargin);
  window.addEventListener('orientationchange', function () {
    setTimeout(lockNavMargin, 150); // wait for browser to settle
  });

  // ── Auto-highlight active page ──
  const page = location.pathname.split('/').pop().replace('.html', '') || 'dashboard';
  const active = nav.querySelector(`[data-page="${page}"]`);
  if (active) active.classList.add('active');
})();
