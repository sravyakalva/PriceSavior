

var SignIn = React.createClass({

    _changeView: function(){
        document.location.href = "../HTML/Home.html";
    },

    render: function(){
        return(
            <div>
                <button className='btn btn-lg btn-primary btn-block' onClick={this._changeView}>Sign In</button>
            </div>
        )
    }
});

ReactDOM.render(
    <SignIn/>,
    //Sets the title of the banner
    document.getElementById('loginButton')
);