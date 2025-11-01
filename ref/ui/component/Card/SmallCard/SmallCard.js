import "./SmallCard.css"

import Card from "../Card"

const SmallCard = (props) => <Card
    className = {`small-card ${props.className}`}
    style = {props.style}>
        {props.children}
    </Card>

export default SmallCard;