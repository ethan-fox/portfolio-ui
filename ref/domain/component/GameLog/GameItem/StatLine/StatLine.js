import "./StatLine.css"

import StatTile from "./StatTile/StatTile"

const StatLine = (props) => <div className="stat-line">
    {props.playerStats.map(ea => <StatTile {...ea} />)}
</div>


export default StatLine;