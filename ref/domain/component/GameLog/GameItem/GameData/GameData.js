import "./GameData.css"

import SmallCard from "../../../../../ui/component/Card/SmallCard/SmallCard"
import { gameResultStyler, resultTileStyler, teamStyler } from "./util/styler";
import { TEAM_ID_TO_INFO } from "./util/team"

const GameData = (props) => <div>
    <SmallCard className="game-data" style={resultTileStyler(props.result)}>
        <div>{props.date.toLocaleDateString('en-us')}</div>
        <SmallCard className="game-data__opponent" style={teamStyler(props.opponentId)}>{TEAM_ID_TO_INFO[props.opponentId].name}</SmallCard>
        <div style={gameResultStyler(props.result)}>{props.result}</div>
    </SmallCard>
</div>;

export default GameData;