let TextInput = () => {
    return (
        <form>
            <input type="text" />
        </form>
    )
}

let YesNoRadio = () => {
    return (
        <React.Fragment>
        <div>
            <input type="radio" id="yes" name="yes" value="yes" />
            <label for="yes">YES</label>
        </div>
        <div>
            <input type="radio" id="no" name="no" value="no" />
            <label for="no">NO</label>
        </div>
        </React.Fragment>
    )
}

let SubmitButton = () => {
    return (
        <div>
            <input type="submit" />
        </div>
        ) 
}

let Form = () => {
    return (
        <div>
            <TextInput />
            <YesNoRadio />
            <SubmitButton />
        </div>
    )
}


ReactDOM.render(<Form />, document.getElementById('root'))