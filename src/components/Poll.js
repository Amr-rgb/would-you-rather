import { Link } from "react-router-dom";

export default function Poll({ id, author, imgSrc, optOne, btn }) {

    return (
        <div className="poll-container">
            <div className="author-info">
                <img className='avatar' src={imgSrc} alt="author" />
                <p>{author}</p>
            </div>

            <div className="poll-content">
                <div className="poll-content-text">
                    <p>would you rather:</p>
                    <p>{optOne.text} OR...</p>
                </div>
                <Link to={`/questions/${id}`}><button>{btn}</button></Link>
            </div>
        </div >
    )
}