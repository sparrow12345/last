<script>
	import './styles.css';
	import {base} from "$app/paths";
</script>

<div class="app">
	<header>
		<h1>Majed Naser Personal Website</h1>
		<nav>
			<a href="{base}/">Portfolio</a>
			<a href="{base}/about">About</a>
			<a href="{base}/experience">Experience</a>
			<a href="{base}/education">Education</a>
			<a href="{base}/projects">Projects</a>
			<a href="{base}/comic">Comic</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Copyright &copy; 2023 by Software Developer</p>
	</footer>
</div>

<style>
	header {
		display: flex;
		justify-content: space-between;
	}

	nav {
		display: flex;
		justify-content: center;
		--background: rgba(255, 255, 255, 0.7);
	}
	nav a {
		display: flex;
		height: 100%;
		align-items: center;
		padding: 0 0.5rem;
		color: var(--color-text);
		font-weight: 700;
		font-size: 0.8rem;
		text-transform: uppercase;
		letter-spacing: 0.1em;
		text-decoration: none;
		transition: color 0.2s linear;
	}

	a:hover {
		color: var(--color-theme-1);
	}
	
	.app {
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}

	main {
		flex: 1;
		display: flex;
		flex-direction: column;
		padding: 1rem;
		width: 100%;
		max-width: 64rem;
		margin: 0 auto;
		box-sizing: border-box;
	}

	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	@media (min-width: 480px) {
		footer {
			padding: 12px 0;
		}
	}
</style>
