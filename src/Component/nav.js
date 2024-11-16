import React, {Component}from "react";


class Nav extends Component{

    constructor(){
        super();
        this.state = {
            message:'hello'
        }

    }
    ChangeText(){
        this.setState({
            alert:`${this.state.message}`
        })
    }
    render(){
        return(
            
             
            <div>
                <div>
                {this.state.message}
             </div>
                <nav className="NAV">
                      <button onClick={this.ChangeText}>About Us</button>
                </nav>
                
            </div>
        )
    }

}
export default Nav
