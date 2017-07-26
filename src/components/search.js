import React from 'react';
import './search.css';
import SearchForm from './search-form';
import Output from './output'
// import SortButton from './sort'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: '',
            searchHistory: []
        };
    }
    onChange(searchItem) {
        this.setState({
            searchItem
        });
    }
    onSubmit(e){
        console.log('this is working')
        e.preventDefault();
        this.setState({
            searchHistory: [...this.state.searchHistory, this.state.searchItem]
        })
    }
    
    render() {
       return (
        <div className='Search'>
            <SearchForm onChange={searchItem => this.onChange(searchItem)} onSubmit={e => this.onSubmit(e)}/>
            <Output value={this.state.searchItem}/>
        </div>
       );
    }
}
