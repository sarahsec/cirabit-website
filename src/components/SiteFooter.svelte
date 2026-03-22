<script>
  export let content;
  export let currentYear;
  export let isPrivacyRoute;
  export let navigate;
  export let homeRoute;
  export let privacyRoute;
</script>

<footer class="reveal" style="--delay: 580ms;">
  <p>{content.footer}</p>
  <p class="footer-links">
    {#if isPrivacyRoute}
      <a class="footer-link" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>{content.homeLink}</a>
    {:else}
      <a class="footer-link" href={privacyRoute} on:click={(event) => navigate(event, privacyRoute)}>
        {content.privacyPolicy}
      </a>
    {/if}
  </p>
  <p class="footer-meta">{content.footerMeta.replace('{year}', String(currentYear))}</p>
</footer>
