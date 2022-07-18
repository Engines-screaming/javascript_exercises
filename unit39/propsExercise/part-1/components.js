
const FirstComponent = () => {
    return <h1>My first component</h1>
}

const NamedComponent = (props) => {
    return <p>My name is {props.name}</p>
}

const App = (props) => {
    return (
        <div>
            <FirstComponent/>
            <NamedComponent name="karl"/>
        </div>
    )
    
}

ReactDOM.render(
    <App/>,
    document.getElementById("root")
)