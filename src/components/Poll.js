import { connect } from "react-redux"

function Poll({ author, imgSrc, optOne }) {

    return (
        <div className="poll-container">
            <div className="author-info">
                <img src={imgSrc} alt="author" />
                <p>{author}</p>
            </div>

            <p>would you rather:</p>
            <p>{optOne} or...</p>
            <button>Vote</button>
        </div>
    )
}

export default connect()(Poll)