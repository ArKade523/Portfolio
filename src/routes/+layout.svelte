<script>
	import Header from './Header.svelte';
	import StarBackground from '$lib/components/StarBackground.svelte';
	import './general-styles.css';
	import './card-styles.css';
</script>

<div class="app">
	<div class="content-wrapper">
		<Header />
		
		<main>
			<StarBackground />
			<slot />
		</main>

		<footer>
			<p></p>
		</footer>
	</div>
</div>

<style>

</style>
