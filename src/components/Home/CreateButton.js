import { Link } from "react-router-dom/cjs/react-router-dom.min";


function CreateButton()
{
    return <Link to="/decks/new"><button type="button" className="btn btn-secondary">+ Create Deck</button></Link>
}

export default CreateButton;