import React from 'react'
import './App.scss'
import { Login, Register } from './components/login/index'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Main from './components/Main/Main'
import Chat from './components/chat/App'

class App extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			isLogginActive: true,
		}
	}

	componentDidMount() {
		//Add .right by default
		this.rightSide.classList.add('right')
	}

	changeState() {
		const { isLogginActive } = this.state

		if (isLogginActive) {
			this.rightSide.classList.remove('right')
			this.rightSide.classList.add('left')
		} else {
			this.rightSide.classList.remove('left')
			this.rightSide.classList.add('right')
		}
		this.setState(prevState => ({ isLogginActive: !prevState.isLogginActive }))
	}

	render() {
		const { isLogginActive } = this.state
		const current = isLogginActive ? 'Register' : 'Login'
		const currentActive = isLogginActive ? 'login' : 'register'

		return (
			<div className="App">
				<div className="login">
					<div className="container" ref={ref => (this.container = ref)}>
						{isLogginActive && <Login containerRef={ref => (this.current = ref)} />}
						{!isLogginActive && <Register containerRef={ref => (this.current = ref)} />}
					</div>
					<RightSide
						current={current}
						currentActive={currentActive}
						containerRef={ref => (this.rightSide = ref)}
						onClick={this.changeState.bind(this)}
					/>
				</div>
			</div>
		)
	}
}

const Root = () => {
	const [isLogin, setIsLogin] = React.useState(true)

	return (
		<BrowserRouter>
			<Switch>
				<Route
					exact
					path="/"
					render={() => {
						return isLogin ? <Redirect to="/main" /> : <Redirect to="/login" />
					}}
				/>
				<Route
					path="/main"
					render={() => {
						return isLogin ? <Main login={setIsLogin} /> : <Redirect to="/login" />
					}}
				/>
				<Route
					path="/login"
					render={() => {
						return isLogin ? <Redirect to="/main" /> : <App />
					}}
				/>
				<Route
					path="/chat"
					render={() => {
						return isLogin ? <Chat /> : <Redirect to="/login" />
					}}
				/>
			</Switch>
		</BrowserRouter>
	)
}

const RightSide = props => {
	return (
		<div className="right-side" ref={props.containerRef} onClick={props.onClick}>
			<div className="inner-container">
				<div className="text">{props.current}</div>
			</div>
		</div>
	)
}

//

export default Root
