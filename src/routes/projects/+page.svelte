<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import Stat from '$lib/components/Stat.svelte';

    import kash from '$lib/images/kash.png';
    import nds from '$lib/images/nds.png';
    import website from '$lib/images/website.png';
	import { onMount } from 'svelte';

    let cardWidth: number = 800;

    onMount(() => {
        const mobileMQ = window.matchMedia('(max-width: 768px)');
        const tabletMQ = window.matchMedia('(max-width: 1024px)');

        if (mobileMQ.matches) {
            cardWidth = 300;
        }

        if (tabletMQ.matches) {
            cardWidth = 500;
        }
    });
</script>

<svelte:head>
	<title>Projects | Kade Angell</title>
	<meta name="description" content="Projects | Kade Angell's Web Portfolio" />
</svelte:head>

<section id="project1">
    <div class="app-container">
        <div class="content">
            <div class="content-grid">
                <div class="title-text fixed">
                    <h1>Projects</h1>
                </div>
                <div class="body-text">

                    <div class="project">
                        <Card class="card" width={800}>
                            <img slot="image" src={kash} alt="kash" />
                            <span slot="date" style="color:#444; font-size: 1rem;">Fall 2023</span>
                            <h2 slot="heading" style="color: #111">Custom Unix shell - kash</h2>
                            <div slot="text">
                                <span class="card-skill">C++</span>
                                <span class="card-skill">Unix</span>
                                <span class="card-skill">Shell</span>

                            </div>
                            <Stat slot="stat1">
                                <div slot="type" class="card-stat-type">Location</div>
                                <div slot="value" class="card-stat-value">Logan, UT</div>
                            </Stat>
                            <Stat slot="stat2">
                                <div slot="type" class="card-stat-type">Time Spent</div>
                                <div slot="value" class="card-stat-value">2 days</div>
                            </Stat>
                            <Stat slot="stat3">
                                <div slot="type" class="card-stat-type">Reason</div>
                                <div slot="value" class="card-stat-value">Weekend Project</div>
                            </Stat>
        
                            <p slot="back-text" class="card-back-text">
                                Built a custom Unix shell in C++ for fun. The shell is called `kash` and is a work in progress, although almost entirely functional.
                                I used the <a href="https://tiswww.case.edu/php/chet/readline/rltop.html">readline</a> library for storing the history of commands, and the execvp() function for executing commands.
                                I built my own parser using an abstract syntax tree.

                                You can view the project <a href="https://github.com/ArKade523/kash">here</a>.
                            </p>
                            
                        </Card>
                    </div>
                    <div class="project">
                        <Card class="card" width={800}>
                            <img slot="image" src={nds} alt="nintendo ds lite" style="max-height: 100%;"/>
                            <span slot="date" style="color:#444; font-size: 1rem;">Spring 2023</span>
                            <h2 slot="heading" style="color: #111">Nintendo DS Game</h2>
                            <div slot="text">
                                <span class="card-skill">C++</span>

                            </div>
                            <Stat slot="stat1">
                                <div slot="type" class="card-stat-type">Location</div>
                                <div slot="value" class="card-stat-value">Logan, UT</div>
                            </Stat>
                            <Stat slot="stat2">
                                <div slot="type" class="card-stat-type">Time Spent</div>
                                <div slot="value" class="card-stat-value">24 hours</div>
                            </Stat>
                            <Stat slot="stat3">
                                <div slot="type" class="card-stat-type">Reason</div>
                                <div slot="value" class="card-stat-value">Hackathon</div>
                            </Stat>
        
                            <p slot="back-text" class="card-back-text">
                                Built a Nintendo DS Game using C++ for a hackathon. I used the LibNDS toolchain to build the game and 
                                GL2D to render the graphics. The game is a simple tower defense game where you have to prevent red
                                blocks from reaching the end of the path. 

                                You can view the project <a href="https://github.com/ArKade523/HackUSU2023">here</a>.
                            </p>
                            
                        </Card>
                    </div>
                    <div class="project">
                        <Card class="card" width={800}>
                            <img slot="image" src={website} alt="website homepage screenshot" style="max-height: 100%;"/>
                            <span slot="date" style="color:#444; font-size: 1rem;">Fall 2023</span>
                            <h2 slot="heading" style="color: #111">This Website</h2>
                            <div slot="text">
                                <span class="card-skill">HTML</span>
                                <span class="card-skill">CSS</span>
                                <span class="card-skill">TypeScript</span>
                                <span class="card-skill">Svelte</span>

                            </div>
                            <Stat slot="stat1">
                                <div slot="type" class="card-stat-type">Location</div>
                                <div slot="value" class="card-stat-value">Logan, UT</div>
                            </Stat>
                            <Stat slot="stat2">
                                <div slot="type" class="card-stat-type">Favorite Part</div>
                                <div slot="value" class="card-stat-value">The Typewriter effect</div>
                            </Stat>
                            <Stat slot="stat3">
                                <div slot="type" class="card-stat-type">Reason</div>
                                <div slot="value" class="card-stat-value">Dynamic Portfolio</div>
                            </Stat>
        
                            <p slot="back-text" class="card-back-text">
                                Built this website using Svelte to display my projects and capabilities. 
                                I used SvelteKit to build the website and GitHub Pages to host it.
                                The stars in the background are rendered using three.js. 

                                You can view the source code <a href="https://github.com/ArKade523/Portfolio">here</a>.
                            </p>
                            
                        </Card>
                    </div>
                </div>
            </div> 
        </div>
    </div>
</section>

<style>
    /* .card-image {
        width: 50% !important;
        height: auto !important;
    } */

</style>