<script>
  export let content;
  export let currentYear;
  export let currentPath;
  export let navigate;
  export let homeRoute;
  export let privacyRoute;
  export let downloadRoute;
</script>

<footer class="reveal" style="--delay: 580ms;">
  <p>{content.footer}</p>
  <p class="footer-links">
    {#if currentPath !== homeRoute}
      <a class="footer-link" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>{content.homeLink}</a>
    {/if}
    {#if currentPath !== downloadRoute}
      <a class="footer-link" href={downloadRoute} on:click={(event) => navigate(event, downloadRoute)}>
        {content.downloadLink}
      </a>
    {/if}
    {#if currentPath !== privacyRoute}
      <a class="footer-link" href={privacyRoute} on:click={(event) => navigate(event, privacyRoute)}>
        {content.privacyPolicy}
      </a>
    {/if}
  </p>
  <p class="footer-meta">{content.footerMeta.replace('{year}', String(currentYear))}</p>
</footer>
