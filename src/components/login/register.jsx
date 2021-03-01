import React from "react";
import loginImg from "../../login.svg";
import axios from "axios";
import base64 from "base-64";

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: '',
      lastName: '',
      password: '',
      uid: '',
      role: 'Student'
    }
  }

  myChangeHandleUID = e => {
    this.setState({uid: e.target.value})
  }

  myChangeHandlePSWD = e => {
    this.setState({password: e.target.value})
  }

  myChangeHandleFirstName = e => {
    this.setState({firstName: e.target.value})
  }

  myChangeHandleLastName = e => {
    this.setState({lastName: e.target.value})
  }
  //TODO fix role handling???
  myChangeHandleRole = e => {
    this.setState({role: e.target.value})
  }

  handleRegister = e => {
    e.preventDefault();

    axios.defaults.baseURL = 'https://service-ems.herokuapp.com/'
    axios.defaults.withCredentials = true;
    axios.post('/register',
        {
          firstName: this.state.firstName,
          lastName: this.state.lastName,
          password:  base64.encode(this.state.password),
          uid: this.state.uid,
          role: this.state.role
        }
    );
    //TODO add redirect to login
  }

  render() {
    return (
      <div className="base-container" ref={this.props.containerRef}>
        <div className="header">Register</div>
        <div className="content">
          <div className="image">
            <img src={loginImg} />
          </div>
          <div className="form">
          <div className="form-group">
              <select name="chooseСharacter" onChange={this.myChangeHandleRole}>
                <option value="Student">Student</option>
                <option value="Lecturer">Lecturer</option>
              </select>
            </div>
            <div className="form-group">
              <label htmlFor="username">First Name</label>
              <input type="text" name="firstName" placeholder="First Name"
                     onChange={this.myChangeHandleFirstName}/>
            </div>
            <div className="form-group">
              <label htmlFor="username">Second Name</label>
              <input type="text" name="secondName" placeholder="Second Name"
                     onChange={this.myChangeHandleLastName}/>
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="text" name="UID" placeholder="UID"
                     onChange={this.myChangeHandleUID}/>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" placeholder="password"
                     onChange={this.myChangeHandlePSWD}/>
            </div>
          </div>
        </div>
        <div className="footer">
          <button type="button" className="btn" onClick={this.handleRegister}>
            Register
          </button>
        </div>
      </div>
    );
  }
}