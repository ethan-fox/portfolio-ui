import * as _ from "lodash";

import { MONTH_VALUE_TO_NAME, INITIAL_SUMMARY_DATA } from "../constant";

/* Generate mapping of stats per-month. Final shape:
    {
        "0": { G, AB, ... }
        "1": { G, AB, ... }
        ...
    }
*/
const collateSummaryDataFromRaw = (rawData) => {

    const summaryByMonth = {
        ..._.range(0, 12).map(i => {
            return {
                month: MONTH_VALUE_TO_NAME[i],
                ...INITIAL_SUMMARY_DATA
            }
        })
    };

    console.log('rd', rawData)

    rawData.forEach(game => {
        const monthToUpdate = summaryByMonth[game.gameData.date.getMonth()+1]
        // gamesForMonth.forEach(game => {
            monthToUpdate.G += 1
            monthToUpdate.H += game.H
            monthToUpdate.AB += game.AB
            monthToUpdate.BB += game.BB
            monthToUpdate.K += game.K
        // });
    });

    return _.range(3, 11).map(i => summaryByMonth[i]);
}

export default collateSummaryDataFromRaw;