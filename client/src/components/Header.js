import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
    renderContent() {
        switch (this.props.auth){
            case null:
                return;
        case false:
            return <li><a href="/api/auth/google">Login with Google</a></li>;
        default:
            return [
                <li key="1" style={{margin:"0 10px"}}> Welcome, {this.props.auth.name.givenName}</li>,
                <li key="2"><Payments/></li>,
                <li key="4" style={{margin:"0 10px"}}> Credits: {this.props.auth.credits}</li>,
                <li key="3"><a href="/api/auth/logout">Logout</a></li>
            ] ;
        }
    }

    render() {
        return (
            <nav>
                <div className="nav-wrapper teal">
                    <Link style={{ padding: '0 15px' }} className="left brand-logo" to= {this.props.auth ? '/surveys' : '/'}>Survey Service</Link>

                    <ul id="nav-mobile" className="right hide-on-med-and-down">
                       {this.renderContent()}
                    </ul>
                </div>
            </nav>
        )
    }
}

function mapStateToProps({ auth }) {
    return { auth };
}

export default connect(mapStateToProps)(Header);