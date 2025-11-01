import "./GameLog.css"

import BigCard from "../../../ui/component/Card/BigCard/BigCard";
import GameItem from "./GameItem/GameItem";

const GameLog = (props) => <BigCard className="game-log">
    {props.playerGames.map(gameInfo => <GameItem {...gameInfo} />)}
</BigCard>


export default GameLog;