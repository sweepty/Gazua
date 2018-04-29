import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchCoin } from '../actions/index';

class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state = {
      loading: false,
      error: '',
      term: '' 
    };
  }
  onSubmit(event){
    event.preventDefault();
    // this.props.fetchCoin(this.state.term);
    this.props.fetchCoin();
    this.setState({term: ''});
  }
  render(){
    const clsName = (this.props.loading) ? 'btn btn-primary loading' : 'btn btn-primary';
    return (
      <form className="search-bar mt-3 ml-3 mr-3" onSubmit ={event => this.onSubmit(event)}>
        <div className="input-group mb-3">
          <input 
            onChange={event => this.setState({term: event.target.value})}
            type='text'
            value = {this.state.term}
            className="form-control" placeholder="Enter the Coin Name" 
            aria-label="Search"/>
        
          <div className="input-group-append">
            <button className={clsName} type="button">Search
            </button>
          </div>
        </div>
      </form>
    );

  }
}
function mapStateToProps(state){
  return{
    loading: state.coin.loading,
    error: state.coin.error
  };
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchCoin }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
