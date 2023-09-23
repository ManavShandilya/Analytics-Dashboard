import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

// SignupLocation Data
const signupLocationData = [
    { country: 'United States', signups: 30000, flag: 'https://thumbs.dreamstime.com/b/american-flag-white-background-vector-illustration-american-flag-white-113449743.jpg' },
    { country: 'Germany', signups: 20000, flag: 'https://cdn.countryflags.com/thumbs/germany/flag-waving-250.png' },
    { country: 'Netherlands', signups: 10000, flag: 'https://cdn.countryflags.com/thumbs/netherlands/flag-waving-250.png' },
    { country: 'India', signups: 5000, flag: 'https://cdn.countryflags.com/thumbs/india/flag-waving-250.png' },
    { country: 'Japan', signups: 3000, flag: 'https://cdn.countryflags.com/thumbs/japan/flag-waving-250.png' },
    { country: 'Other', signups: 2000, flag: 'https://icons.iconarchive.com/icons/treetog/junior/256/earth-icon.png' }
];


export const SignupLocation = () => {

    // Button Handling
    const [selectedButton, setSelectedButton] = useState('button1');

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    // Extract countries and signups for chart data
    const countries = signupLocationData.map(item => `  ${item.country}`);
    const signups = signupLocationData.map(item => item.signups);

    const chartData = {
        labels: countries,

        datasets: [
            {
                data: signups,
                backgroundColor: 'rgba(255, 246, 169, 0.8)',
                borderRadius: 8,
                borderSkipped: false,
                barPercentage: 0.90,
            },
        ],
    };

    const chartOptions = {
        maintainAspectRatio: false, // Fills container
        indexAxis: 'y', // Set to 'y' for horizontal bar chart
        scales: {
            x: {
                display: false, // Hide x-axis labels
            },
            y: {
                display: true,
                ticks: {
                    mirror: true, //Show y-axis labels inside horizontal bars
                    z: 10,
                    color: 'black', // Set font color to black
                    font: {
                        size: 20,
                    },
                },
                border: {
                    display: false,
                },
                grid: {
                    display: false, // Hide horizontal grid lines
                },
            },
        },
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: false, // disable tooltip
            },
        },
    };


    return (
        <div className="custom-card">
            <Row>
                <Col>
                    <h4><b>Signup location</b></h4>
                </Col>
                <Col className="text-end">
                    <button className={`toggle-button ${selectedButton === 'button1' ? 'selected' : ''}`} onClick={() => handleButtonClick('button1')}>
                        <h5>Country</h5>
                    </button>
                    <button className={`toggle-button ${selectedButton === 'button2' ? 'selected' : ''}`} onClick={() => handleButtonClick('button2')}>
                        <h5>City</h5>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col md={1} style={{ paddingRight: 0, paddingTop: 0 }}>
                    {/* Display the flag images */}
                    {signupLocationData.map((item, index) => (
                        <img src={item.flag} alt={item.country} key={index} style={{ width: '35px', paddingTop: 25 }} />
                    ))}
                </Col>
                <Col md={5} style={{ paddingLeft: 0 }}>
                    <Bar data={chartData} options={chartOptions} style={{ marginTop: 8 }} />
                </Col>
                <Col md={6} style={{ textAlign: 'right' }}>
                    {signupLocationData.map((item, index) => (
                        <h4 className='data' key={index}>{item.signups.toLocaleString()}</h4>
                    ))}
                </Col>
            </Row>
            <button className='custom-button' style={{ marginTop: 0 }}>
                See all countries
            </button>
        </div>
    )

};