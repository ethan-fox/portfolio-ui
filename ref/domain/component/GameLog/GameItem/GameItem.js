import "./GameItem.css";


import BigCard from "../../../../ui/component/Card/BigCard/BigCard";
import GameData from "./GameData/GameData";
import StatLine from "./StatLine/StatLine";

import formattedCalculation from "./util/formattedCalculation"

// Two divs:
// "Game data" -- regardless of the player
// "Player data" -- specific to player performance
// TODO better convention to pass in gameData?
const GameItem = ({props}) => <BigCard className="game-item">
    <GameData {...props.gameData} />
    <StatLine {...{
        playerStats: [
            { type: "AB", value: props.AB },
            { type: "H", value: props.H },
            { type: "BB", value: props.BB },
            { type: "K", value: props.K },
            { type: "OBP", value: formattedCalculation((props.H + props.BB) / (props.AB + props.BB)) },
        ]
    }} />
</BigCard>;

export default GameItem;