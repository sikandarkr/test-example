import React,{Component} from 'react';
import {connect} from 'react-redux'
class Profiles extends Component{
    render(){
        return(
            <div>
                <p>Profile Page</p>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      data:state.searchData,
      login:state.login
    }
  }
    function mapDispatchToProps(dispatch) {
        return({
            Register: (data) => {dispatch(registerUser(data))}
        })
    }
export default connect(mapStateToProps, mapDispatchToProps)(Profiles);
