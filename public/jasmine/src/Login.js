
//Creates Username Component
var LogEmail = React.createClass({


    handleEmailChange: function(e) {
        this.setState({email: e.target.value});
    },

    render: function(){
        return(
                <input
                    type="text"
                    className="form-control"
                    placeholder="Email"
                    onChange={this.handleEmailChange}
                />
        )
    }
});

//Creates Password Component
var LogPassword = React.createClass({

    handlePasswordChange: function(e) {
        this.setState({password: e.target.value});
    },

    //Creates template for form
    render: function(){
        return(
            <input
                type="text"
                className="form-control"
                placeholder="Password"
                onChange={this.handlePasswordChange}
            />
        )
    }
});

//Creates Log Button Component
var LogButton = React.createClass({


    handleLogin: function() {
        console.log("EMail: " + this.state.email);
        console.log("Password: " + this.state.password);
    },

    //Goes back to home page once submit is clicked
    _changeView: function(){
        document.location.href = "../Home.html";
    },

    //Creates template for form
    render: function(){
        return(
            <button
                className='btn btn-lg btn-primary btn-block'
                onClick={this._changeView}
            >Sign In</button>
        )
    }
});


var SignInView = React.createClass({


    //Presents view of SignIn Page
    render: function(){
        return(
            <div>
                <LogEmail/>
                <LogPassword/>
                <LogButton/>
            </div>
        )
    }
});

ReactDOM.render(
    <SignInView/>,
    document.getElementById('reactForm')
);