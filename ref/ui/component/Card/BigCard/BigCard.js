import "./BigCard.css"

import Card from "../Card"

const BigCard = (props) => <Card
    className = {`big-card ${props.className}`}
    style = {props.style}>
        {props.children}
    </Card>

export default BigCard;