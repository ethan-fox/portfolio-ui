import "./StatDisplayCard.css"

import Select from "react-select";

import SmallCard from "../../../../ui/component/Card/SmallCard/SmallCard";

import { INITIAL_SUMMARY_DATA } from "../constant";

const StatDisplayCard = (props) => {

    const handleStatSelection = (event) => props.onStatChange(event.value);

    const statSelectOpts = Object.entries(INITIAL_SUMMARY_DATA).map(([x, y]) => {return {value: x, label: x}})

    return <SmallCard className="stat-display-card">
        <div className="stat-display">
            <div style={{
                marginTop: "auto",
                marginBottom: "auto"
            }}>Stat to Display:</div>
            <Select
                options={statSelectOpts}
                defaultValue={statSelectOpts[0]}
                onChange={handleStatSelection}
            />
        </div>
    </SmallCard>;
}

export default StatDisplayCard;