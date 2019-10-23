<script>
	export let questions = []		
</script>

<div class="list">
	{#each questions as question} 
		<div class="item">
			{question.expression}	
		</div>
	{/each}
</div>

<style>
	.list {
		display: grid;
		grid-gap: 0.5rem;
		grid-template-columns: repeat(auto-fit, minmax(80px, 120px));
	}
	
	.item {
		padding: 0.5rem;
		border: 1px solid #ddd;
		border-radius: 5px;
	}
</style>






