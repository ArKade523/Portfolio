<script lang="ts">
    import Card from '$lib/components/Card.svelte';
    import Stat from '$lib/components/Stat.svelte';

    import nasa from '$lib/images/nasa.png';
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
                    <p>
                    This page is still in development. Please check back later!
                    </p>

                    <!-- <Card class="card" width={cardWidth}>
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
                        
                    </Card> -->
                </div>
            </div> 
        </div>
    </div>
</section>

<style>
    .body-text {
        grid-column-start: 2;
        grid-column-end: 4;
        margin-top: 5.5rem;
    }

    .card-image {
        width: 50% !important;
        height: auto !important;
    }

    .fixed {
        position: fixed;
        top: 4rem;
        left: 0;
        width: 100%;
    }
</style>