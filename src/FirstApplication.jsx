import React, { Component } from 'react';

class Application extends Component {
   
    constructor(){
        super();
        this.state = {
          count:0
        }
        
        this.Increment = this.Increment.bind(this);
      }
    
        Increment(){
        let newCount = this.state.count+1;
        this.setState({count:newCount});
    }
    
    render() {
        return (
         <div>
             <div>
                
                 <span>{this.state.count}</span>
             </div>
            <button onClick={this.Increment} >+</button>
        </div>
       );
        }
    }

export default Application;