// import React, { Component } from 'react';
// import { connect } from 'react-redux';
// import { fetchNews } from '../actions/index';
// import { bindActionCreators } from 'redux';
// import { Link } from 'react-router-dom';

// class CoinNews extends Component {
//   constructor(props){
//     super(props);
//     this.state = {
//       loading: false,
//       error: null,
//     };
    
//   }
//   componentDidMount(){
//     this.props.fetchNews();
//   }
//   render(){
//     return(
//       <div>
//         {this.props.news.map((item,i) => {
//           return(
//             <h1>{item.Message}</h1>
//           );
//         })}
//       </div>
//     );
//   }
// }
// //container component -> presentation component 
// function mapStateToProps(state) {
//   return {
//     news: state.news.data,
//     error: state.news.error,
//   };
// }

// //presentation component -> container component
// function mapDispatchToProps(dispatch){
//   return bindActionCreators({ fetchNews }, dispatch);
// }
// export default connect(mapStateToProps, mapDispatchToProps)(CoinNews);