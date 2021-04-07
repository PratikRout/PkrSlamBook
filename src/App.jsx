import React, { Component } from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import axios from 'axios'

class App extends Component {
    constructor(){
        super()
        this.state = {
            q1:'',
            q2:'',
            q3:'',
            q4:'',
            q5:'',
            q6:''
        }
        this.changeq1 = this.changeq1.bind(this)
        this.changeq2 = this.changeq2.bind(this)
        this.changeq3 = this.changeq3.bind(this)
        this.changeq4 = this.changeq4.bind(this)
        this.changeq5 = this.changeq5.bind(this)
        this.changeq6 = this.changeq6.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
    }

    changeq1(event){
        this.setState({
            q1:event.target.value
        })
    }
    changeq2(event){
        this.setState({
            q2:event.target.value
        })
    }
    changeq3(event){
        this.setState({
            q3:event.target.value
        })
    }
    changeq4(event){
        this.setState({
            q4:event.target.value
        })
    }
    changeq5(event){
        this.setState({
            q5:event.target.value
        })
    }
    changeq6(event){
        this.setState({
            q6:event.target.value
        })
    }
    onSubmit(event){
        event.preventDefault()

        const registered = {
            q1: this.state.q1,
            q2: this.state.q2,
            q3: this.state.q3,
            q4: this.state.q4,
            q5: this.state.q5,
            q6: this.state.q6
        }

        axios.post('https://pkrslambook.herokuapp.com/app/signup', registered)
            .then(response => console.log(response.data))

        this.setState({
            q1:'',
            q2:'',
            q3:'',
            q4:'',
            q5:'',
            q6:''
        })
    }

    render() { 
        return ( 
            <div>
                <div className='container'>
                    <div className='form-div'>
                        <form onSubmit={this.onSubmit}>
                            <input type = 'text'
                            placeholder='Your Name Please ;)'
                            onChange={this.changeq1}
                            value={this.state.q1}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Your Number (for rishtas) ;)'
                            onChange={this.changeq2}
                            value={this.state.q2}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Where/in which year did we first meet?'
                            onChange={this.changeq3}
                            value={this.state.q3}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Your fav movie, show, actor, actress, song, musician?'
                            onChange={this.changeq4}
                            value={this.state.q4}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='Your fav memory of us'
                            onChange={this.changeq5}
                            value={this.state.q5}
                            className='form-control form-group'
                            />

                            <input type = 'text'
                            placeholder='What do you honestly think about me?'
                            onChange={this.changeq6}
                            value={this.state.q6}
                            className='form-control form-group'
                            />

                            <input type='submit' className='btn btn-danger btn-block' value='Submit'/>
                        </form>
                    </div>
                </div>
            </div>
         );
    }
}
 
export default App;