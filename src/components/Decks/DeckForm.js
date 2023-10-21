import React, { useState, useEffect } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { createDeck, updateDeck, listDecks } from "../../utils/api/index";

function DeckForm({ deck }) {
  const history = useHistory();
  const { pathname } = useLocation();

  const [isAdd, setIsAdd] = useState(false);
  const [deckInfo, setDeckInfo] = useState({ name: "", description: "" });

  useEffect(() => {
    function editOrAdd() {
      if (pathname.includes("edit")) {
        setDeckInfo({ name: deck.name, description: deck.description });
      } else {
        setIsAdd(true);
      }
    }
    editOrAdd();
  }, [deck, pathname]);

  function handleChange(event) {
    const fieldName = event.target.id;
    const value = event.target.value;
    setDeckInfo({ ...deckInfo, [fieldName]: value });
  }

  async function handleCreate() {
    await createDeck(deckInfo);
    const response = await listDecks();
    const newDeckId = response.reduce((max, item) => (item.id > max ? item.id : max), 0);
    history.push(`/decks/${newDeckId}`);
  }

  function handleUpdate() {
    updateDeck({ id: deck.id, ...deckInfo });
    history.push(`/decks/${deck.id}`);
  }
  return (
    <>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            className="form-control"
            id="name"
            value={deckInfo.name || ""}
            placeholder={!isAdd ? null : "Deck Name"}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            className="form-control"
            id="description"
            rows="3"
            value={deckInfo.description || ""}
            placeholder={!isAdd ? null : "Brief Description of Deck"}
            onChange={handleChange}
          >
            {" "}
          </textarea>
        </div>

        <button
          type="button"
          className="btn btn-secondary mr-1"
          onClick={() => history.push(!isAdd ? `/decks/${deck.id}` : "/")}
        >
          Cancel
        </button>

        <button
          type="button"
          className="btn btn-primary"
          onClick={!isAdd ? handleUpdate : handleCreate}
        >
          Submit
        </button>
      </form>
    </>
  );
}
export default DeckForm;
