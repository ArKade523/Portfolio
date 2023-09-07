<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="app">
	<div class="content-wrapper">
		<Header />
		
		<main>
			<slot />
		</main>

		<footer>
			<p></p>
		</footer>
	</div>
</div>

<style>

</style>
