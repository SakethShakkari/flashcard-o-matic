import { useEffect, useState } from "react";
import { listDecks, deleteDeck } from "../../utils/api";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";

function DisplayDecks() {
  const [decks, setDecks] = useState([]);
  const history = useHistory();

  useEffect(() => {
    async function fetchDecks() {
      const response = await listDecks();
      setDecks(response);
    }
    fetchDecks();
  }, []);
  const output = decks.map((deck) => {
    const cards = deck.cards;

    function handleDelete(event) {
        if (window.confirm("Are you sure you want to delete this deck?")) {
          deleteDeck(deck.id);
          setDecks(prevDeck => {
            return prevDeck.filter(item => item.id !== deck.id)
          })  
        } else {
          history.push("/");
        }
      }

    return (
      <div className="col-sm-6" key={deck.id}>
        <div className="card">
          <div className="card-body">
            <div className="d-flex justify-content-between">
              <h5 className="card-title">{deck.name}</h5>
              <p>{`${cards.length} cards`}</p>
            </div>
            <p className="card-text">{deck.description}</p>
            <div className="d-flex justify-content-between">
              <div>
                <Link
                  to={`/decks/${deck.id}`}
                  className="btn btn-secondary mr-1"
                >
                  View
                </Link>
                <Link
                  to={`/decks/${deck.id}/study`}
                  className="btn btn-primary"
                >
                  Study
                </Link>
              </div>
              <div>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  });
  return  <div className="row"> {output}</div>;
}

export default DisplayDecks;
