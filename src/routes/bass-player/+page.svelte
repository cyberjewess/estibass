<script>
	import Nameplate from '$lib/Nameplate.svelte';
	import NewTabLink from '$lib/NewTabLink.svelte';
	import image from '$lib/assets/esti pencildive.jpg';
</script>

<main>
	<Nameplate />
	<div>
		<p>I'm a bass player in Brooklyn, New York.</p>
		<p>
			Currently, I play in <NewTabLink
				url="https://pencildive.bandcamp.com/album/watch-the-world"
				text="Pencildive"
			/>, an indie/alt/psych rock band.
		</p>
		<p>
			I also play in
			<NewTabLink url="https://instagram.com/thehumminahummina" text="Hummina Hummina" />, a trans
			emo pop punk band.
		</p>
		<p>
			I'm involved in an indie noise rock project called
			<NewTabLink url="https://instagram.com/girlfriendmuseum" text="Girlfriend Museum" />.
		</p>
		<p>
			Check out some demos from my college band,
			<NewTabLink
				url="https://soundcloud.com/thewhatwhy/sets/beginners-luck-demos?si=5c42472f27454e728bf3d8159a038728&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
				text="The What Why"
			/>.
			<br />
			I played bass, engineered, and produced the demos.
			<br />
			They were recorded in 2019.
		</p>
	</div>
	<div class="image-container">
		<img alt="Me playing bass" src={image} loading="lazy" width="800" height="600" />
	</div>
</main>

<style>
	.image-container {
		margin: 2rem auto;
		max-width: 100%;
		display: flex;
		justify-content: center;
	}

	img {
		width: 100%;
		height: auto;
		border-radius: 80px;
		max-width: 600px; /* Prevent image from getting too large on big screens */
		object-fit: cover;
		transition: transform 0.2s ease;
	}

	img:hover {
		transform: scale(1.02);
	}

	/* Responsive breakpoints */
	@media only screen and (max-width: 480px) {
		.image-container {
			margin: 1rem auto;
		}

		img {
			border-radius: 40px; /* Smaller radius on mobile */
			max-width: 90vw;
		}
	}

	@media only screen and (min-width: 481px) and (max-width: 768px) {
		img {
			max-width: 80vw;
		}
	}

	@media only screen and (min-width: 769px) {
		img {
			max-width: 600px;
		}
	}
</style>
