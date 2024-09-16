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
			<NewTabLink url={'https://www.github.com/estherlurie'} text={'developer'} />
		</li>
		<li>
			<Link url={'/music'} text={'bass player'} />
		</li>
		<li>
			<NewTabLink
				url={'https://youtu.be/EM8my7_ApbA?si=sFcY1HKag6tlya-k'}
				text={'language learner'}
			/>
		</li>
		<li>
			<NewTabLink url={'https://www.twitter.com/rustologist'} text={'tweeter'} />
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
