import React, {Component}from "react";


class Nav extends Component{

    constructor(){
        super();
        this.state = {
            message:'hello'
        }
        Changeext (){
            this.setState({
                alert:`${this.state.message}`
            })
        }

    }
    render(){
        return(
            <div>
                <nav className="NAV">
                      <button onClick={this.ChangeText}>About Us</button>
                </nav>
                
            </div>
        )
    }

}
export default Nav
