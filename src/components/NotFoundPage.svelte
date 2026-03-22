<script>
  export let content;
  export let navigate;
  export let homeRoute;
  export let downloadRoute;
</script>

<section class="panel reveal" style="--delay: 140ms;">
  <p class="badge">{content.notFoundBadge}</p>
  <h1>{content.notFoundTitle}</h1>
  <p class="section-description">{content.notFoundMessage}</p>
  <div class="actions">
    <a class="button primary" href={homeRoute} on:click={(event) => navigate(event, homeRoute)}>
      {content.notFoundHomeButton}
    </a>
    <a class="button secondary" href={downloadRoute} on:click={(event) => navigate(event, downloadRoute)}>
      {content.notFoundDownloadButton}
    </a>
  </div>
</section>
