<script lang="ts">
	let { url, text }: { url: string; text: string } = $props();
</script>

<a class="link" target="_blank" rel="noopener noreferrer" href={url}>{text}</a>
