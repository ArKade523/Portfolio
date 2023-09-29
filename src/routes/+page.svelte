<script lang="ts">
	import Card from '$lib/components/Card.svelte';
	import Stat from '$lib/components/Stat.svelte';
	import Typewriter from '$lib/components/Typewriter.svelte';

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
	<meta name="description" content="Home | Kade Angell's Web Portfolio" />
</svelte:head>

<section id="home">
	<div class="app-container">
		<div class="content">
			<div class="title-text">
				<h1>Hey, I'm <span>Kade</span>!</h1>
				<Typewriter toRotate={texts}/>

			</div>
		</div>
	</div>
</section>
<section id="about">
	<div class="app-container">
		<div class="content">
			<div class="title-text">
				<h1>About Me</h1>
			</div>
			<div class="content-grid">
				<div class="body-text">
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
			<div class="title-text">
				<h1>Work Experience</h1>
			</div>
			<div class="content-grid">
				<Card class="card">
					<img slot="image" class="card-image" src={nasa} alt="NASA Logo" />
					<span slot="date" style="color:#444; font-size: 1rem;">Summer 2023</span>
					<h2 slot="heading" style="color: #111">Software Engineering Internship</h2>
					<div slot="text">
						<span class="card-skill">C++</span>
						<span class="card-skill">F Prime</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="card-stat-value">Pasadena, CA</div>
						<div slot="type" class="card-stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="card-stat-value"><a href="https://www.jpl.nasa.gov/missions/cadre" target="_blank">CADRE</a></div>
						<div slot="type" class="card-stat-type">Mission</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="card-stat-value">NASA-JPL</div>
						<div slot="type" class="card-stat-type">Employer</div>
					</Stat>

					<p slot="back-text" class="card-back-text">
						Worked on the <a href="https://www.jpl.nasa.gov/missions/cadre">CADRE</a> mission
						developing flight software using the <a href="https://nasa.github.io/fprime/">F Prime</a> framework.
					</p>
					
				</Card>
				<Card class="card">
					<img slot="image" class="card-image" src={usu} alt="USU Logo" style="width: 76%" />
					<span slot="date" style="color:#444; font-size: 1rem;">February 2022 - Present</span>
					<h2 slot="heading" style="color: #111">IT Administrator</h2>
					<div slot="text">
						<span class="card-skill">Servers</span>
						<span class="card-skill">Web Design</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="card-stat-value">Logan, UT</div>
						<div slot="type" class="card-stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="card-stat-value">Math</div>
						<div slot="type" class="card-stat-type">Department</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="card-stat-value">USU</div>
						<div slot="type" class="card-stat-type">Employer</div>
					</Stat>

					<p slot="back-text" class="card-back-text">
						Provide IT support for the Math Department at USU.
						Designed the <a href="https://math.usu.edu">Math Department Website</a>.
					</p>
					
				</Card>
				<Card class="card">
					<img slot="image" class="card-image gas" src={gas} alt="GAS Logo"/>
					<span slot="date" style="color:#444; font-size: 1rem;">January 2023 - Present</span>
					<h2 slot="heading" style="color: #111">Flight Software Team Lead</h2>
					<div slot="text">
						<span class="card-skill">C++</span>
						<span class="card-skill">F Prime</span>
					</div>
					<Stat slot="stat1">
						<div slot="value" class="card-stat-value">Logan, UT</div>
						<div slot="type" class="card-stat-type">Location</div>
					</Stat>
					<Stat slot="stat2">
						<div slot="value" class="card-stat-value">GASRATS</div>
						<div slot="type" class="card-stat-type">Mission</div>
					</Stat>
					<Stat slot="stat3">
						<div slot="value" class="card-stat-value">USU GAS</div>
						<div slot="type" class="card-stat-type">Team</div>
					</Stat>

					<p slot="back-text" class="card-back-text">
						Led the Flight Software team for the <a href="https://www.usu.edu/physics/gas/projects/gasrats">GASRATS</a> cubesat.
						Developed using the <a href="https://nasa.github.io/fprime/" style="white-space: nowrap;">F Prime</a> framework.
					</p>
					
				</Card>
			</div>
		</div>
	</div>
</section>

<style>
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

	h2 {
		font-size: 1rem;
	}

	#home > .app-container > .content > .title-text {
		top: 50vh;
	}
	
	.body-text {
		grid-column-start: 2;
		grid-column-end: 4;
	}

	/* Tablet view */
	@media only screen and (max-width: 1024px) {

	}

	/* Mobile view */
	@media only screen and (max-width: 768px) {

		.body-text {
			grid-column-start: 1;
			padding: 0 0.5rem;
		}

		.gas {
			margin-top: 10px;
		}

	}
</style>