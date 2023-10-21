import { Link } from "react-router-dom/cjs/react-router-dom.min";
import CreateButton from "./CreateButton";
import DisplayDecks from "./DisplayDecks";
function Home()
{

    return (<>
    <div>
      <CreateButton />
      <DisplayDecks />
    </div>

    </>);
}
export default Home;