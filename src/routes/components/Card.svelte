<script lang="ts">
    import { onMount } from 'svelte';
    import VanillaTilt from 'vanilla-tilt';
    
    let card: HTMLElement;
    let flip: boolean = false;

    const flipCard = () => {
        flip = !flip;
        card.classList.toggle('flipped');
    }

    onMount(() => {
        // VanillaTilt.init(card, {
        //     max: 12,
        //     speed: 500,
        //     glare: true,
        //     'max-glare': 0.2,
        // });
    });
</script>

<div class="{$$props.class} card" style={$$props.style} bind:this={card}>
    <div class="card-inner">
        <div class="card-front">
            <div class="card-image">
                <slot name="image"></slot> <!-- Image Slot -->
            </div>
            <div class="card-text">
                <slot name="date"><span class="date">Summer 2023</span></slot> <!-- Date Slot -->
                <slot name="heading"><h3>Software Engineering Internship</h3></slot> <!-- Heading Slot -->
                <slot name="text"><p></p></slot> <!-- Text Slot -->
            </div>
            <div class="button-wrapper">
                <button on:click={flipCard}>Flip Card</button>
            </div>
            <div class="card-stats">
                <slot name="stat1"></slot> <!-- Stat 1 Slot -->
                <slot name="stat2"></slot> <!-- Stat 2 Slot -->
                <slot name="stat3"></slot> <!-- Stat 3 Slot -->
            </div>
        </div>  
        <div class="card-back">
            <div class="card-image">
                <slot name="image" class="image-back"></slot>
            </div>
            <div class="card-text">
                <slot name="heading"><h3>Software Engineering Internship</h3></slot> <!-- Heading Slot -->
                <slot name="back-text" class="back-text"><p>Test</p></slot>
            </div>
            <div class="button-wrapper">
                <button on:click={flipCard}>Flip Card</button>
            </div>
            <div class="card-stats">
                <slot name="stat1"></slot> <!-- Stat 1 Slot -->
                <slot name="stat2"></slot> <!-- Stat 2 Slot -->
                <slot name="stat3"></slot> <!-- Stat 3 Slot -->
            </div>
        </div>
    </div>
</div>
  
<style>
    .card {
        display: block;
        width: 300px;
        margin: auto;
        margin-top: 4rem;

        height: calc(210px + 210px + 30px + 80px);

        border-radius: 18px;
        box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.9);
        font-family: var(--font-mono);
        text-align: center;

        transition: 0.5s ease;
    }

    .card:hover {
        transform: scale(1.05);
    }

    .card-inner, .card-front, .card-back {
        width: 100%;

    }

    .card-front {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 210px 210px 50px 60px;
        grid-template-areas: "image" "text" "stats";
        background: white;
        border-radius: 18px;
    }

    .card-back {
        display: grid;
        grid-template-columns: 300px;
        grid-template-rows: 210PX 210px 50px 60px;

        background: white;
        border-radius: 18px;
    }

    .card-image {
        grid-area: "image";
        background: #000;
        border-top-left-radius: 15px;
        border-top-right-radius: 15px;
        background-size: cover;
    }

    .image-back {
        height: 100px;
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

    .button-wrapper {
        grid-area: "button";
        display: flex;
        align-items: center;
        justify-content: center;
    }

    button {
        background: var(--green-highlight);
        color: white;
        border: none;
        border-radius: 2rem;
        padding: 10px;
        font-size: 0.6rem;
        cursor: pointer;
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

    .card-inner {
        transform-style: preserve-3d;
        transition: transform 0.5s;
    }

    .flipped .card-inner {
        transform: rotateY(180deg);
    }

    .card-front,
    .card-back {
        backface-visibility: hidden;
        position: absolute;
        top: 0;
        left: 0;
    }

    .card-back {
        transform: rotateY(180deg);
    }

    /* Mobile view */
	@media only screen and (max-width: 768px) {
        .card {
            margin: 2rem 0;
            display: block;
        }

    }
</style>
  