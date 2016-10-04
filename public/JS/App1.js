var Helloworld = React.createClass({

    propTypes: {
        name: React.PropTypes.string,
        isPerson: React.PropTypes.bool
    },

    componentDidMount: function(){

    },

    _addByOne: function(){
        this.setState({
            value: this.state.value + 1
        });
    },

    _hello: function(){
        return(
            <h1>hello</h1>
        )
    },

    getInitialState: function(){
        return{
            value: 1
        }
    },

    getDefaultProps: function(){
        return{
            name: 'Scott'
        }
    },


    render: function(){
        var greeting="World";
        if(this.props.isPerson){
            greeting=(<Person name={this.props.name}/>)
        }
        return(

            <div>
                <h1>Hello {greeting}</h1>
                {this.state.value}
                <input type="text"/>
                <button className='btn btn-lg btn-primary btn-block' onClick={this._addByOne}>Click me!</button>
            </div>
        )
    }
});

var Person = React.createClass({

    propTypes: {
        name: React.PropTypes.string.isRequired
    },


    getDefaultProps: function(){
        return{
            name: 'Scott'
        }
    },


    render: function(){
        return(
            <span> {this.props.name}</span>
        )

    }
});

ReactDOM.render(
    <Helloworld name="Tim" isPerson={true}/>,
    document.getElementById('cunt')
);