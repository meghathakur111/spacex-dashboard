import React, { Component } from 'react';
import { Button, Row, Col } from 'antd';
import { NavLink, Link } from "react-router-dom";
import './Header.css';
import Logo from './../../assets/images/spacex.png';

class Header extends Component {

    handleLogout = (e) => {
        e.preventDefault();
        localStorage.clear();
        window.location.href = "/";
    }

    render() {
        return (
            <>
                <Row gutter={16}>

                    <div className="header_structure_space_x">
                        <Col xs={24} sm={16} md={16} lg={16}>
                            <Link to="/dashboard">
                                <div>
                                    <img src={Logo} className="logo-space-y" />
                                </div>
                            </Link>

                        </Col>
                        {localStorage.getItem("role") === 'admin' ?
                            <Col xs={24} sm={6} md={6} lg={6} className="left_side_btn_structure">
                                <div className="user_Link_list_structure">

                                    {
                                        localStorage.getItem("role") === 'admin' ?
                                            <NavLink
                                                to="/userlist"
                                                activeClassName="active"
                                                className="user_list_sructure"
                                            >
                                                <Button>
                                                    User List
                                        </Button>
                                            </NavLink>
                                            : null
                                    }
                                </div>
                                <div className="Logout_structure">
                                    <Button onClick={this.handleLogout}>Logout</Button>
                                </div>
                            </Col> :
                            <Col xs={24} sm={7} md={7} lg={7} className="">
                                <div className="Logout_structure">
                                    <Button onClick={this.handleLogout}>Logout</Button>
                                </div>
                            </Col>
                        }

                        {/* <Col xs={24} sm={4} md={4} lg={4}>
                           
                        </Col> */}
                    </div>
                </Row>


            </>
        )
    }

}

export default Header
