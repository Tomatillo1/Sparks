<script>
    export let sendMessage;
    export let value = '';
</script>
<div class="footer">
    <div class="messageBox">
        <div class="fileUploadWrapper">
            <label for="file">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 337 337">
                    <circle
                            stroke-width="20"
                            stroke="#41C1BA"
                            fill="none"
                            r="158.5"
                            cy="168.5"
                            cx="168.5"
                    ></circle>
                    <path
                            stroke-linecap="round"
                            stroke-width="25"
                            stroke="#41C1BA"
                            d="M167.759 79V259"
                    ></path>
                    <path
                            stroke-linecap="round"
                            stroke-width="25"
                            stroke="#41C1BA"
                            d="M79 167.138H259"
                    ></path>
                </svg>
            </label>
            <input type="file" id="file" name="file"/>
        </div>
        <input required="" placeholder="Message..." type="text" id="messageInput" bind:value/>
        <button id="sendButton" on:click={sendMessage}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 664 663">
                <path
                        fill="white"
                        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
                <path
                        stroke-linejoin="round"
                        stroke-linecap="round"
                        stroke-width="33.67"
                        stroke="#41C1BA"
                        d="M646.293 331.888L17.7538 17.6187L155.245 331.888M646.293 331.888L17.753 646.157L155.245 331.888M646.293 331.888L318.735 330.228L155.245 331.888"
                ></path>
            </svg>
        </button>
    </div>
</div>
<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

    .footer {
        display: flex;
        width: 100%;
        justify-content: center;
        background-color: white;
        position: fixed;
        bottom: 0;
        padding: 0 0 0.5rem 0;

    }

    .messageBox {
        width: fit-content;
        height: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: white;
        padding: 0 15px;
        border-radius: 10px;
        border: 1px solid #41C1BA;
    }

    #file {
        display: none;

    }

    .fileUploadWrapper label {
        cursor: pointer;
        width: fit-content;
        height: fit-content;
        display: flex;
        align-items: center;
        justify-content: center;
        position: relative;
    }

    .fileUploadWrapper label svg {
        height: 18px;
    }

    #messageInput {
        width: 200px;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        padding-left: 10px;
        color: #41C1BA;
        font-family: Poppins, sans-serif;
    }

    #messageInput::placeholder {
        color: #41C1BA;
    }

    #sendButton {
        width: fit-content;
        height: 100%;
        background-color: transparent;
        outline: none;
        border: none;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }

    #sendButton svg {
        height: 18px;
    }
</style>