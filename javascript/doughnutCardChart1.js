new Chart(document.getElementById("doughnutCardChart1"), {
    type: 'doughnut',
    data: {
      datasets: [{
      
        backgroundColor: ["#3e95cd", "#8e5ea2","#3cba9f","#e8c3b9","#c45850"],
        data: [546,200]
      }]
    },
    options: {
      title: {
        display: true,
        text: 'Total Revenue'
      }
    }
});
