import React, { Component } from 'react';
class Navbar extends Component {
    showTotals =()=>{
        let total = 0;
        for(let counter of (this.props.counters))
        {
            total=total + (counter.value)
        }
        return total;
    }
    render() { 
        return ( 
            <nav className="navbar navbar-light bg-light">
  <a className="navbar-brand" href="#">Navbar</a>{this.showTotals()}
</nav>
         );
    }
}
 
export default Navbar;