import React from 'react'
import {connect} from 'react-redux'

const Header = () => (
    <nav className="navbar navbar-default">
        <div className="container-fluid">

            <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">Brand</a>
            </div>


            <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                <ul className="nav navbar-nav">
                    <li><a href="#">Data</a></li>
                </ul>

                <ul className="nav navbar-nav navbar-right">
                    <li><a href="#">Link</a></li>

                </ul>
            </div>
        </div>
    </nav>
)

const Footer = () => (
    <div>
        <label>Footer here</label>
    </div>
)

const App = ({children}) => (
    <div>
        <Header></Header>
        <div className="container">
            
            {children}
        </div>
        <Footer></Footer>
    </div>
)

export default connect()(App)

