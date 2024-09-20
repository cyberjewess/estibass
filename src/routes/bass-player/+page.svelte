<script>
	import Nameplate from '$lib/Nameplate.svelte';
	import NewTabLink from '$lib/NewTabLink.svelte';
	import image from '$lib/assets/esti playing bass red bg.jpg';
</script>

<main>
	<Nameplate />
	<div>
		<p>I'm a bass player in Brooklyn, New York.</p>
		<p>
			Currently I play in
			<NewTabLink url="https://instagram.com/thehumminahummina" text="Hummina Hummina" />, a trans
			emo pop punk band.
		</p>
		<p>
			I'm involved in a new indie noise rock project called
			<NewTabLink url="https://instagram.com/girlfriendmuseum" text="Girlfriend Museum" />.
		</p>
		<p>
			I've also performed with <NewTabLink
				url="https://instagram.com/heromagnus"
				text="Hero Magnus"
			/>.
		</p>
		<p>
			Check out some demos from my college band,
			<NewTabLink
				url="https://soundcloud.com/thewhatwhy/sets/beginners-luck-demos?si=5c42472f27454e728bf3d8159a038728&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharing"
				text="The What Why"
			/>.
			<br />
			I played bass, engineered, and produced the demos.
		</p>
	</div>
	<div class="image">
		<img alt="Me playing bass" src={image} />
	</div>
</main>

<style>
	img {
		width: 100%;
		height: auto;
		border-radius: 80px;
	}

	.image {
		margin: auto;
	}
	/* styles for desktop devices */
	@media only screen and (min-width: 768px) {
		.image {
			width: 50%;
		}
	}

	/* styles for mobile devices */
	@media only screen and (max-width: 767px) {
		.image {
			width: 90%;
		}
	}
</style>
