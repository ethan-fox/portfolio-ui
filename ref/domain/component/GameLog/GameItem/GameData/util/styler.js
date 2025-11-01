
import { TEAM_ID_TO_INFO } from "./team" 

const resultTileStyler = (gameResult) => { return {backgroundColor: (gameResult.includes("W") ? "#c7ffba" : "#ffabab") } }

const gameResultStyler = (gameResult) => { return {fontWeight: "bold", "color": (gameResult.includes("W") ? "green" : "red")}}

const teamStyler = (opponentId) => {
    const team = TEAM_ID_TO_INFO[opponentId]

    return {
        color: team.textColor,
        backgroundColor: team.primaryColor,
        border: `3px solid ${team.secondaryColor}`
    }
}

export {
    gameResultStyler,
    resultTileStyler,
    teamStyler
}
