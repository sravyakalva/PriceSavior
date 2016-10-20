/**
 * Created by kikovinh on 10/20/2016.
 */

var TimerExample = React.createClass({

    getInitialState: function(){

        // This is called before our render function. The object that is
        // returned is assigned to this.state, so we can use it later.

        return { elapsed: 0 };
    },

    componentDidMount: function(){

        // componentDidMount is called by react when the component
        // has been rendered on the page. We can set the interval here:

        this.timer = setInterval(this.tick, 50);
    },

    componentWillUnmount: function(){

        // This method is called immediately before the component is removed
        // from the page and destroyed. We can clear the interval here:

        clearInterval(this.timer);
    },

    tick: function(){

        // This function is called every 50 ms. It updates the
        // elapsed counter. Calling setState causes the component to be re-rendered

        this.setState({elapsed: new Date() - this.props.start});
    },

    render: function() {

        var elapsed = Math.round(this.state.elapsed / 100);

        // This will give a number with one digit after the decimal dot (xx.x):
        var seconds = (elapsed / 10).toFixed(1);

        // Although we return an entire <p> element, react will smartly update
        // only the changed parts, which contain the seconds variable.

        return <p>Your have been on this page for <b>{seconds} seconds</b> ago.</p>;
    }
});


ReactDOM.render(
    <TimerExample start={Date.now()} />,
    document.getElementById('Timer')
);


//Creates the button
var FashionAdviceButton= React.createClass({
    render: function() {
        return (
            <div>
                <div className="prompt">
                    Fashion Tip of the Day
                </div>
                <br/>
                <button onClick={this.props.onMagicClick}>Find out!</button>
            </div>
        );
    }
});

//Creates the pop up
var Advice = React.createClass({
    performMagic: function() {
        alert('Be a minimalist when it comes to jewelry. Much easier for them to stand out');
    },

    render: function() {
        return (
            <div>
                <FashionAdviceButton onMagicClick={this.performMagic} />
                <br/>
                <img src="http://g01.a.alicdn.com/kf/HTB1PtZpKFXXXXckXXXXq6xXFXXXF.jpg"/>
            </div>
        );
    }
});


//Sends back advice
ReactDOM.render(
    <Advice />,
    document.getElementById('Advice')
);



