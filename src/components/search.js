import React from 'react';
import './search.css';
import SearchForm from './search-form';
import Output from './output'
// import SortButton from './sort'

export default class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchItem: ''
        };
    }
    onChange(searchItem) {
        this.setState({
            searchItem
        });
    }
    render() {
       return (
        <div className='Search'>
            <SearchForm onChange={searchItem => this.onChange(searchItem)} />
            <Output value={this.state.searchItem}/>
        </div>
       );
    }
}
