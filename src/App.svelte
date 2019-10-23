<script>
  import Header from "./components/Header.svelte";
  import Selector from "./components/Selector.svelte";
  import Main from "./components/Main.svelte";
  import TimesTablesForm from "./components/TimesTablesForm.svelte";
  import Problems from "./components/Problems.svelte";
  import { gen_n_times_set, generators } from "./generator";

  let selected_generator = generators[0];

  let questions = [];
  let options;
  $: options = selected_generator ? { ...selected_generator.options } : {};

  function ongenerate() {
    if (selected_generator) {
      questions = selected_generator.fn(options)
    }
  }
</script>

<Header />
<Selector bind:selected={selected_generator} options={generators} />
<Main>
  <TimesTablesForm bind:options={options} />
  <button on:click|preventDefault={ongenerate}>Generate</button>
  <Problems {questions} />

  <p>{selected_generator ? selected_generator.value : ''}</p>
</Main>
