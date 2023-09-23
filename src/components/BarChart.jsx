import { Bar } from "react-chartjs-2";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from "chart.js";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export const BarChart = () => {
    const options = {
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                callbacks: {
                    title: (context) => {
                        return `${context[0].formattedValue} signups`;
                    },
                    label: (context) => {
                        return context.label;
                    }
                },
                titleFont: {
                    size: 16,
                    weight: 'bold'
                },
                bodyFont: {
                    size: 14,
                },
                displayColors: false,
                backgroundColor: 'rgba(255, 255, 255, 1)',
                padding: 20,
                bodyColor: '#666666',
                titleColor: '#000',
                titleAlign: 'center',
                bodyAlign: 'center',
                borderColor: 'rgba(0, 0, 0, 1)',
                borderWidth: 0.13,
            },
        },
        scales: {
            x: {
                display: false, // Hide x-axis labels
            },
            y: {
                border: {
                    display: false,
                },
                ticks: {
                    display: false,
                    count: 8,
                },
                grid: {
                    drawOnChartArea: true,
                    color: 'rgba(0, 0, 0, 0.1)',
                    lineWidth: 0.5,
                    borderDash: [5, 5],
                },

            }
        }
    };

    const data = {
        // Dates
        labels: [
            "July 24", "July 25", "July 26", "July 27", "July 28", "July 29",
            "July 30", "July 31", "August 1", "August 2", "August 3", "August 4",
            "August 5", "August 6", "August 7", "August 8", "August 9", "August 10",
            "August 11", "August 12", "August 13", "August 14", "August 15",
            "August 16", "August 17", "August 18", "August 19", "August 20",
            "August 21", "August 22", "August 23", "August 24", "August 25", "August 26"
        ],
        datasets: [
            {
                // Signup values for every date
                data: [
                    700, 900, 1300, 1100, 1300, 1020, 1270, 1280, 1390, 1490,
                    1500, 1670, 1600, 1760, 1700, 1800, 1920, 2100, 2000, 2260,
                    2390, 2100, 2400, 2300, 2650, 2500, 2600, 2400, 2300,
                    2800, 2600, 2760, 2800, 3000
                ],

                maxBarThickness: 18,
                BarThickness: 18,
                backgroundColor: "rgba(255, 198, 0, 0.83)",
                borderRadius: 8,
                borderSkipped: false,
            },

        ],

    };

    const participantsSum = 100000  // Calculate total number of participants by adding the values in data (Harcoded for now)

    return (
        <div className="custom-card">
            <h1 className="bold">
                {participantsSum.toLocaleString()}
                <FontAwesomeIcon icon={faUserGroup} className="user-icon" />
            </h1>
            <h4>
                Participants
            </h4>
            <div className="chart">
                <Bar options={options} data={data} />
            </div>
        </div>
    );
};