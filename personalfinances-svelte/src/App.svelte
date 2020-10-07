<script>
	import Header from './Header.svelte';
	import SideMenu from './SideMenu.svelte';
	import Home from './Home.svelte';
</script>

<div id="container">
	<Header />
	<SideMenu currentPage="Home" />
	<div class="inner">
		<Home />
	</div>
</div>


<style>
	
</style>