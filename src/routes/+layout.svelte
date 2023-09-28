<script>
	import Header from './Header.svelte';
	import StarBackground from '$lib/components/StarBackground.svelte';
	import Footer from './Footer.svelte';
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
			<Footer />
		</footer>
	</div>
</div>

<style>

</style>
