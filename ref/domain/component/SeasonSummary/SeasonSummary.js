import "./SeasonSummary.css"

import { useState } from "react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

import BigCard from "../../../ui/component/Card/BigCard/BigCard";

import StatDisplayCard from "./StatDisplayCard/StatDisplayCard";
import YearFilterCard from "./YearFilterCard/YearFilterCard";

import collateSummaryDataFromRaw from "./util/collateSummaryDataFromRaw";

const SeasonSummary = (props) => {

    const [filterYear, setFilterYear] = useState(props.activeYears.at(-1));
    const [displayStat, setDisplayStat] = useState("G");  // Default to 'G' (Games)

    const yearSelectOpts = Array.from(props.activeYears).map(ea => { return { value: ea, label: ea } });

    const handleStatDisplayChange = (value) => {
        setDisplayStat(value);
    }

    const handleYearFilterChange = (value) => {
        setFilterYear(value);
        props.onYearFilterChange(value);
    }

    return <BigCard className="season-summary">
        <div className="season-summary__filter-selects">
            <StatDisplayCard
                onStatChange={handleStatDisplayChange}
            />
            <YearFilterCard
                yearSelectOpts={yearSelectOpts}
                onYearChange={handleYearFilterChange}
            />
        </div>
        <BigCard className="season-summary__chart">
            <ResponsiveContainer width="100%" height={300}>
                <BarChart
                    data={collateSummaryDataFromRaw(props.playerGames[filterYear])}
                    margin={{
                        top: 15,
                        right: 20,
                        left: 0,
                        bottom: 5,
                    }}
                >
                    <CartesianGrid strokeDasharray="2 2" />
                    <XAxis dataKey="month" />
                    <YAxis />
                    <Tooltip />
                    <Bar dataKey={displayStat} fill="#41ba00" />
                </BarChart>
            </ResponsiveContainer>
        </BigCard>
    </BigCard>;
}

export default SeasonSummary;