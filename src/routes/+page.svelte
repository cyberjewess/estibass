<script lang="ts">
	import NewTabLink from '$lib/NewTabLink.svelte';
	import Link from '$lib/Link.svelte';
	import Nameplate from '$lib/Nameplate.svelte';
</script>

<svelte:head>
	<title>Esti Lurie</title>
</svelte:head>

<main class="centered">
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
			<Link url={'/blogger/1'} text={'blogger'} />
		</li>
	</ul>
</main>

<style>
	.centered {
		margin: auto;
	}

	.links {
		font-size: 1.25em;
		list-style-type: none; /* Remove bullets */
		padding: 0; /* Remove padding */
		margin: 0; /* Remove margins */
	}
</style>
