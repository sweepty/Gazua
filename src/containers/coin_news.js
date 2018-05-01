import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index';
import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';

class CoinNews extends Component {
  componentDidMount(){
    this.props.fetchNews();
  }
  render(){
    return(
      this.props.news.map((item,i) => {
        return(
          <div>{item.Promoted[i].tags}</div>
        );
      })
    );
  }
}
//container component -> presentation component 
function mapStateToProps(state) {
  return {
    news: state.news.data,
    error: state.news.error
  };
}

//presentation component -> container component
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchNews }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CoinNews);