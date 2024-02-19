import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <div>
            <nav className="navbar navbar-inverse">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href="#">Logo</a>
                    </div>
                    <div className="collapse navbar-collapse" id="myNavbar">
                        <ul className="nav navbar-nav">
                            <li className="active"><Link to='/' className="navbar-brand">Home</Link></li>
                            {/* <li><a href="#">About</a></li> */}
                        </ul>
                        <ul className="nav navbar-nav navbar-right">
                            <li><Link to="/login"><span className="glyphicon glyphicon-log-in"></span> FakeLogin</Link></li>
                            <li><Link to='/djangologin'><span className="glyphicon glyphicon-log-in"></span> DjangoLogin</Link></li>
                        </ul>
                    </div>
                </div>
            </nav>

        </div>
    )
}

export default Nav