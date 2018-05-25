import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import './index.css';
import { Provider } from 'react-redux';
import store from './store';

import HeaderComponent from './header/header';
import LoginComponent from './login/login';


class MyForm extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title : "Hello World"
        };
        this.changeTitle = this.changeTitle.bind(this);
    }

    myClick() {
        console.log("clicked")
    }

    changeTitle() {
        this.setState({
            title : "Changed Title"
        });
    }

    render() {
        // const myList = ["item1", "item2"];
        return (
            <Provider store={store}>
            <Router>
                <div>
                <Route exact path="/" component={HeaderComponent}/>
                <Route path="/login" component={LoginComponent}/>
                </div>
                {/* <h1>{this.state.title}</h1>
                 <h2>{myList.map(x => {
                     return (
                         <div key={x} onClick={this.myClick}>{x}</div>
                     );
                 })}</h2>
                 <button onClick={this.changeTitle}>Click</button> */}
            </Router>
            </Provider>
        );
    }
}

ReactDOM.render (
    <MyForm/>, document.getElementById('root')
);