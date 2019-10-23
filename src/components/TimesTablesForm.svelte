<script>
  export let options = {
		n: 2,
		from: 2,
		to: 12,
		count: 10
	}
	
</script>

<div class="form">

	<div class="item">
		<label>N</label>
		<input type=number bind:value={options.n} />		
	</div>
	<div class="item">
		<label>from</label>
		<input type=number bind:value={options.from} />		
	</div>
	<div class="item">
		<label>to</label>
		<input type=number bind:value={options.to} />		
	</div>
	<div class="item">
		<label>count</label>
		<input type=number bind:value={options.count} />		
	</div>
</div>

<style>
	
	* {
		color: #444;
	}
	.form {
		padding: 0.5rem;
		border: 1px solid #ddd;
		display: grid;
		grid-gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(80px, 100px));
	}

	.form .item {
		padding: 0.2rem 0.5rem;
		display: grid;
		grid-template-rows: 1rem 2rem;
	}
	
	.form .item label {
		font-size: .9rem;
		color: #999;
	}
	
	input {
		width: 100%;
	}
</style>