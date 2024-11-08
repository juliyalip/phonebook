import { Link } from "react-router-dom"

export default function NotFound(){
  
    return(
        <>
        <h2>The page is not found. Go here </h2>
<Link to="/">Go to the Home page</Link>
        </>
    )
}