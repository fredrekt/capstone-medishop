import SideNav, { Toggle, Nav, NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';
import React from 'react'
// Be sure to include styles at some point, probably during your bootstraping
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import { Link } from 'react-router-dom'
import { MDBIcon } from 'mdbreact'

const SideNavbar = () =>{
    return(
        <SideNav
    onSelect={(selected) => {
        // Add your code here
    }}
>
    <SideNav.Toggle />
    <SideNav.Nav defaultSelected="home">
        <NavItem eventKey="home">
            <NavIcon>
                <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
                <Link to="/">
                    Home
                </Link>
            </NavText>
        </NavItem>
        <NavItem eventKey="charts">
            <NavIcon>
               <MDBIcon size="lg" icon="warehouse"/>
            </NavIcon>
            <NavText>
                <Link to="/login">
                    Manage Products
                </Link>
            </NavText>
            <NavItem eventKey="charts/linechart">
                <NavText>
                    <Link to="/add-products">
                        Add Products
                    </Link>
                </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
                <NavText>
                    <Link to="/ordered-products">
                         Ordered Products
                    </Link>
                </NavText>
            </NavItem>     
        </NavItem>

        <NavItem style={{'margin-top':'840%'}} eventKey="charts/barchart">
                <NavIcon>
                    <MDBIcon size="lg" icon="sign-out-alt" />
                </NavIcon>
                <NavText>
                Ordered Products
                </NavText>
            </NavItem>

    </SideNav.Nav>
</SideNav>
    )
}
export default SideNavbar