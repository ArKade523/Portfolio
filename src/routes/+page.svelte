<script lang="ts">
	import Card from './components/Card.svelte';
	import StarBackground from './components/StarBackground.svelte';
	import Stat from './components/Stat.svelte';
	import Typewriter from './components/Typewriter.svelte';

	const texts: string[] = ["Welcome to my website!",
							"I'm a Software Engineer",
							"I'm a Svelte enthusiast",
							"I interned with NASA-JPL"];

	import nasa from '$lib/images/nasa.png';
	import usu from '$lib/images/usu.png';
	import gas from '$lib/images/gas.png';

</script>

<svelte:head>
	<title>Kade Angell</title>
	<meta name="description" content="Kade Angell's Web Portfolio" />
</svelte:head>

<section id="home">
	<div class="app-container">
		<StarBackground />
		<div class="content">
			<div class="main-text">
				<h1>Hey, I'm <span>Kade</span>!</h1>
				<Typewriter toRotate={texts}/>

			</div>
		</div>
	</div>
</section>
<section id="about">
	<div class="app-container">
		<div class="content">
			<div class="main-text">
				<h1>About Me</h1>
			</div>
			<div class="content-grid">
				<div class="info-text">
					<p>
						I'm a Computer Engineering student at Utah State University
						set to graduate in 2025. I like the rapid design element to
						<b>web development</b> and the rigorous testing and validation
						that comes along with <b>flight software development</b>.
						<br />
						<br />
						I'm currently the <b>Flight Software Team Lead</b> for the 
						<b><a href='https://www.usu.edu/physics/gas/projects/gasrats' target="_blank">
						GASRATS</a></b> cubesat in development at USU, where I use the 
						<b><a href="https://nasa.github.io/fprime/" target="_blank">F Prime</a></b> 
						framework.
						<br />
						<br />
						When I'm not at school or work, I enjoy rock climbing,
						reading, and watching TV with my girlfriend.
					</p>
				</div>

			</div>
		</div>
	</div>
</section>
<section id="work">
	<div class="app-container">
		<div class="content">
			<div class="main-text">
				<h1>Work Experience</h1>
			</div>
			<div class="content-grid">
				<Card class="card" href="https://www.jpl.nasa.gov/missions/cadre", target="_blank">
					<img slot="image" class="card-image" src={nasa} alt="NASA Logo" />
					<span slot="date" style="color:#444; font-size: 1rem;">Summer 2023</span>
					<h2 slot="heading" style="color: #111">Software Engineering Internship</h2>
					<div slot="text">
						<span class="skill">C++</span>
						<span class="skill">F Prime</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="stat-value">Pasadena, CA</div>
						<div slot="type" class="stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="stat-value">CADRE</div>
						<div slot="type" class="stat-type">Mission</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="stat-value">NASA-JPL</div>
						<div slot="type" class="stat-type">Employer</div>
					</Stat>
					
				</Card>
				<Card class="card">
					<img slot="image" class="card-image" src={usu} alt="USU Logo" style="width: 76%" />
					<span slot="date" style="color:#444; font-size: 1rem;">February 2022 - Present</span>
					<h2 slot="heading" style="color: #111">IT Administrator</h2>
					<div slot="text">
						<span class="skill">Servers</span>
						<span class="skill">Web Design</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="stat-value">Logan, UT</div>
						<div slot="type" class="stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="stat-value">Math</div>
						<div slot="type" class="stat-type">Department</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="stat-value">USU</div>
						<div slot="type" class="stat-type">Employer</div>
					</Stat>
					
				</Card>
				<Card class="card">
					<img slot="image" class="card-image gas" src={gas} alt="GAS Logo"/>
					<span slot="date" style="color:#444; font-size: 1rem;">January 2023 - Present</span>
					<h2 slot="heading" style="color: #111">Flight Software Team Lead</h2>
					<div slot="text">
						<span class="skill">C++</span>
						<span class="skill">F Prime</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="stat-value">Logan, UT</div>
						<div slot="type" class="stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="stat-value">GASRATS</div>
						<div slot="type" class="stat-type">Mission</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="stat-value">USU GAS</div>
						<div slot="type" class="stat-type">Team</div>
					</Stat>
					
				</Card>
			</div>
		</div>
	</div>
</section>

<style>
	section {
		min-height: 100vh;
		height: auto;
		max-width: 100vw;
		width: 100%;
		position: sticky;
	}

	.app-container {
		position: relative;
		width: 100%;
		height: 100%;
	}

	.content {
		position: relative;
		top: 0;
		left: 0;
		z-index: 1;
		width: 100%;
	}
	
	h1 {
		font-size: 4rem;
		color: #fff;
		margin-bottom: 0;
		font-family: var(--font-mono);
		text-align: left;
		position: sticky;
		top: 0;
		z-index: 2;
	}

	h1 span {
		background: linear-gradient(120deg, var(--accent), var(--color-text), var(--accent));
		background-clip: text;
		background-size: 200% 100%;
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		transition: background-position 0.5s ease-in-out;
	}

	h1 span:hover {
		background-position: 100% 0;
	}

	.main-text {
		margin-top: 0;
		position: relative;
		top: 6rem;
		left: 0vw;
		width: 40rem;
		transform: translate(0%, -50%);
		font-size: 4rem;
		font-weight: 700;
		color: #fff;
		margin-left: 2rem;
	}

	#home > .app-container > .content > .main-text {
		top: 50vh;
	}

	p {
		font-size: 1.5rem;
		color: #fff;
		margin-bottom: 0;
		font-family: var(--font-mono);
		text-align: left;
		padding: 1rem;
	}

	p > b {
		color: var(--accent);
	}

	p > b > a {
		color: var(--accent);
		text-decoration: underline;
	}

	p > b > a:hover {
		text-decoration: none;
	}

	.content-grid {
		display: grid;
		grid-template-columns: 1fr 1fr 1fr;
		grid-template-rows: 1fr;
	}
	
	.info-text {
		grid-column-start: 2;
		grid-column-end: 4;
	}

	.card-image {
		width: 100%;
		height: auto;
	}

	.gas {
		margin-top: 60px;
	}

	.stat-value {
		font-size: 0.7rem;
	}

	.stat-type {
		font-size: 0.5rem;
		text-transform:uppercase; 
		font-weight: bold;
	}

	.skill {
		background: #44dd88;
		font-size: 0.8rem;
		color: #fff;
		padding: 0.5rem;
		border-radius: 2rem;
		margin: 0.5rem;
	}

	/* Tablet view */
	@media only screen and (max-width: 1024px) {
		.content-grid {
			grid-template-columns: 1fr 1fr;
			grid-template-rows: 1fr;
		}

	}

	/* Mobile view */
	@media only screen and (max-width: 768px) {
		section {
			min-height: 100vh;
			height: auto;
			padding: 1rem;
		}

		h1 {
			font-size: 2rem;
		}

		.main-text {
			font-size: 1.5rem;
			width: auto;
			padding: 0 1rem;
			margin-left: 0;
			top: 3rem;
		}

		p {
			max-width: 80vw;
			font-size: 1.2rem;
			padding: 0.5rem;
		}

		.info-text {
			grid-column-start: 1;
			padding: 0 0.5rem;
		}

		.content-grid {
			display: flex;
			flex-direction: column;
			width: 100%;
			align-items: center;
		}

		.gas {
			margin-top: 10px;
		}

	}
</style>