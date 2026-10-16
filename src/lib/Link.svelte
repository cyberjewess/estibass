<script lang="ts">
	let { url, text }: { url: string; text: string } = $props();
</script>

<a class="link" href={url}>{text}</a>
