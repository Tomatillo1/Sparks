<script>
    import {goto} from "$app/navigation";
    import {offerStore} from "$lib/stores/offer.store.js";
    import Loading from "$lib/Loading.svelte";

    let wichOffer = $offerStore.offer;
    let defaultOffer = $offerStore.selected;
    let changeCard = $offerStore.card;
    let whatCard = 'Basique';
    let load = false;

    function backToAccount() {
        goto("/account")
    }

    function goRight() {
        if (changeCard === 3) {
            changeCard = 1
            whatCard = 'Basique'
        } else {
            changeCard = changeCard + 1;
            if (changeCard === 2) {
                whatCard = 'Standard'
            } else {
                whatCard = 'Premium'
            }
        }
        if (wichOffer !== whatCard) {
            defaultOffer = 'Choisir cette offre'
        } else {
            defaultOffer = 'Séléctionnée'
        }

    }

    function goLeft() {
        if (changeCard === 1) {
            changeCard = 3
            whatCard = 'Premium'
        } else {
            changeCard = changeCard - 1;
            if (changeCard === 2) {
                whatCard = 'Standard'
            } else {
                whatCard = 'Basique'
            }
        }
        if (wichOffer !== whatCard) {
            defaultOffer = 'Choisir cette offre'
        } else {
            defaultOffer = 'Séléctionnée'
        }
    }

    function validateSelected() {
        load = true;
        setTimeout(changeOffer, 1000)
    }

    function changeOffer() {
        load = false
        wichOffer = whatCard
        defaultOffer = 'Séléctionnée'
        offerStore.update((old) => ({
            offer: wichOffer,
            selected: defaultOffer,
            card: changeCard,
        }))
    }

</script>
{#if (load === true)}
    <div class="loadPop">
        <Loading/>
    </div>
{/if}

<div class="global-background">
    <img class="back" src="/images/back.png" on:click={backToAccount}>
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <div class="wichOffer">
        <h1 class="offerTitle">Offre actuelle</h1>
        <p class="wichOfferText">{wichOffer}</p>
    </div>
    {#if (changeCard === 1)}
        <div class="offers">
            <img class="arrows" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card freeCard">
                <p class="titleWhatOffer">
                    Offre Basique</p>
                <p class="price">Gratuit</p>
                <ul class="lists">
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Fréquence cardiaque sur les deux dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Podomètre et historique de pas des 2 dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Accès à certaines vidéos de présentation des exercices.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Présentation de tous les services de WISE Neural et Vital.</span>
                    </li>
                </ul>
            </div>
            <img class="arrows" src="/images/arrow-right.png" on:click={goRight}>
        </div>
        {:else if (changeCard === 2)}
        <div class="offers">
            <img class="arrows" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card standardCard">
                <p class="titleWhatOffer">
                    Offre Basique</p>
                <p class="price">Gratuit</p>
                <ul class="lists">
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Fréquence cardiaque sur les deux dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Podomètre et historique de pas des 2 dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Accès à certaines vidéos de présentation des exercices.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Présentation de tous les services de WISE Neural et Vital.</span>
                    </li>
                </ul>
            </div>
            <img class="arrows" src="/images/arrow-right.png" on:click={goRight}>
        </div>
    {:else if (changeCard === 3)}
        <div class="offers">
            <img class="arrows" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card premiumCard">
                <p class="titleWhatOffer">
                    Offre Basique</p>
                <p class="price">Gratuit</p>
                <ul class="lists">
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Fréquence cardiaque sur les deux dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Podomètre et historique de pas des 2 dernières semaines.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Accès à certaines vidéos de présentation des exercices.</span>
                    </li>
                    <li class="list">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <g stroke-width="0" id="SVGRepo_bgCarrier"></g>
                            <g stroke-linejoin="round" stroke-linecap="round" id="SVGRepo_tracerCarrier"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path fill="#ffffff"
                                      d="M21.5821 5.54289C21.9726 5.93342 21.9726 6.56658 21.5821 6.95711L10.2526 18.2867C9.86452 18.6747 9.23627 18.6775 8.84475 18.293L2.29929 11.8644C1.90527 11.4774 1.89956 10.8443 2.28655 10.4503C2.67354 10.0562 3.30668 10.0505 3.70071 10.4375L9.53911 16.1717L20.1679 5.54289C20.5584 5.15237 21.1916 5.15237 21.5821 5.54289Z"
                                      clip-rule="evenodd" fill-rule="evenodd"></path>
                            </g>
                        </svg>
                        <span>Présentation de tous les services de WISE Neural et Vital.</span>
                    </li>
                </ul>
            </div>
            <img class="arrows" src="/images/arrow-right.png" on:click={goRight}>
        </div>
    {/if}
    <button class="freeAction" on:click={validateSelected}>{defaultOffer}</button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .global-background {
        width: 100%;
        height: 100svh;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
    }

    .logo {
        width: 20%;
        aspect-ratio: 1;
        margin-top: 1rem;
    }

    .back {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 7%;
        aspect-ratio: 1;
    }

    .offerTitle, .wichOfferText {
        color: #41C1BA;
        text-align: center;
        font-family: Poppins, sans-serif;
        margin: 0;
    }

    .offerTitle {
        font-size: 1.75rem;
        margin-top: 0.5rem;
    }

    .wichOfferText {
        font-size: 1.5rem;
    }

    .offers {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        height: 65%;
        gap: 0.25rem;
    }

    .card {
        width: 74%;
        display: flex;
        flex-direction: column;
        border-radius: 18px;
        padding: 1rem;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
        box-sizing: border-box;
    }

    .freeCard {
        background-color: #41C1BA;
    }

    .standardCard {
        background-color: #328DE8;
    }

    .premiumCard {
        background-color: #EEBA2B;
    }

    .titleWhatOffer {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        font-weight: 600;
        color: white;
        margin: 0;
        text-align: center;
    }

    .lists {
        margin-top: 1.5rem;
        display: flex;
        flex-direction: column;
        grid-row-gap: 0.75rem;
        row-gap: 0.75rem;
        line-height: 1.25rem;
        color: white;
        font-family: Poppins, sans-serif;
        font-size: 0.75rem;
    }

    .list {
        display: flex;
        align-items: center;
    }

    .list svg {
        height: 1rem;
        width: 1rem;
    }

    .list span {
        margin-left: 1rem;
    }

    .freeAction {
        width: 74%;
        border: 1px solid #41C1BA;
        border-radius: 18px;
        background-color: #41C1BA;
        text-align: center;
        font-size: 1rem;
        color: white;
        padding: 0.5rem;
        box-shadow: 0 0 25px rgba(0, 0, 0, 0.3);
    }

    ul {
        padding: 0;
    }

    .price {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        color: white;
        margin: 0;
        text-align: center;
    }

    .arrows {
        width: 30px;
        height: 40px;
    }

    .loadPop {
        display: flex;
        width: 100%;
    }
</style>