<script>
	import Character from "./Character.svelte";
	import Build from "./Build.svelte";
	import { charSelected } from "$lib/stores";
</script>

<div id="build-container">
	<Character charName={$charSelected} />
	<Build charName={$charSelected} />
</div>

<style lang="scss">
	#build-container {
		display: flex;
		flex-direction: row;
		background-color: var(--dark-bg-color);
		min-height: 350px;
		padding: 30px;
		border: 3px solid var(--font-color);
		@media only screen and (max-width: 640px) {
			min-height: 0;
		}
	}
</style>
