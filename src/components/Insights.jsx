import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLightbulb, faSquareCaretDown, faSquareCaretUp } from '@fortawesome/free-solid-svg-icons';

export const Insights = () => {

    return (
        <div className="custom-card">
            <h1 className='bold'>ZooTools insights</h1>
            <h4>
                Making analytics simple and actionable
            </h4>
            <br></br>
            <Row>
                <Col md={6} xs={12}>
                    <h4 className='bold'>
                        Summary
                    </h4>
                    <div className='insights'>
                        <h1><FontAwesomeIcon icon={faSquareCaretDown} className="down-arrow" /></h1>
                        <p><b>Signups are slowing down.</b> -5% new than last week</p>
                    </div>

                    <div className='insights'>
                        <h1><FontAwesomeIcon icon={faSquareCaretUp} className="up-arrow" /></h1>
                        <p><b>80%</b> of your signups were invited by other members</p>
                    </div>

                    <div className='insights'>
                        <h1><FontAwesomeIcon icon={faLightbulb} className="light-bulb" /></h1>
                        <p><b>80%</b> of your signups were invited by a friend</p>
                    </div>

                    <div className='insights'>
                        <h1><FontAwesomeIcon icon={faLightbulb} className="light-bulb" /></h1>
                        <p><b>80%</b> of your signups were invited by a friend</p>
                    </div>
                </Col>

                <Col md={6} xs={12}>
                    <h4 className='bold'>
                        Recommendation
                    </h4>
                    <p className='bold'>
                        Make sure to promote and share your form
                    </p>
                    <p className='bold'>
                        Congrats! This is huge. Keep giving rewards for your users
                    </p>

                </Col>
            </Row>
        </div>
    )

};