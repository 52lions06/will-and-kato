import React from 'react';
import './search-form.css';

export default function SearchForm(props) {
    
    // onSubmit(e) {
    //   e.preventDefault();
    //   // to grab the value
    //   const text = e.target.value;
    //   console.log(text);
    //   // add value to state

      // (e) => props.onClick(e.target.value)

    
    
    // differentFunction(){
    //     this.setState({ 
    //         searchItem 
    //     });
    

    
    return (
      <form onSubmit={e => props.onSubmit(e)}>
        <label htmlFor='Search-Form'>Search</label>
        <input 
            type='search' 
            name='Search-Form' 
            id='Search-Form' 
            placeholder='Will' 
            onChange={e =>props.onChange(e.target.value)}
            />
      </form>
    );
  }





