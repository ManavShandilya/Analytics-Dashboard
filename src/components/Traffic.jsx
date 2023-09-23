import React, { useState } from 'react';
import { Row, Col } from 'react-bootstrap';
import { Bar } from 'react-chartjs-2';

// Traffic Data
const trafficData = [
  { source: 'Google', signups: 30000 },
  { source: 'Twitter', signups: 20000 },
  { source: 'Facebook', signups: 10000 },
  { source: 'LinkedIn', signups: 5000 },
  { source: 'YouTube', signups: 3000 },
  { source: 'Other', signups: 2000 }
];

const ToggleButton = ({ label, selected, onClick }) => (
  <button
    className={`toggle-button ${selected ? 'selected' : ''}`}
    onClick={onClick}
  >
    <h5>{label}</h5>
  </button>
);

export const Traffic = () => {
  const [selectedButton, setSelectedButton] = useState('button1');

  const handleButtonClick = (buttonId) => {
    setSelectedButton(buttonId);
  };

  const sources = trafficData.map(item => `  ${item.source}`);
  const signups = trafficData.map(item => item.signups);

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
    maintainAspectRatio: false,
    indexAxis: 'y',
    scales: {
      x: { display: false },
      y: {
        display: true,
        ticks: {
          mirror: true,
          z: 10,
          color: 'black',
          font: { size: 20 },
        },
        border: { display: false },
        grid: { display: false },
      },
    },
    plugins: {
      legend: { display: false },
      tooltip: { enabled: false },
    },
  };

  return (
    <div className="custom-card">
      <Row>
        <Col>
          <h4>
            <b>Traffic</b>
          </h4>
        </Col>
        <Col className="text-end">
          <ToggleButton
            label="Source"
            selected={selectedButton === 'button1'}
            onClick={() => handleButtonClick('button1')}
          />
          <ToggleButton
            label="City"
            selected={selectedButton === 'button2'}
            onClick={() => handleButtonClick('button2')}
          />
        </Col>
      </Row>
      <Row>
        <Col md={5}>
          <Bar data={chartData} options={chartOptions} style={{ marginTop: 8 }} />
        </Col>
        <Col md={7} className="text-right">
          {trafficData.map((item, index) => (
            <h4 className="data" key={index}>
              {item.signups.toLocaleString()}
            </h4>
          ))}
        </Col>
      </Row>
      <button className="custom-button mt-0">
        See traffic sources
      </button>
    </div>
  );
};
