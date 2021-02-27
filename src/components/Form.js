import React, { Component } from 'react'
import axios from 'axios'

class Form extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             email:'',
             password:''
        }
        this.changename = this.changename.bind(this)
        this.changeemail = this.changeemail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changename(e){
       this.setState({
            username : e.target.value
       })
    }

    changeemail(e){
        this.setState({
             email : e.target.value
        })
     }

    changePassword(e){
        this.setState({
             password : e.target.value
        })
     }
    
    onSubmit(e){
        e.preventDefault()

        const submitted = {
            username : this.state.username,
            email : this.state.email,
            password : this.state.password
        }

        axios.post("http://localhost/app/signup" , submitted)
        .then(res => console.log(res.data))

        this.setState({
            username:'',
            email:'',
            password:''
        })
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.onSubmit}>
                <label htmlFor="name">UserName : </label>
                <input type="text" 
                       className="form-control" 
                       id="name" 
                       onChange={this.changename}
                       placeholder="Enter full name"
                       value={this.state.username} /> <br/>

                <label htmlFor="email">Email : </label>
                <input 
                       type="text" 
                       className="form-control" 
                       id="email" 
                       onChange={this.changeemail}
                       placeholder="Enter email"
                       value={this.state.email}/> <br />

                <label htmlFor="password">PassWord</label>
                <input 
                       type="password" 
                       className="form-control" 
                       id="password" 
                       onChange={this.changePassword}
                       placeholder="Enter PassWord"
                       value={this.state.password}/> <br/>

                <input type="submit" className="btn btn-primary btn-block" />
                </form>
            </div>
        )
    }
}

export default Form
