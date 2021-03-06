import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component{
    
    state = {term: ''}


    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.props.onSubmit(this.state.term)   //llama al callback de App.js linea 17
    }

    

    render() {
        return (
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                    <label><h2>Image Search</h2></label> 
                    <input 
                    type="text" 
                    value={this.state.term} 
                    placeholder="Search what you want" 
                    onChange={(e) => this.setState( { term: e.target.value } )} />
                    </div>
                </form>
            </div>
        )
    }
};



export default SearchBar;