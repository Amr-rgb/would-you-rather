import { Link } from "react-router-dom";

export default function NotFound() {

    return (
        <div className="not-found">
            <h1>404</h1>
            <p>this page doesn't exist, go <Link to='/'>Home</Link></p>
        </div>
    )
}