import { getContext } from "../../../extensions.js";

import { eventSource, event_types } from "../../../../script.js";

eventSource.on(event_types.MESSAGE_RECEIVED, handleIncomingMessage);

const cotext = getContext();

function handleIncomingMessage(data) {
    let mostRecentMessage = getContext.chat[getContext.chat.length - 1];

    if('speechSynthesis' in window){
        let utterance = new SpeechSynthesisUtterance(mostRecentMessage.name + " said something");
        window.speechSynthesis.speak(utterance);
    }
    else {
        console.error("Speech synthesis is not supported in this browser.")
    }
}