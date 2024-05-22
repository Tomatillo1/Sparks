<script>
export let titleService;
export let textService;
</script>

<div class="globalService">
    <h1>{titleService}</h1>
    <p>{textService}</p>
</div>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    h1 {
        font-family: Poppins, sans-serif;
        font-size: 1.5rem;
        color: #41C1BA;
        margin: 0 0 1rem 0;
    }

    p {
        font-family: Poppins, sans-serif;
        font-size: 1rem;
        color: #41C1BA;
        text-align: center;
        width: 85%;
        margin: 0;
    }

    .globalService {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
</style>