let FirstComponent = () => {
    
    const colors = ['orange','blue','yellow','green']

    return <div className="windows_logo">
            {colors.map(function (color) {
                return <div style={{backgroundColor: color}} ></div>})}
           </div>

}

ReactDOM.render(<FirstComponent />, document.getElementById('root'))