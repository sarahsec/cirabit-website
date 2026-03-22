<script>
  export let content;
  export let language;
  export let themePreference;
  export let currentPath;
  export let homeRoute;
  export let privacyRoute;
  export let downloadRoute;
  export let navigate;
  export let setLanguage;
  export let setThemePreference;
</script>

<header class="topbar reveal" style="--delay: 80ms;">
  <a class="brand brand-link" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>{content.siteTitle}</a>
  <div class="controls">
    <div class="switcher nav-switcher" aria-label={content.navigationAria}>
      <button
        type="button"
        class:active={currentPath === homeRoute}
        on:click={(event) => navigate(event, homeRoute)}
        aria-pressed={currentPath === homeRoute}
        aria-label={content.homeLink}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M3 11.4 12 4l9 7.4v8a.9.9 0 0 1-.9.9h-5.4a.7.7 0 0 1-.7-.7v-4.6h-4v4.6a.7.7 0 0 1-.7.7H3.9a.9.9 0 0 1-.9-.9Z" fill="currentColor" />
          </svg>
        </span>
        <span class="control-label">{content.homeLink}</span>
      </button>
      <button
        type="button"
        class:active={currentPath === downloadRoute}
        on:click={(event) => navigate(event, downloadRoute)}
        aria-pressed={currentPath === downloadRoute}
        aria-label={content.downloadLink}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 3a1 1 0 0 1 1 1v8.1l2.2-2.2a1 1 0 1 1 1.4 1.4l-3.9 3.9a1 1 0 0 1-1.4 0l-3.9-3.9a1 1 0 1 1 1.4-1.4l2.2 2.2V4a1 1 0 0 1 1-1Z" fill="currentColor" />
            <path d="M4.5 15.5a1 1 0 0 1 1 1V19h13v-2.5a1 1 0 1 1 2 0V20a1 1 0 0 1-1 1h-15a1 1 0 0 1-1-1v-3.5a1 1 0 0 1 1-1Z" fill="currentColor" />
          </svg>
        </span>
        <span class="control-label">{content.downloadLink}</span>
      </button>
      <button
        type="button"
        class:active={currentPath === privacyRoute}
        on:click={(event) => navigate(event, privacyRoute)}
        aria-pressed={currentPath === privacyRoute}
        aria-label={content.privacyPolicy}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M12 2.5 4 5.4v6.2c0 5 3.4 8.8 8 9.9 4.6-1.1 8-4.9 8-9.9V5.4Z" fill="currentColor" opacity="0.24" />
            <path d="M12 2.5 4 5.4v6.2c0 5 3.4 8.8 8 9.9 4.6-1.1 8-4.9 8-9.9V5.4Z" stroke="currentColor" stroke-width="1.5" fill="none" />
            <rect x="9" y="10.2" width="6" height="5" rx="1.1" fill="currentColor" />
            <path d="M10.2 10.1V9a1.8 1.8 0 0 1 3.6 0v1.1" stroke="#fff" stroke-width="1.2" stroke-linecap="round" />
          </svg>
        </span>
        <span class="control-label">{content.privacyPolicy}</span>
      </button>
    </div>
    <div class="switcher" aria-label={content.languageSwitcherAria}>
      <button
        type="button"
        class:active={language === 'en'}
        on:click={() => setLanguage('en')}
        aria-pressed={language === 'en'}
        aria-label={content.languageEnglishAria}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" opacity="0.2" />
            <path d="M2 7h20M2 11h20M2 15h20" stroke="currentColor" stroke-width="1.4" />
            <rect x="2" y="4" width="9" height="7" rx="1.4" fill="currentColor" />
          </svg>
        </span>
        <span class="control-label">EN-US</span>
      </button>
      <button
        type="button"
        class:active={language === 'pt'}
        on:click={() => setLanguage('pt')}
        aria-pressed={language === 'pt'}
        aria-label={content.languagePortugueseAria}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <rect x="2" y="4" width="20" height="16" rx="2" fill="currentColor" />
            <path d="M12 7 18 12 12 17 6 12Z" fill="#f4d35e" />
            <circle cx="12" cy="12" r="2.1" fill="#1e3a8a" />
          </svg>
        </span>
        <span class="control-label">PT-BR</span>
      </button>
    </div>
    <div class="switcher" aria-label={content.themeSwitcherAria}>
      <button
        type="button"
        class:active={themePreference === 'light'}
        on:click={() => setThemePreference('light')}
        aria-pressed={themePreference === 'light'}
        aria-label={content.themeLightAria}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="4.2" fill="currentColor" />
            <path
              d="M12 3v3M12 18v3M3 12h3M18 12h3M5.7 5.7l2.2 2.2M16.1 16.1l2.2 2.2M18.3 5.7l-2.2 2.2M7.9 16.1l-2.2 2.2"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
            />
          </svg>
        </span>
        <span class="control-label">{content.themeLight}</span>
      </button>
      <button
        type="button"
        class:active={themePreference === 'dark'}
        on:click={() => setThemePreference('dark')}
        aria-pressed={themePreference === 'dark'}
        aria-label={content.themeDarkAria}
      >
        <span class="control-icon" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M14.5 3.3a8.3 8.3 0 1 0 6.2 13.1A9.1 9.1 0 0 1 14.5 3.3Z" fill="currentColor" />
          </svg>
        </span>
        <span class="control-label">{content.themeDark}</span>
      </button>
    </div>
  </div>
</header>
