import axios from "axios";
import React from "react";
import loginImg from "../../login.svg";
import Cookies from 'universal-cookie';

export class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      password: '',
      uid: ''
    }
  }

  myChangeHandleUID = e => {
    this.setState({uid: e.target.value})
  }

  myChangeHandlePSWD = e => {
    this.setState({password: e.target.value})
  }

  handleSubmit = e => {
    e.preventDefault();

    axios.defaults.withCredentials = true;
    axios.defaults.baseURL = 'https://emsknu.herokuapp.com/'
    axios.post('/login',
        {
          uid: this.state.uid,
          password: this.state.password
        }
    ).then(response => {
      const cookies = new Cookies();
      cookies.set('SESSIONID', response.data.sessionId, {path: '/'});
      cookies.set('ROLE', response.data.role, {path: '/'});
    })

  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Login</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <input type="text" name="uid" placeholder="username" 
                onChange={this.myChangeHandleUID}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
                onChange={this.myChangeHandlePSWD}
              />
            </div>
          </div>
        </div>
        <div className="footer">
          <input type="submit" className="btn" value="Login" onClick={this.handleSubmit} />
        </div>
      </div>
    );
  }
}