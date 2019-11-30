class Counter extends React.Component {

    state = {                         /* initial values of the counter and result */
        count: 0,
        result: this.props.result
    }

    handleMathClick = (type, number = 1) => {  /* 'number' with default value */
    // debugger
    /* maths logic elements: */
        if (type === "subtraction") {                 /* if the type is 'subtraction'... */
            this.setState(prevState => ({
                count: prevState.count + 1,            /* ...change these values */
                result: prevState.result - number
            }))
        } 
        else if (type === "reset") {                   /* if the type is 'reset'... */
            this.setState(prevState => ({
                count: prevState.count + 1,             /* ...change counter */
                result: this.props.result
            }))
        } 
        else if (type === "addition") {                 /* if the type is 'addition'... */
            this.setState(prevState => ({
                count: prevState.count + 1,             /* ...change these values */
                result: prevState.result + number
            }))
        }
    }
    
    render() {
        return (
            <React.Fragment>
                <h1>Basic maths</h1>
                <p>Click any button with a number to see the result of maths operation</p>
                <p>Click 'reset' button to reset maths result</p>
                <p>The number of clicks doesn't reset</p>
          {/* button components: */}
                {/* button for subtraction '10' */}
                <div className="buttonContainer">
                    <MathButton             
                        name="-10"
                        number="10"
                        type="subtraction"
                        click={this.handleMathClick}
                    />
                {/* button for subtraction '1' */}
                    <MathButton             
                        name="-1"
                        number="1"
                        type="subtraction"
                        click={this.handleMathClick}
                    />
                {/* button for reset the counter */}
                    <MathButton             
                        name="reset"
                        type="reset"
                        click={this.handleMathClick}
                    />
                {/* button for addition '1' */}
                    <MathButton             
                        name="+1"
                        number="1"
                        type="addition"
                        click={this.handleMathClick}
                    />
                {/* button for addition '10' */}
                    <MathButton             
                        name="+10"
                        number="10"
                        type="addition"
                        click={this.handleMathClick}
                    />
                </div>
          {/* result panel component: */}
                <ResultPanel 
                    count={this.state.count} 
                    result={this.state.result} 
                />
            </React.Fragment>
        )
    }
}

const MathButton = (props) => {
    const number = parseInt(props.number)
    return (
        <button onClick={ () => props.click(props.type, number) }>{props.name}</button>
    )
}

const ResultPanel = (props) => {
    return (
        <React.Fragment>
            <h2>Click number reached: {props.count}{props.count > 10 ? <span>. Processor overload! Stop clicking immediately!</span> : null}</h2>
            <h2>Result: {props.result}</h2>
        </React.Fragment>
    )
}

const startValue = 0;

ReactDOM.render(
    <Counter result={startValue} />, 
    document.getElementById('root')
);
