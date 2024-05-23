import {writable} from "svelte/store";

export const offerStore = writable({
    card: 1,
    offer: "Basique",
    selected: "Séléctionnée",
});