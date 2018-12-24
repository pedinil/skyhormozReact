
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import { Link } from 'react-router-dom';
import './Navigation.css'

export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar  light expand="md">
          {/*<NavbarBrand href="/">reactstrap</NavbarBrand>*/}
          <div className="ct">
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav className="md-auto" navbar>
                <NavItem>
                <Link className="Link" to="/"><NavLink>Home</NavLink></Link>
                </NavItem>
                <NavItem>
                <Link className="Link" to="/agent"><NavLink>Agents</NavLink></Link>
                </NavItem>

              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                <Link className="Link" to="/visa"> Visa</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                  <Link className="Link" to="/visa/packages"> Visa Packages</Link> 
                  </DropdownItem>
                   {/*
                  <DropdownItem>
                    Dubai Visa
                  </DropdownItem>
                 
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                  */}
                </DropdownMenu>
                  
              </UncontrolledDropdown>

              {/*
                <NavItem>
                <Link className="Link" to="/visa"> <NavLink>Visa</NavLink></Link>
                </NavItem>
              */}
                <NavItem>
                <Link to="/citytour" className="Link" > <NavLink>Dubai City Tour</NavLink></Link>
                </NavItem>
                <NavItem>
                <Link to="/aboutus" className="Link" ><NavLink>About Us</NavLink>
                </Link></NavItem>
                <NavItem>
                <Link to="/contactus" className="Link"><NavLink>Contact Us</NavLink></Link>
                </NavItem>

                 <NavItem>
                <Link to="/gallery" className="Link"><NavLink>Gallary</NavLink></Link>
                </NavItem>
                {/*
                <NavItem>
                  <Link to='/Form' className="Link"><NavLink>Form</NavLink></Link>
                </NavItem>
                */}
                
    
              </Nav>
            </Collapse>
          </div>
        </Navbar>
      </div>
    );
  }
}

