import { Route } from 'react-router-dom'
import UserComponent from './component/user.component';
import CreateUserComponent from './component/create-user.component';
import Loading from './component/Loading'
import React from 'react';

class UserPage extends React.Component {
  
 constructor(props){
    super(props);
    this.state = {
        loading:true
    }
 }

  componentDidMount(){
   
  }
 
 render(){
    return(
       <React.Fragment>
      <Route exact path='/' component={UserComponent} />
      <Route exact path='/create-user' component={CreateUserComponent} />  
      <Route path='/create-user/:id' component={CreateUserComponent} /> 
      </React.Fragment>     
    )
 }
}
const UserWithLoading = Loading(UserComponent); 

export default UserPage