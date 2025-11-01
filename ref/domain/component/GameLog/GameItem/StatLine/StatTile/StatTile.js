import "./StatTile.css"

const StatTile = (props) => <div className="stat-tile">
    <div className="stat-tile__type">{props.type}</div>
    <div className="stat-tile__value">{props.value}</div>
</div>


export default StatTile;