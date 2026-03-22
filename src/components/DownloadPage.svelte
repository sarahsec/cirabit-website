<script>
  export let content;
</script>

<section class="panel download-panel reveal" style="--delay: 140ms;">
  <p class="badge">{content.downloadBadge}</p>
  <h1>{content.downloadTitle}</h1>
  <p class="download-intro">{content.downloadIntro}</p>
  <div class="actions">
    <a class="button primary" href={content.downloadPrimaryUrl} target="_blank" rel="noreferrer">
      {content.downloadPrimaryButton}
    </a>
  </div>
</section>

<section class="panel reveal" style="--delay: 220ms;">
  <h2>{content.downloadFilesTitle}</h2>
  <div class="download-grid">
    {#each content.downloadFiles as file, index}
      <article class="download-card reveal" style={`--delay: ${280 + index * 70}ms;`}>
        <h3>{file.title}</h3>
        <p>{file.description}</p>
        <a class="policy-link download-link" href={file.url} target="_blank" rel="noreferrer">
          {file.fileName}
        </a>
      </article>
    {/each}
  </div>
</section>

<section class="panel reveal" style="--delay: 300ms;">
  <h2>{content.downloadIntegrityTitle}</h2>
  <p class="download-check">
    {content.downloadIntegrityDescription}
  </p>
</section>
