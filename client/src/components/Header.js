import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link} from 'react-router-dom'
import Payments from './Payments'
import M from "materialize-css";
import '../assets/css/style.css'

class Header extends Component{

  componentDidMount() {
    const options = {
      inDuration: 250,
      outDuration: 200,
      draggable: true
    };
    const instance = M.Sidenav.init(this.Sidenav);
  }

  renderContent() {
    switch (this.props.auth) {
      case null:
        return null
      case false:
        return <li><a href="/auth/google"><button className="btn">Login With Google</button></a></li>
      default:
        return [
            <li key="1"><Payments/></li>,
            <li key="3" className="mobile-link" style={{ margin: '0 10px' }}>Credits: {this.props.auth.credits}</li>,
            <li key="2"><a className="mobile-link" href="/api/logout">Logout</a></li>
          ]
    }
  }

  render() {
    return (
        <div>
          <nav>
            <div className="nav-wrapper">
              <Link
                  to={this.props.auth ? '/surveys' : '/'}
                  className="brand-logo left"
              >
                Emaily
              </Link>
              <div>
                <ul
                    ref={Sidenav => {this.Sidenav = Sidenav;}}
                    id="slide-out"
                    className="sidenav mobile-nav"
                >
                  <span data-target="slide-out" className="cancel-icon sidenav-close">&#10060;</span>
                  {this.renderContent()}
                </ul>
                <a data-target="slide-out" className="right sidenav-trigger">
                  <div className="menu-icon"></div>
                  <div className="menu-icon"></div>
                  <div className="menu-icon"></div>
                </a>
              </div>
              <ul className="right hide-on-med-and-down">
                {this.renderContent()}
              </ul>
            </div>
          </nav>
        </div>

    )
  }
}

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header)
