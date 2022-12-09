import React from 'react';
import UsersService from "../services/users-service";
import { connect } from 'react-redux';
import { updateUser } from '../redux/user/user.actions';
import { selectUser } from '../redux/user/user.selector';

// json-server --watch db.json --port 3000
class CreateUserComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            id: this.props.match.params.id,
            firstName:'',
            lastName:''
        }
    }
    componentDidMount(){
      if(!this.state.id){
        return
      }
      else{
        /*
        UsersService.getUser(this.state.id).then(res => {
           this.setState({...res.data})
        })
        */
      this.setState({...this.props.getUser});
      }
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({[name]:value})
    }
    handleSubmit = event => {
      event.preventDefault();
      if(!this.state.id){
        const {firstName,lastName} = this.state;
        const user = {firstName:firstName,lastName:lastName}
        UsersService.createUser(user).then( res => {
           // this.props.setUser(user);
            this.setState({id:null,firstName:'',lastName:''})
            this.props.history.push('/')
          })
      }
      else{
        UsersService.updateUser(this.state).then(res=>{
            this.props.updateUser(res.data);
            this.setState({id:null,firstName:'',lastName:''})
            this.props.history.push('/')
        })
      }
      
    }

    render(){
        const {firstName,lastName} = this.state;
        return(
        <form onSubmit={this.handleSubmit}>
        <div>
        <label htmlFor="firstName">First Name:</label>
        <input type="text" onChange={this.handleChange} name="firstName" value={firstName} id="firstName" placeholder="firstName"/>
        </div>
        <div>
        <label htmlFor="lastName">Last Name:</label>
        <input type="text" onChange={this.handleChange} name="lastName" value={lastName} id="lastName" placeholder="lastName"/>
        </div> 
        <button type="submit">Submit</button>     
        </form>
        );
    }
}

const mapStateToProps = (state, ownProps) => ({
  getUser: selectUser(ownProps.match.params.id)(state)
});

const mapDispatchToProps = dispatch => ({
 // setUser: user => dispatch(setCurrentUser(user)),
  updateUser: user => dispatch(updateUser(user))
});

export default connect(mapStateToProps,mapDispatchToProps)(CreateUserComponent);