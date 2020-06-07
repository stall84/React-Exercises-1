let ListGroupItem = (props) => {
    return (
    <li className="list-group-item">{props.text}</li>
    )
}

let ListGroup = () => {
    return (
    <ul className="list-group">
        <ListGroupItem text="Text Stuff 1"/>
        <ListGroupItem text="Text New Stuff 2"/>
        <ListGroupItem text="Text Newer Stuff 3"/>
        <ListGroupItem text="Text Even Newer Stuff 4"/>
    </ul>
    )
}


ReactDOM.render(<ListGroup />, document.getElementById('root'))