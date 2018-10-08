import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import logo from "../assets/img/kaya.jpg";
import Snackbar from 'material-ui/Snackbar';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            autoHideDuration: 2000,
            message: 'You have entered an invalid username or password',
            open: false,
            username: "",
            password: ""
        };
    }

    login=()=>{
        console.log(this);
        this.props.history.push("/base")
        
    }
    render() {
        return (
            <div className="demo-box wrapper">
                <Paper className="login-wrapper" zDepth={2} >
                    <div className="login-logo-wrapper">
                        <img src={logo} className="login-logo" alt="fleetCat logo" />
                    </div>
                    <TextField
                        className="login-t-field"
                        floatingLabelText="User Name"
                        defaultValue={this.state.username}
                        onChange={(event, value) => {
                            this.setState({ username: value, open: false });
                        }}
                    />
                    <TextField
                        className="login-t-field"
                        floatingLabelText="Password"
                        defaultValue={this.state.password}
                        type="password"
                        onChange={(event, value) => {
                            this.setState({ password: value, open: false });
                        }}
                    />
                    <div className="block">
                        <Checkbox
                            className="checkbox"
                            label="Remember me"
                        />
                    </div>
                    <RaisedButton
                        label="Login"
                        primary={true}
                        className="login-btn"
                        onClick={this.login}
                    />
                </Paper>
                <Snackbar
                    // open={!this.props.user.login && this.state.open && !this.props.user.fetching}
                    message={this.state.message}
                />
            </div>
        );
    }
}

export default Login;
