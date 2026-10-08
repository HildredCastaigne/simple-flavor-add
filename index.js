import { getContext } from "../../../extensions.js";

import { eventSource, event_types } from "../../../../script.js";

eventSource.on(event_types.MESSAGE_RECEIVED, handleIncomingMessage);

const context = getContext();
const { Popup } = SillyTavern.getContext();

await Popup.show.text('Info', 'Operation completed successfully.');

function handleIncomingMessage(data) {
    let mostRecentMessage = context.chat[context.chat.length - 1];

    if ('speechSynthesis' in window) {
        let utterance = new SpeechSynthesisUtterance(mostRecentMessage.name + " said something");
        window.speechSynthesis.speak(utterance);
    }
    else {
        console.error("Speech synthesis is not supported in this browser.")
    }

}