import "./PlayerPerformanceFormInput.css";

import { FORM_INPUT_COMPONENT } from "../constant";

const PlayerPerformanceFormInput = (props) => {

    const handleInputAtBats = (event) => {
        props.onTextChange(
            event.target.value,
            FORM_INPUT_COMPONENT.AB
        )
    }
    const handleInputHits = (event) => {
        props.onTextChange(
            event.target.value,
            FORM_INPUT_COMPONENT.H
        )
    }
    const handleInputWalks = (event) => {
        props.onTextChange(
            event.target.value,
            FORM_INPUT_COMPONENT.BB
        )
    }
    const handleInputStrikeouts = (event) => {
        props.onTextChange(
            event.target.value,
            FORM_INPUT_COMPONENT.K
        )
    }

    return <div className="player-performance">
        <label>At-Bats</label>
        <input
            type="number" min="0"
            value={props.AB}
            onChange={handleInputAtBats}
        />
        <label>Hits</label>
        <input
            type="number" min="0"
            value={props.H}
            onChange={handleInputHits}
        />
        <label>Walks</label>
        <input
            type="number" min="0"
            value={props.BB}
            onChange={handleInputWalks}
        />
        <label>Strikeouts</label>
        <input
            type="number" min="0"
            value={props.K}
            onChange={handleInputStrikeouts}
        />
    </div>;
}

export default PlayerPerformanceFormInput;