import "./GamePerformanceFormInput.css";

import Select from "react-select";

import { FORM_INPUT_COMPONENT, TEAM_SELECT_VALUES } from "../constant";

const GamePerformanceFormInput = (props) => {

    const handleSelectedDate = (event) => {
        props.onTextChange(
            event.target.value,
            FORM_INPUT_COMPONENT.DATE
        )
    }
    const handleSelectedOpponent = (event) => {
        props.onTextChange(
            event.value,
            FORM_INPUT_COMPONENT.OPPONENT
        )
    }

    return <div className="game-performance">
        <label className="game-performance__item">Date</label>
        <input
            className="game-performance__item"
            type="date"
            onChange={handleSelectedDate}
        />
        <label className="game-performance__item">Opponent</label>
        <Select
            className="game-performance__item"
            options={TEAM_SELECT_VALUES}
            onChange={handleSelectedOpponent}
        />
    </div>;
}

export default GamePerformanceFormInput;