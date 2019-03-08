const alertBox = document.querySelector("#alert");
const alertText = alertBox.querySelector("#alertText");
const alertToggle = alertBox.querySelector("#alertToggle");

alertToggle.addEventListener("click", (e)=> {
    alertBox.className = "alert--hidden"
})

// this section toggles mobile search field
const mobileSearchButton = document.querySelector("#mobileSearchButton");

mobileSearchButton.addEventListener("click", (e)=>{
    const searchField = mobileSearchButton.nextElementSibling;
    searchField.hidden? searchField.hidden=false:searchField.hidden=true;
})

// this section adds function to notification toggle
const header = document.querySelector("#header");
const notification = header.querySelector(".header__notification");
const notifMessageDot = header.querySelector(".header__notification--new-message");
const notifLog = header.querySelector(".header__log");
const recentActivityLog = document.querySelector("#recentActivity .log");

notification.addEventListener("click", (e)=> {
    notifMessageDot.style.display = "none";
    notifLog.hidden? notifLog.hidden = false: notifLog.hidden = true;
    notifLog.innerHTML = recentActivityLog.innerHTML
})

// this section add functions to message section
const messageSearchUser = document.querySelector("#messageSearchUser");
const messageText = document.querySelector("#messageText");
const messageSubmit = document.querySelector("#messageSubmit");

messageSubmit.addEventListener("click", (e) => {
    e.preventDefault();
    if (messageSearchUser.value === "") {
        alertText.textContent = "You forgot to add a user name";
    } else if (messageText.value === "") {
        alertText.textContent = "You forgot to add message";
    } else {
        alertText.textContent = `You sent a message to ${messageSearchUser.value}`
    };
    alertBox.className = "alert"
})




// This section implement chartjs via <canvas>
const trafficChart = document.getElementById("trafficChart").getContext("2d");
const dailyTrafficChart = document.getElementById("dailyTrafficChart").getContext("2d");
const mobileUserChart = document.getElementById("mobileUserChart").getContext("2d");

let myTrafficChart = new Chart(trafficChart, {
    type: 'line',
    data: {
        labels: ["16-22",
                 "23-29",
                 "30-5",
                 "6-12",
                 "13-19",
                 "20-26",
                 "27-3",
                 "4-10",
                 "11-17",
                 "18-24",
                 "25-31"
                ],
        datasets: [{
            label: 'Traffic',
            data: [0, 750, 1250, 1000, 1500, 2000, 1500, 1750, 1250, 1750, 2250, 1750, 2250],
            backgroundColor: ['rgba(116, 119, 191, 0.2)'],
            borderColor: ['rgba(77,16,114,1)'],
            borderWidth: .5,
            borderCapStyle: 'round',
            borderJoinStyle: 'milter',
            lineTension: 0,
            pointBackgroundColor: 'white',
            pointBorderWidth: 2,
            pointRadius: 5,
        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 7,
        // -----------------------------
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
    }
});

const myDailyTrafficChart = new Chart(dailyTrafficChart, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            label: 'Daily Traffic',
            data: [75, 100, 175, 125, 225, 200, 100],
            backgroundColor: 'rgb(116, 119, 191)',
            borderColor: 'rgb(116, 119, 191)',
            borderWidth: 2,
          hoverBackgroundColor: 'rgb(116, 119, 191, 0.7)'

        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 0,
        // -----------------------------
        legend: {
          display: false
        },
        scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
        }
    }
});

const myMobileChart = new Chart(mobileUserChart, {
    type: 'doughnut',
    data: {
        labels: ["Phones", "Tablet", "Desktop"],
        datasets: [{
            label: 'Mobile Users',
            data: [75, 12.5, 12.5],
            backgroundColor: ['rgb(116, 119, 191)', 'rgb(129, 201, 143)', 'rgb(116, 177, 191)'],
            borderColor: ['rgb(116, 119, 191)', 'rgb(129, 201, 143)', 'rgb(116, 177, 191)'],
            borderWidth: 2,
          hoverBackgroundColor: ['rgb(116, 119, 191, 0.7)', 'rgb(129, 201, 143, 0.7)', 'rgb(116, 177, 191, 0.7)'],
          hoverBorderWidth: 5
        }]
    },
    options: {
        // Chart Responsiveness --------
        responsive: true,
        responsiveAnimationDuration: 500,
        maintainAspectRatio: false,
        aspectRatio: 1,
        // -----------------------------
        legend: {
          display: true,
          position: "right",
        },
        rotation: 2 * Math.PI
    }
});
