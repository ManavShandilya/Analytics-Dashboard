import React, { useState } from 'react';
import { Row, Col, Nav } from 'react-bootstrap';

export const Header = () => {

    // State to track the active tab key (Default is set to 3)
    const [activeKey, setActiveKey] = useState('3');

    // Event handler for tab selection
    const handleSelect = (eventKey) => {
        setActiveKey(eventKey);
    };

    return (
        <Row>
            {/* Left column with the page title*/}
            <Col md={6} xs={12}>
                <h2 className='bold'>Summer referral competition</h2>
            </Col>

            {/* Right column with navigation tabs*/}
            <Col md={6} xs={12} className='d-md-flex justify-content-end align-items-center'>
                <Nav activeKey={activeKey} onSelect={handleSelect}>
                    <Nav.Item>
                        <Nav.Link eventKey="1" className='nav-link'>
                            1h
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="2" className='nav-link'>
                            24h
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="3" className='nav-link'>
                            30d
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link eventKey="4" className='nav-link'>
                            60d
                        </Nav.Link>
                    </Nav.Item>
                </Nav>
            </Col>
        </Row>
    )
}