<script>
	import Nameplate from '$lib/Nameplate.svelte';
	import NewTabLink from '$lib/NewTabLink.svelte';
</script>

<main>
	<Nameplate />
	<p>
		I'm a software developer, with a specialty in distributed systems written in C++, Rust, and
		Python.
		<br />
		This site is a Sveltekit project.
	</p>
	<p>
		Check out my <NewTabLink url="https://github.com/estherlurie" text="Github" />.
	</p>
	<p>
		If you're recruiting, check out my
		<NewTabLink url="https://linkedin.com/in/estherlurie" text="LinkedIn" />.
	</p>
	<p>
		Currently I work at Bloomberg in Sustainable Finance.
		<br />
		I help develop and maintain the pipeline behind Bloomberg's ESG scores, turning company and
		government disclosures into regulation compliant, auditable scores.
	</p>
	<p>
		I graduated from UC Berkeley in 2021 with a BS in Electrical Engineering and Computer Science.
	</p>
</main>
