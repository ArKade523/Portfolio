<script lang="ts">
    import { onMount } from 'svelte';
    import VanillaTilt from 'vanilla-tilt';
    
    export let href: string = '#work';
    export let target: string = '';
    
    let card: HTMLElement;

    onMount(() => {
        VanillaTilt.init(card, {
            max: 12,
            speed: 500,
            glare: true,
            'max-glare': 0.2,
        });
    });
</script>

<div class="{$$props.class} card" style={$$props.style} bind:this={card}>
    <a href={href} target={target} rel="noopener noreferrer">
        <div class="card-image">
            <slot name="image"></slot> <!-- Image Slot -->
        </div>
        <div class="card-text">
            <slot name="date"><span class="date">Summer 2023</span></slot> <!-- Date Slot -->
            <slot name="heading"><h3>Software Engineering Internship</h3></slot> <!-- Heading Slot -->
            <slot name="text"><p></p></slot> <!-- Text Slot -->
        </div>
        <div class="card-stats">
            <slot name="stat1"></slot> <!-- Stat 1 Slot -->
            <slot name="stat2"></slot> <!-- Stat 2 Slot -->
            <slot name="stat3"></slot> <!-- Stat 3 Slot -->
        </div>
    </a>
</div>
  
<style>
    .card {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 210px 210px 80px;
        grid-template-areas: "image" "text" "stats";
        width: 300px;
        margin: auto;
        margin-top: 4rem;

        border-radius: 18px;
        background: white;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
        font-family: var(--font-mono);
        text-align: center;

        transition: 0.5s ease;
        cursor: pointer;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-image {
        grid-area: "image";
        background: #000;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-size: cover;
    }

    .card-text {
        grid-area: "text";
        margin: 25px;
    }

    .card-text .date {
        color: #777;
        font-size: 1rem;
    }

    .card-text p {
        color: #777;
        font-size: 1rem;
        margin-top: 15px;
    }

    .card-text h3 {
        color: #111;
        margin-top: 0;
        font-size: 1.8rem;
    }

    .card-stats {
        grid-area: "stats";
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-template-rows: 1fr;

        border-bottom-left-radius: 15px;
        border-bottom-right-radius: 15px;
        background: var(--accent);
    }

    .border {
        border-left: 1px solid #fff;
        border-right: 1px solid #fff;
    }

    a:hover {
        text-decoration: none;
    }

    /* Mobile view */
	@media only screen and (max-width: 768px) {
        .card {
            margin: 2rem 0;
            display: block;
        }

    }
</style>
  