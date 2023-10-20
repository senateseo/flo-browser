const months=[
    "January",
    "Faburary",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "Octoboer",
    "November",
    "December"
]

export const lineChartData = {
    labels: months,
    datasets: [
        {
            label: "Transactions",
            data: [65,59,80, 82, 84, 72, 75,79,80, 82, 84, 92,],
            fill: false,
            borderColor: "rgb(10, 10, 10)",
            borderWidth: 1.0,
            tension: 0.5
        }
    ]
}

export const doughnutChartData = {
    labels:["Red", "Blue", "Yellow"],
    datasets: [
        {
            label: "Published",
            data: [300, 50, 100],
            backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
            ],
            hoverOffset: 4
        }
    ]
}