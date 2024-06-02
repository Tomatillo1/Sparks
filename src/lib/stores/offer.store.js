import {writable} from "svelte/store";

export const offerStore = writable({
    card: 3,
    offer: "Wise+",
    selected: "Séléctionnée",
});