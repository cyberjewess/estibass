<script lang="ts">
	import Link from '$lib/Link.svelte';
	import Nameplate from '$lib/Nameplate.svelte';
</script>

<svelte:head>
	<title>Esti Lurie</title>
</svelte:head>

<main>
	<Nameplate />
	<br />
	<ul class="links">
		<li>
			<Link url={'/developer'} text={'developer'} />
		</li>
		<li>
			<Link url={'/bass-player'} text={'bass player'} />
		</li>
		<li>
			<Link url={'/language-learner'} text={'language learner'} />
		</li>
		<li>
			<Link url={'/blogger'} text={'blogger'} />
		</li>
	</ul>
</main>

<style>
	.links {
		font-size: 1.25em;
		list-style-type: none; /* Remove bullets */
		padding: 0; /* Remove padding */
		margin: 0; /* Remove margins */
	}
</style>
