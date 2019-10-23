<script>
  export let options = []
  export let selected;
</script>

<style>
  .selector {
    height: 3rem;
    background-color: #fefefe;
    border-bottom: 1px solid #ddd;
  }

  select {
    width: 20rem;
    margin: 0;
    border: none;
    outline: none;
    background-color: #fff;
  }

  .select-wrap {
    border: 1px solid #ddd;
    border-radius: 4px;
    display: inline-block;
    padding: 0.5rem;
  }

  .flex {
    height: 100%;
    display: flex;
    align-items: center;
  }

  .flex > * {
		margin-right: 2rem;
  }
</style>

<div class="selector">

  <div class="wrapper flex">
    <div class="select-wrap">
      <select bind:value={selected}>
        {#if options.length > 0}
        {#each options as option}
          <option value={option}>{option.value}</option>
        {/each}
        {/if}
      </select>
    </div>
  </div>

</div>
