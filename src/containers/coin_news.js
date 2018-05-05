import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchNews } from '../actions/index';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class CoinNews extends Component {
  constructor(props){
    super(props);
    this.state = {
      loading: false,
      error: null,
    };
    
  }
  componentDidMount(){
    this.props.fetchNews();
  }
  
  render(){
    return(
      <div className="container">
        <div className="row">
          {_.map(this.props.news, item =>
            <div className="col-4">
              <div className="card"> 
                <img className="card-img-top" src={item.imageurl} alt="news image"/>
                <div className="card-body" >
                  <h4 className="card-title">{item.title}</h4>
                  {/* <p className="card-text">{item.body.substr(0,100)}...</p> */}
                  <a href={item.url} className="btn btn-primary" target="_blank">More</a>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}
//container component -> presentation component 
function mapStateToProps(state) {
  return {
    news: state.news.data,
    error: state.news.error,
  };
}

//presentation component -> container component
function mapDispatchToProps(dispatch){
  return bindActionCreators({ fetchNews }, dispatch);
}
export default connect(mapStateToProps, mapDispatchToProps)(CoinNews);