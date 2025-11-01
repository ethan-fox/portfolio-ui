import "./YearFilterCard.css"

import Select from "react-select";

import SmallCard from "../../../../ui/component/Card/SmallCard/SmallCard";

const YearFilterCard = (props) => {

    const handleYearSelection = (event) => props.onYearChange(event.value);

    return <SmallCard className="year-filter-card">
        <div className="year-filter">
            <div style={{
                marginTop: "auto",
                marginBottom: "auto"
            }}>Filter by Year:</div>
            <Select
                options={props.yearSelectOpts.reverse()}
                defaultValue={props.yearSelectOpts[0]}
                onChange={handleYearSelection}
            />
        </div>
    </SmallCard>;
}

export default YearFilterCard;