import "./AddGameItemForm.css"

import BigCard from "../../../ui/component/Card/BigCard/BigCard";
import AddGameItemFormInput from "./AddGameItemFormInput/AddGameItemFormInput";

const fromAddGamePayload = (payload) => {
    return {
        gameData: {
            date: new Date(payload.date),
            opponentId: parseInt(payload.opponent),
            // TODO make result dynamic
            result: "W 1-0"
        },
        AB: payload.AB,
        H: payload.H,
        BB: payload.BB,
        K: payload.K,
    }
};

const AddGameItemForm = (props) => {

    const handleNewGameSubmitted = (payload) => props
        .onSubmission(
            fromAddGamePayload(payload)
        );

    return <BigCard className="add-game-item-form">
        <AddGameItemFormInput onSubmission={handleNewGameSubmitted} />
    </BigCard>;
}

export default AddGameItemForm;