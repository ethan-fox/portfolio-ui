import * as _ from "lodash"

import { TEAM_ID_TO_INFO } from "../../GameLog/GameItem/GameData/util/team"

const FORM_INPUT_COMPONENT = {
    DATE: "DATE",
    OPPONENT: "OPPONENT",
    AB: "AB",
    H: "H",
    BB: "BB",
    K: "K"
    
};

// TODO LMAO this is weird
const TEAM_SELECT_VALUES = _.range(0, 6).map((i) => { return { value: i, label: TEAM_ID_TO_INFO[i].name } })

export {
    FORM_INPUT_COMPONENT,
    TEAM_SELECT_VALUES
};