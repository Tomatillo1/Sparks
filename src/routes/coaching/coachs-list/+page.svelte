<script>
    import DescriptionCoach from "$lib/DescriptionCoach.svelte";
    import {goto} from "$app/navigation";

    const textCoach1 = 'Guillaume saura vous conseiller dans vos relations entre Wise et votre entreprise. Il vous donnera de précieux conseils pour bien appliquer vos exercices dans votre entreprise.';
    const textCoach2 = 'Grâce à son expérience, Gael est un expert sur la mobilité du corps au travail, et saura répondre à toutes vos questions.';
    const textCoach3 = 'Éric a une forte expérience dans la préparation mentale, il pourra vous donner ses conseils afin de vous préparer parfaitement pour atteindre vos objectifs.';
    const textCoach4 = 'Grégory est un ancien médaillé olympique en natation, il saura vous aiguiller sur la maitrise de votre rythme cardiaque et la respiration.Sa grande expertise lui permettra de répondre à tous vos besoins.';
    const textCoach5 = 'Fredryk  est un coach reconnu, il saura vous aider pour répondre à tous vos besoins en sport.';
    const textCoach6 = 'Jean-Christophe est un coach reconnu, il saura vous aider pour répondre à tous vos besoins en sport.';
    const textCoach7 = 'Caroline est une coach reconnue, elle saura vous aider pour répondre à tous vos besoins en sport.';

    function backCoachHome() {
        goto("/coaching")
    }


</script>

<div class="globalBody">
    <img class="back" src="/images/back.png" on:click={backCoachHome}>
    <img class="logo" src="/images/wise-logo.png" alt="wise-logo">
    <h1>A quel coach souhaitez-vous vous adresser ?</h1>
    <DescriptionCoach nameCoach="Guillaume RIVAS" descp={textCoach1} head="/coach/coach-1.jpeg" buttonText="Guillaume" link="-1"/>
    <DescriptionCoach nameCoach="Gaël VILAIN" descp={textCoach2} head="/coach/coach-2.jpeg" buttonText="Gaël" link="-2"/>
    <DescriptionCoach nameCoach="Éric POUSSARD" descp={textCoach3} head="/coach/coach-3.jpeg" buttonText="Éric" link="-3"/>
    <DescriptionCoach nameCoach="Grégory MALLET" descp={textCoach4} head="/coach/coach-4.jpeg" buttonText="Grégory" link="-4"/>
    <DescriptionCoach nameCoach="Fredryk LYHAGEN" descp={textCoach5} head="/coach/coach-5.jpeg" buttonText="Fredryk" link="-5"/>
    <DescriptionCoach nameCoach="Jean-Christophe NORMAND" descp={textCoach6} head="/coach/coach-6.jpeg" buttonText="Jean-Christophe" link="-6"/>
    <DescriptionCoach nameCoach="Caroline MARTIN" descp={textCoach7} head="/coach/coach-7.jpeg" buttonText="Caroline" link="-7"/>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .globalBody {
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
        padding-bottom: 2rem;
        position: relative;
    }

    .logo {
        margin-top: 0.5rem;
        width: 20%;
        aspect-ratio: 1;
    }

    h1 {
        font-family: Poppins, sans-serif;
        font-size: 1.25rem;
        text-align: center;
        color: #41C1BA;
        width: 90%;
        margin: 1rem 0 0 0;
    }

    .back {
        position: absolute;
        top: 1rem;
        left: 1rem;
        width: 7%;
        aspect-ratio: 1;
    }
</style>