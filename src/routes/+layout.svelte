<script>
	import Header from './Header.svelte';
	import StarBackground from '$lib/components/StarBackground.svelte';
	import Footer from './Footer.svelte';
	import './general-styles.css';
	import './card-styles.css';
	import Logo from '$lib/images/Logo.svg';
</script>

<svelte:head>
	<link rel="favicon" type="image/svg+xml" href={Logo} />
</svelte:head>

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
