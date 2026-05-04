import { Link } from "react-router-dom"
function DetailsPage() {

  return (
    <>
      <h1>DetailsPage</h1>
      
      <button><Link to={-1}>go back</Link></button>
    </>
  );
}

export default DetailsPage;
