import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

class Quotes extends Component {
    constructor() {
        super();
        this.state = {
            title: [],
            content: [],
        };
    }

componentWillMount() {

    fetch('http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1')
    .then(results => {
        return results.json();
    }).then(data => {
        let quotes = data.results.map((quote) => { 
            return(
                <div key={quote.results} />
            )
        })
    this.setState({quotes: quotes});
    console.log("state", this.state.quotes);
    })
}

render() {
    return (

<div>
    {this.state.content}
    {this.state.title}
</div>
    )}}

export default Quotes;
