const Tweet = (props) => {
    return (
        <div name="tweetContainer">
            <p>Username: {props.username}</p>
            <p>Name: {props.name}</p>
            <p>Message: {props.message}</p>
        </div>
    )
}

const App = () => {
    return (
        <div>
            <Tweet username="karl425" name="karl" message="hello world" />
        </div>
    )
}

ReactDOM.render(<App/>, document.getElementById("root")) ;