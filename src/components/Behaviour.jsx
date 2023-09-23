import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

// Traffic Data
const behaviourData = [
    { country: 'United States', signups: 30000 },
    { country: 'Germany', signups: 20000 },
    { country: 'Netherlands', signups: 10000 },
    { country: 'India', signups: 5000 },
    { country: 'Japan', signups: 3000 },
    { country: 'Other', signups: 2000 }
];

export const Behaviour = () => {

    // Button Handling
    const [selectedButton, setSelectedButton] = useState('button1');

    const handleButtonClick = (buttonId) => {
        setSelectedButton(buttonId);
    };

    // Extract sources and signups for chart data
    const sources = behaviourData.map(item => `  ${item.country}`);
    const signups = behaviourData.map(item => item.signups);

    const chartData = {
        labels: sources,

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
                    <h4><b>Behaviour</b></h4>
                </Col>
                <Col className="text-end">
                    <button className={`toggle-button ${selectedButton === 'button1' ? 'selected' : ''}`} onClick={() => handleButtonClick('button1')}>
                        <h5>Browsers</h5>
                    </button>
                    <button className={`toggle-button ${selectedButton === 'button2' ? 'selected' : ''}`} onClick={() => handleButtonClick('button2')}>
                        <h5>Decides</h5>
                    </button>
                </Col>
            </Row>
            <Row>
                <Col md={5}>
                    <Bar data={chartData} options={chartOptions} style={{ marginTop: 8 }} />
                </Col>
                <Col md={7} style={{ textAlign: 'right' }}>
                    {behaviourData.map((item, index) => (
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