<script>
  import { onMount } from 'svelte';
  import HomePage from './components/HomePage.svelte';
  import PrivacyPage from './components/PrivacyPage.svelte';
  import SiteFooter from './components/SiteFooter.svelte';
  import Topbar from './components/Topbar.svelte';
  import {
    HOME_ROUTE,
    LANG_STORAGE_KEY,
    PRIVACY_ROUTE,
    THEME_STORAGE_KEY,
    labels,
    maintainers
  } from './lib/content';

  const currentYear = new Date().getFullYear();

  let language = 'en';
  let themePreference = 'dark';
  let resolvedTheme = 'dark';
  let currentPath = HOME_ROUTE;

  const resolveInitialLanguage = () => {
    const savedLanguage = localStorage.getItem(LANG_STORAGE_KEY);
    if (savedLanguage === 'en' || savedLanguage === 'pt') {
      return savedLanguage;
    }

    return navigator.language.toLowerCase().startsWith('pt') ? 'pt' : 'en';
  };

  const getSystemTheme = () => {
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  };

  const resolveInitialThemePreference = () => {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    if (savedTheme === 'light' || savedTheme === 'dark') {
      return savedTheme;
    }

    return getSystemTheme();
  };

  const normalizeRoute = (pathname) => {
    if (!pathname || pathname === '/') {
      return HOME_ROUTE;
    }

    const trimmed = pathname.endsWith('/') ? pathname.slice(0, -1) : pathname;
    return trimmed === PRIVACY_ROUTE ? PRIVACY_ROUTE : HOME_ROUTE;
  };

  function applyTheme(nextPreference, persist = true) {
    themePreference = nextPreference;
    resolvedTheme = nextPreference;

    document.documentElement.dataset.theme = resolvedTheme;
    document.documentElement.style.colorScheme = resolvedTheme;

    if (persist) {
      localStorage.setItem(THEME_STORAGE_KEY, nextPreference);
    }
  }

  onMount(() => {
    language = resolveInitialLanguage();
    document.documentElement.lang = labels[language].pageLanguage;

    applyTheme(resolveInitialThemePreference(), false);

    const syncRoute = () => {
      currentPath = normalizeRoute(window.location.pathname);
    };

    syncRoute();
    window.addEventListener('popstate', syncRoute);

    return () => {
      window.removeEventListener('popstate', syncRoute);
    };
  });

  $: content = labels[language];
  $: isPrivacyRoute = currentPath === PRIVACY_ROUTE;
  $: if (typeof document !== 'undefined') {
    document.title = isPrivacyRoute ? content.privacyPageTitle : content.siteTitle;
  }

  function setLanguage(nextLanguage) {
    language = nextLanguage;
    localStorage.setItem(LANG_STORAGE_KEY, nextLanguage);
    document.documentElement.lang = labels[nextLanguage].pageLanguage;
  }

  function setThemePreference(nextThemePreference) {
    applyTheme(nextThemePreference);
  }

  function navigate(event, nextPath) {
    event.preventDefault();
    const normalizedPath = normalizeRoute(nextPath);

    if (normalizedPath === currentPath) {
      return;
    }

    window.history.pushState({}, '', normalizedPath);
    currentPath = normalizedPath;
    window.scrollTo(0, 0);
  }
</script>

<div class="page">
  <Topbar
    {content}
    {language}
    {themePreference}
    homeRoute={HOME_ROUTE}
    {navigate}
    {setLanguage}
    {setThemePreference}
  />

  <main>
    {#if isPrivacyRoute}
      <PrivacyPage {content} {language} {navigate} homeRoute={HOME_ROUTE} />
    {:else}
      <HomePage {content} {maintainers} {resolvedTheme} />
    {/if}
  </main>

  <SiteFooter
    {content}
    {currentYear}
    {isPrivacyRoute}
    {navigate}
    homeRoute={HOME_ROUTE}
    privacyRoute={PRIVACY_ROUTE}
  />
</div>
