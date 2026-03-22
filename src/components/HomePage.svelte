<script>
  import cirabitLogo from '../assets/cirabit-logo.svg';
  import cirabitLogoLight from '../assets/cirabit-logo-light.svg';

  export let content;
  export let maintainers;
  export let resolvedTheme;
</script>

<section class="hero panel reveal" style="--delay: 140ms;">
  <div class="hero-main">
    <div class="hero-copy">
      <p class="badge">{content.projectBadge}</p>
      <p class="hero-meta">{content.heroMeta}</p>
      <h1>{content.heroTitle}</h1>
      <p class="hero-description">{content.heroDescription}</p>
      <div class="actions">
        <a class="button primary" href={content.downloadPrimaryUrl} target="_blank" rel="noreferrer">
          {content.primaryButton}
        </a>
        <a class="button secondary" href="https://github.com/sarahsec/cirabit-android" target="_blank" rel="noreferrer">
          {content.downloadHeroButton}
        </a>
        <a class="button secondary" href="#roadmap">
          {content.secondaryButton}
        </a>
      </div>
    </div>
    <div class="hero-brand">
      <img
        class="hero-logo"
        src={resolvedTheme === 'light' ? cirabitLogoLight : cirabitLogo}
        alt={content.logoAlt}
        loading="lazy"
        decoding="async"
        draggable="false"
      />
    </div>
  </div>
  <div class="fact-grid">
    {#each content.facts as fact, index}
      <article class="fact-card reveal" style={`--delay: ${220 + index * 70}ms;`}>
        <p class="fact-value">{fact.value}</p>
        <p class="fact-label">{fact.label}</p>
      </article>
    {/each}
  </div>
</section>

<section class="panel reveal" style="--delay: 220ms;">
  <h2>{content.highlightsTitle}</h2>
  <p class="section-description">{content.highlightsDescription}</p>
  <div class="highlights">
    {#each content.highlights as highlight, index}
      <article class="highlight-card reveal" style={`--delay: ${300 + index * 80}ms;`}>
        <h3>{highlight.title}</h3>
        <p>{highlight.description}</p>
      </article>
    {/each}
  </div>
</section>

<section id="roadmap" class="panel reveal" style="--delay: 320ms;">
  <h2>{content.roadmapTitle}</h2>
  <p class="section-description">{content.roadmapDescription}</p>
  <div class="roadmap">
    {#each content.roadmap as item, index}
      <article class="roadmap-item reveal" style={`--delay: ${360 + index * 80}ms;`}>
        <p class="roadmap-tag">{item.tag}</p>
        <h3>{item.title}</h3>
        <p>{item.description}</p>
      </article>
    {/each}
  </div>
</section>

<section class="panel reveal" style="--delay: 380ms;">
  <h2>{content.maintainersTitle}</h2>
  <p class="section-description">{content.maintainersDescription}</p>
  <div class="maintainers">
    {#each maintainers as maintainer, index}
      {@const profile = content.maintainerProfiles[maintainer.id]}
      <article class="maintainer-card reveal" style={`--delay: ${440 + index * 100}ms;`}>
        <div class="maintainer-top">
          <img
            class="maintainer-photo"
            src={maintainer.photo}
            alt={`${maintainer.name} profile photo`}
            loading="lazy"
            decoding="async"
            draggable="false"
          />
          <div class="maintainer-meta">
            <p class="maintainer-name">{maintainer.name}</p>
            <p class="maintainer-role">{profile.role}</p>
          </div>
        </div>
        <p class="maintainer-focus">{profile.focus}</p>
        <div class="maintainer-links">
          <a
            href={maintainer.website}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.website}: ${maintainer.name}`}
            title={content.website}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm6.94 8h-3.13a14.7 14.7 0 0 0-1.02-4 7.02 7.02 0 0 1 4.15 4ZM12 5c.9 1.08 1.55 2.55 1.85 4H10.15c.3-1.45.95-2.92 1.85-4Zm-2.79 2a14.7 14.7 0 0 0-1.02 4H5.06a7.02 7.02 0 0 1 4.15-4ZM5.06 13h3.13c.1 1.43.45 2.8 1.02 4a7.02 7.02 0 0 1-4.15-4ZM12 19c-.9-1.08-1.55-2.55-1.85-4h3.7c-.3 1.45-.95 2.92-1.85 4Zm2.79-2c.57-1.2.92-2.57 1.02-4h3.13a7.02 7.02 0 0 1-4.15 4Z"
              />
            </svg>
            <span class="sr-only">{content.website}</span>
          </a>
          <a
            href={maintainer.github}
            target="_blank"
            rel="noreferrer"
            aria-label={`${content.github}: ${maintainer.name}`}
            title={content.github}
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.32 6.84 9.67.5.1.68-.22.68-.5v-1.74c-2.78.62-3.37-1.2-3.37-1.2-.45-1.18-1.1-1.5-1.1-1.5-.9-.63.07-.62.07-.62 1 .08 1.53 1.05 1.53 1.05.89 1.57 2.34 1.12 2.91.86.09-.67.35-1.12.64-1.37-2.22-.26-4.56-1.15-4.56-5.11 0-1.13.39-2.06 1.03-2.79-.1-.27-.44-1.36.1-2.84 0 0 .84-.28 2.75 1.07A9.35 9.35 0 0 1 12 6.84c.85 0 1.7.12 2.5.35 1.9-1.35 2.74-1.07 2.74-1.07.54 1.48.2 2.57.1 2.84.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.85-4.58 5.11.36.32.68.95.68 1.91v2.83c0 .28.18.61.68.5A10.26 10.26 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
              />
            </svg>
            <span class="sr-only">{content.github}</span>
          </a>
        </div>
      </article>
    {/each}
  </div>
</section>

<section class="panel reveal" style="--delay: 460ms;">
  <h2>{content.contributeTitle}</h2>
  <p class="section-description">{content.contributeDescription}</p>
  <div class="actions">
    <a class="button primary" href="https://github.com/sarahsec/cirabit-android/issues" target="_blank" rel="noreferrer">
      {content.contributePrimary}
    </a>
    <a class="button secondary" href="https://github.com/sarahsec/cirabit-android/pulls" target="_blank" rel="noreferrer">
      {content.contributeSecondary}
    </a>
  </div>
</section>
