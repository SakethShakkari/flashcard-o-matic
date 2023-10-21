import React, {useState, useEffect} from "react";
import {useHistory, useParams, useLocation} from "react-router-dom";
import { createCard, updateCard, readCard } from "../../utils/api/index";

function CardForm({deck}) {
  
  const history = useHistory();
  const {cardId, deckId} = useParams();
  const {pathname} = useLocation();

  const [isAdd, setIsAdd] = useState(null);
  const [front, setFront] = useState({"front": ""});
  const [back, setBack] = useState({"back": ""});

  useEffect(() => {
    async function fetchCard() {
      const response = await readCard(cardId);
      setFront({"front": response.front});
      setBack({"back": response.back});
    }
    function addOrEdit() {
      if (pathname.includes("new")) {
        setIsAdd(true);
      } else {
        setIsAdd(false);
          fetchCard();
      }
    }
    addOrEdit();
  }, [pathname, cardId])

  function handleFront(event) {
    setFront({...front, "front": event.target.value});
  }

  function handleBack(event) {
    setBack({...back, "back": event.target.value});
  }
 
  function handleCancelAndDone() {
    history.push(`/decks/${deckId}`);
  }

  function handleUpdate() {
    updateCard({"id": cardId, "deckId": deck.id, ...front, ...back});
    history.push(`/decks/${deck.id}`);
  }

  function handleSave() {
    createCard(parseInt(deckId), {...front, ...back});
    setFront({"front": ""});
    setBack({"back": ""});
  }
  
  if (!front || !back) return null;
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="front">Front:</label>
          <textarea className="form-control" id="front" rows="3" placeholder={!isAdd ? null :"Front side of card"} value={front.front} onChange={handleFront}></textarea>
        </div>
        <div className="form-group">
          <label htmlFor="back">Back:</label>
          <textarea className="form-control" id="back" rows="3" placeholder={!isAdd  ? null : "Back side of card"} value={back.back} onChange={handleBack}></textarea>
        </div>
        
        <button 
          type="button"
          className="btn btn-secondary mr-1"
          onClick={handleCancelAndDone}>
          {!isAdd  ? "Cancel" : "Done"}
        </button>

        <button 
          type="button"
          className="btn btn-primary"
          onClick={!isAdd  ? handleUpdate : handleSave}
          >Save
        </button>

      </form>
    </>
  )
}

export default CardForm;