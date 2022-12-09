import React from 'react';
import UsersService from "../services/users-service";
import { Link } from 'react-router-dom';
import { deleteUser, setUsers } from '../redux/user/user.actions';
import { connect} from 'react-redux';
import { selectUsers } from '../redux/user/user.selector';
import {createStructuredSelector} from 'reselect';

class ListUsers extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            users: []
        }
    }
    
    componentDidMount(){
      UsersService.getUsers().then((res)=>{
       // this.setState({ users: res.data});
        this.props.setUsers(res.data);
      });
    }
    viewUser(id){
      this.props.history.push(`/view-user/${id}`)
    }
    deleteUser(id){
      UsersService.deleteUser(id).then((res)=>{
        console.log(res);
       // this.setState({users:this.state.users.filter( user => user.id!=id)});
       this.props.deleteUser(id)
      });
    }
    updateUser(id){
      this.props.history.push(`/create-user/${id}`)
    }
    render(){
      console.log('users: '+this.state.users);
      const {users} = this.props;
        return(
          <div>
            <Link to="/create-user">Create User</Link>
            <table className = "table table-striped table-bordered">

            <thead>
            <tr>
             <th>First Name</th>
             <th>Last Name</th>
             <th>Actions</th>
            </tr>
            </thead>
            <tbody>
            {
                 users.map(
                 user => 
                <tr key = {user.id}>
                 <td> {user.firstName} </td>   
                 <td> {user.lastName}</td>
                 <td>
                     <button onClick={() => this.updateUser(user.id)} className="btn btn-info">Update </button>
                     <button onClick = { () => this.deleteUser(user.id)} style={{marginLeft: "10px"}}  className="btn btn-danger">Delete </button>
                     <button onClick={ () => this.viewUser(user.id)} style={{marginLeft: "10px"}} className="btn btn-info">View </button>
                 </td>
                </tr>
             )
            }
            </tbody>
            </table>
          </div>
        );
    }
}

const mapStateToProps = createStructuredSelector({
  users: selectUsers
});

/*
const mapStateToProps = (state) => ({
  users: selectUsers(state)
});
*/
const mapDispatchToProps = dispatch => ({
  setUsers: users => dispatch(setUsers(users)),
  deleteUser: id => dispatch(deleteUser(id))
//  updateUser: user => dispatch(updateUser(user))
});


export default connect(mapStateToProps,mapDispatchToProps)(ListUsers);