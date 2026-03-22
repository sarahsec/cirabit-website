<script>
  export let content;
  export let language;
  export let themePreference;
  export let homeRoute;
  export let navigate;
  export let setLanguage;
  export let setThemePreference;
</script>

<header class="topbar reveal" style="--delay: 80ms;">
  <a class="brand brand-link" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>{content.siteTitle}</a>
  <div class="controls">
    <div class="switcher" aria-label={content.languageSwitcherAria}>
      <button
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
