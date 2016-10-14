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
    document.getElementById('container')
);

var ServiceChooser = React.createClass({

    getInitialState: function(){
        return { total: 0 };
    },

    addTotal: function( price ){
        this.setState( { total: this.state.total + price } );
    },

    render: function() {

        var self = this;

        var services = this.props.items.map(function(s){

            // Create a new Service component for each item in the items array.
            // Notice that I pass the self.addTotal function to the component.

            return <Service name={s.name} price={s.price} active={s.active} addTotal={self.addTotal} />;
        });

        return <div>
            <h1>Our services</h1>

            <div id="services">
                {services}

                <p id="total">Total <b>${this.state.total.toFixed(2)}</b></p>

            </div>

        </div>;

    }
});


