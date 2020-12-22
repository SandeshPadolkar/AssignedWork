import React, { Component } from 'react'

export class menubar extends Component {
    render() {
        return (
            <div>
                <h1 className="menuhead">Menubar</h1>
                <div className="menu">
                <img src="/library.jpg" alt="Loading"/><br/><br/>
                <a href="#Page1">Click here to enter Page1</a><br/><br/>
                <a href="#Page2">Click here to enter Page2</a>
                </div>
            </div>
        )
    }
}

export default menubar
