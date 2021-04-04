import { connect } from "react-redux"

function Poll({ author, imgSrc, optOne, btn }) {

    return (
        <div className="poll-container">
            <div className="author-info">
                <img className='avatar' src={imgSrc} alt="author" />
                <p>{author}</p>
            </div>

            <div className="poll-content">
                <div className="poll-content-text">
                    <p>would you rather:</p>
                    <p>{optOne} OR...</p>
                </div>
                <button>{btn}</button>
            </div>
        </div>
    )
}

export default connect()(Poll)