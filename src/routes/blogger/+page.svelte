<script lang="ts">
	import NewTabLink from '$lib/NewTabLink.svelte';
	import Link from '$lib/Link.svelte';
	import Nameplate from '$lib/Nameplate.svelte';
</script>

<svelte:head>
	<title>Esti Lurie</title>
</svelte:head>

<main>
	<Nameplate />
	<p>Sometimes I write things, and you can read those things here.</p>
	<ul class="links">
		<li>
			<Link url={'/blogger/1'} text={'Too Hot in L.A.'} />
			<p class="small">2024-09-16</p>
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

	.small {
		font-size: 0.8em;
		margin: auto;
		padding-left: 10%;
		padding-bottom: 10%;
	}
</style>
