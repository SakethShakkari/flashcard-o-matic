import Breadcrumb from "./Breadcrumb";
import DeckForm from "../DeckForm";
function CreateDeck(){
    return (
        <>
          <Breadcrumb />
          <h1>Create Deck</h1>
          <DeckForm />
        </>
    )
}
export default CreateDeck;