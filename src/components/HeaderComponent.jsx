import React, { Component } from 'react';

class HeaderComponent extends Component {
    render() {
        return (
            <div>
                <header>
                    <nav style={{padding: "2%"}} className="navbar navbar-expand-md navbar-dark bg-dark">
                    <div> <a href="http://localhost:3000" className="navbar-brand"> PRODUCT APP </a> </div>
                    </nav>
                </header>
                
            </div>
        );
    }
}

export default HeaderComponent;