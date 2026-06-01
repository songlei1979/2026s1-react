import React, {Fragment} from 'react';
import {Nav} from "react-bootstrap";
import Login from "./Login";

function Navigation(props) {
    return (
        <Fragment>
            <Nav variant="pills" defaultActiveKey="/home">
                <Nav.Item>
                    <Nav.Link href="/">Home</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/helloworld2">Hello World 2</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loop">Loop</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/counter">Counter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/loadposts">Load Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/countreducer">Counter from reducer</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/register">Register</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/login">Login</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link href="/postlist">Posts</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                        Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav>
        </Fragment>
    );
}

export default Navigation;