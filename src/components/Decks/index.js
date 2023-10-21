import { Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Study from "./Study";
import NewCard from "./NewCard";
import DisplayDeck from "./DisplayDeck";
import EditDeck from "./EditDeck";
import EditCard from "./EditCard";
import CreateDeck from "./Create/CreateDeck";

function Decks() {
  return (
    <>
      <Switch>
        <Route path="/decks/:deckId/study">
          <Study />
        </Route>
        
        <Route path="/decks/new">
          <CreateDeck />
        </Route>
        
        <Route path="/decks/:deckId">
          <DisplayDeck />
        </Route>
        
        <Route path="/decks/:deckId/edit">
          <EditDeck />
        </Route>
        
        <Route path="/decks/:deckId/cards/new">
          <NewCard />
        </Route>
        
        <Route path="/decks/:deckId/cards/:cardId/edit">
          <EditCard />
        </Route>
        
      </Switch>
    </>
  );
}

export default Decks;
