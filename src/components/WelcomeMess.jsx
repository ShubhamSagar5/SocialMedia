
const WelcomeMess = ({onGetPostClick}) => {
    return (
        <center>
            <h1 className="WelMess">There are No Post</h1>
            <button type="button" className="btn btn-primary" onClick={onGetPostClick}>Get Post From Server </button>
        </center>
    )
}

export default WelcomeMess