<script lang="ts">
	import type { PageData } from './$types';

  export let data: PageData;

  const loadMore = () => {
    const newData = [];

    for (let i = data.data.length + 1; i <= data.data.length + 5; i++) newData.push(i); 

    data.data = [...data.data, ...newData];
  }
</script>

{#each data.data as d}
  <p>{d}</p>
{/each}

<button on:click={loadMore}>Load more</button>

<p>
  <a href="/page2">GO TO PAGE 2</a>
</p>