import "./AddGameItemFormInput.css";

import { useState } from "react";

import GamePerformanceFormInput from "./GamePerformanceFormInput/GamePerformanceFormInput";
import PlayerPerformanceFormInput from "./PlayerPerformanceFormInput/PlayerPerformanceFormInput";

import { FORM_INPUT_COMPONENT } from "./constant";

const AddGameItemFormInput = (props) => {

    const [selectedDate, setSelectedDate] = useState('');
    const [selectedOpponent, setSelectedOpponent] = useState('');
    const [inputAtBats, setInputAtBats] = useState('');
    const [inputHits, setInputHits] = useState('');
    const [inputWalks, setInputWalks] = useState('');
    const [inputStrikeouts, setInputStrikeouts] = useState('');

    const handleFormInput = (value, type) => {
        switch (type) {
            case FORM_INPUT_COMPONENT.DATE:
                setSelectedDate(value);
                break;
            case FORM_INPUT_COMPONENT.OPPONENT:
                setSelectedOpponent(value);
                break;
            case FORM_INPUT_COMPONENT.AB:
                setInputAtBats(value);
                break;
            case FORM_INPUT_COMPONENT.H:
                setInputHits(value);
                break;
            case FORM_INPUT_COMPONENT.BB:
                setInputWalks(value);
                break;
            case FORM_INPUT_COMPONENT.K:
                setInputStrikeouts(value);
                break;
            default:
                // Worst case, we don't do anything.
                // We have a bunch of safeguards in
                //  place this shouldn't be an issue.
                break;
        }
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        const payload = {
            date: selectedDate,
            opponent: selectedOpponent,
            AB: inputAtBats,
            H: inputHits,
            BB: inputWalks,
            K: inputStrikeouts
        };

        props.onSubmission(payload);

        setInputAtBats('');
        setInputHits('');
        setInputWalks('');
        setInputStrikeouts('');
    }

    return <form onSubmit={handleSubmit}>
        <div className="add-game-item">
            <GamePerformanceFormInput
                onTextChange={handleFormInput}
            />
            <PlayerPerformanceFormInput
                onTextChange={handleFormInput}
                AB={inputAtBats}
                H={inputHits}
                BB={inputWalks}
                K={inputStrikeouts}
            />
            <div className="termination-buttons">
                <button>Cancel</button>
                <button>Submit {">"}</button>
            </div>
        </div>
    </form>;
}

export default AddGameItemFormInput;