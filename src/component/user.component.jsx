
import UsersService from "../services/users-service";
import React from 'react';
import { connect} from 'react-redux';
import { selectUser } from "../redux/user/user.selector";
import { setCurrentUser, setUsers } from "../redux/user/user.actions";

//import WithRouter from 'react-router-dom';

class UserComponent extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
       const {setCurrentUser,getUser,match} = this.props;
        if(!getUser){
            UsersService.getUser(match.params.id).then((res) => {
                 setCurrentUser(res.data);   
                });
        }
    }

    render(){
        const user = this.props.getUser; 
        return(
          <div>
           <p>First Name: {user?.firstName}</p> 
           <p>Last Name: {user?.lastName}</p> 
          </div>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
    getUser: selectUser(ownProps.match.params.id)(state)
  });

  const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user)),
   });
   
export default connect(mapStateToProps,mapDispatchToProps)(UserComponent);