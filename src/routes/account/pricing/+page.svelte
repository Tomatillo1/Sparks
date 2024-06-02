<script>
    import {goto} from "$app/navigation";
    import {offerStore} from "$lib/stores/offer.store.js";
    import {loginStore} from "$lib/stores/login.store.js";
    import Loading from "$lib/Loading.svelte";
    import SvgOffer from "$lib/SvgOffer.svelte";
    import NoPayment from "$lib/NoPayment.svelte";

    let wichOffer = $offerStore.offer;
    let defaultOffer = $offerStore.selected;
    let changeCard = $offerStore.card;
    let whatCard = 'Vital';
    let load = false;
    let payment = false;

    function backToAccount() {
        goto("/account")
    }

    function goRight() {
        if (changeCard === 3) {
            changeCard = 1
            whatCard = 'Vital'
        } else {
            changeCard = changeCard + 1;
            if (changeCard === 2) {
                whatCard = 'Neural'
            } else {
                whatCard = 'Wise+'
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
            whatCard = 'Wise+'
        } else {
            changeCard = changeCard - 1;
            if (changeCard === 2) {
                whatCard = 'Neural'
            } else {
                whatCard = 'Vital'
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
        if ($loginStore.payment === '') {
            payment = true
        } else {
            wichOffer = whatCard
            defaultOffer = 'Séléctionnée'
            offerStore.update((old) => ({
                offer: wichOffer,
                selected: defaultOffer,
                card: changeCard,
            }))
        }
    }

    function closePayment() {
        payment = false
    }
</script>

{#if (payment === true)}
    <div class="paymentPop">
        <NoPayment {closePayment}/>
    </div>
{/if}

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
            <img class="arrows-left" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card freeCard">
                <p class="titleWhatOffer">
                    Offre Vital</p>
                <p class="price">12,99 € / mois</p>
                <p class="price">Sans engagement</p>
                <ul class="lists">
                    <li class="list">
                        <SvgOffer/>
                        <span>Accès complet à toutes les données en lien avec le rythme cardiaque</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Historique cardiaque</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Apnée du sommeil</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Historique podométrique</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Nombre de pas</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Hydratation quotidienne</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Accès à toutes les vidéos WISE VITAL</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Communication avec 1 coach</span>
                    </li>
                </ul>
            </div>
            <img class="arrows-right" src="/images/arrow-right.png" on:click={goRight}>
        </div>
        {:else if (changeCard === 2)}
        <div class="offers">
            <img class="arrows-left" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card standardCard">
                <p class="titleWhatOffer">
                    Offre Neural</p>
                <p class="price">17,99 € / mois</p>
                <p class="price">Sans engagement</p>
                <ul class="lists">
                    <li class="list">
                        <SvgOffer/>
                        <span>Accès complet à toutes les données en lien avec la mobilité du corps</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Irrégularité de la marche</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Temps de double appui</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Vitesse de marche</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Accès à toutes les vidéos WISE NEURAL</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Communication avec 1 coach spécialisé</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Suivi 1 fois par trimestre pour un bilan de mobilité</span>
                    </li>
                </ul>
            </div>
            <img class="arrows-right" src="/images/arrow-right.png" on:click={goRight}>
        </div>
    {:else if (changeCard === 3)}
        <div class="offers">
            <img class="arrows-left" src="/images/arrow-left.png" on:click={goLeft}>
            <div class="card premiumCard">
                <p class="titleWhatOffer">
                    Offre Wise+</p>
                <p class="price">29,99 € / mois</p>
                <p class="price">Sans engagement</p>
                <ul class="lists">
                    <li class="list">
                        <SvgOffer/>
                        <span>Offre Vital + Offre Neural</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>L’utilisateur peut communiquer simultanément avec plusieurs coachs</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Fonctionnalités bêta en avant première</span>
                    </li>
                    <li class="list">
                        <SvgOffer/>
                        <span>Suivi régulier 1 à 2 fois par mois avec une équipe de coachs dédiés</span>
                    </li>
                </ul>
            </div>
            <img class="arrows-right" src="/images/arrow-right.png" on:click={goRight}>
        </div>
    {/if}
    <button class="freeAction" on:click={validateSelected}>{defaultOffer}</button>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .global-background {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        position: relative;
        padding-bottom: 2rem;
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
        justify-content: center;
        gap: 0.25rem;
        margin-top: 2rem;
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
        margin-top: 2rem;
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

    .arrows-left, .arrows-right {
        width: 30px;
        height: 40px;
        position: absolute;
    }

    .arrows-left {
        left: 0.5rem;
        top: 23rem;
    }

    .arrows-right {
        right: 0.5rem;
        top: 23rem;
    }

    .loadPop, .paymentPop {
        display: flex;
        width: 100%;
    }
</style>