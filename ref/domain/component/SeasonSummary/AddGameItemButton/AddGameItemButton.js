import "./AddGameItemButton.css"

const AddGameItemButton = (props) => {

    return <button
        className={`add-game-item-button ${props.className}`}
        style={props.style}
        onClick={props.onClick}
    >+ Add Game</button>;
}

export default AddGameItemButton;