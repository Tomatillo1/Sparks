<script>
    export let togglePopUp;
</script>

<button class="inbox-btn" on:click={togglePopUp}>
    <svg viewBox="0 0 110 135" width="110" height="40">
        <title>noun-bell-6848673-svg</title>
        <path id="Layer" fill-rule="evenodd" class="s0" d="m17.2 80.8c0-3.9 2-6 4.2-8.2 1.7-1.6 3.2-3.4 4.4-5.4q0.8-1.5 1.5-3c1.3-3.2 1.9-6.7 1.9-10.2v-3.2c0-5.5 1.8-10.8 5-15.2 3.3-4.3 7.9-7.5 13.1-9.1 0-4.2 3.4-7.7 7.7-7.7 4.3 0 7.7 3.5 7.7 7.7 5.2 1.6 9.8 4.8 13.1 9.1 3.2 4.4 5 9.7 5 15.2v3.2c0 3.5 0.7 7 2 10.2q0.6 1.6 1.5 3c1.2 2 2.7 3.8 4.4 5.4 2.2 2.2 4.2 4.2 4.2 8.2 0 4.5-1.6 7.3-4.9 8.8-1.4 0.5-2.8 0.8-4.2 0.8h-18c0 5.9-4.8 10.7-10.8 10.7-5.9 0-10.7-4.8-10.7-10.7h-18c-1.4 0-2.9-0.3-4.2-0.8-3.3-1.5-4.9-4.3-4.9-8.8zm44.5 9.6h-13.4c0 3.7 3 6.6 6.7 6.6 3.7 0 6.7-2.9 6.7-6.6zm-6.7-67.3c-1.7-0.1-3.1 1-3.6 2.6q1.5-0.2 3-0.2h1.1q1.5 0 3 0.2c-0.4-1.5-1.9-2.6-3.5-2.6zm-33.8 57.8c0 3.3 1 4.4 2.5 5q1.3 0.5 2.6 0.5h57.3q1.3 0 2.6-0.5c1.5-0.6 2.5-1.7 2.5-5 0-2.2-0.9-3.2-3-5.4-1.9-1.8-3.6-3.9-5-6.2q-1-1.7-1.7-3.5c-1.5-3.7-2.2-7.7-2.2-11.7v-3.3c0-5.6-2.2-11-6.2-15-4-4-9.4-6.3-15.1-6.3h-1c-5.6 0-11.1 2.3-15.1 6.3-4 3.9-6.2 9.4-6.2 15v3.3c0.1 4-0.7 8-2.2 11.7q-0.8 1.8-1.8 3.5c-1.4 2.3-3 4.4-5 6.2-2.1 2.2-3 3.2-3 5.4z"></path>
    </svg>
    <span class="msg-count">0</span>
</button>

<style>
    .inbox-btn {
        width: 50px;
        height: 50px;
        border-radius: 50%;
        border: none;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.082);
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
        background-color: #41C1BA;
        cursor: pointer;
        transition: all 0.3s;
    }
    .inbox-btn svg path {
        fill: white;
    }

    .msg-count {
        position: absolute;
        top: -5px;
        right: -5px;
        background-color: #328DE8;
        border-radius: 50%;
        font-size: 0.7em;
        color: white;
        width: 20px;
        height: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
    }
</style>