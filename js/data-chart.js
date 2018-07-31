var ctx = document.getElementById('canvas').getContext('2d');

var states = new Array();
var diabetes = new Array();
var income = new Array();

for (var i = 0; i < data.length; i++) {
    states[i] = data[i].state
}; 

for (var i = 0; i < data.length; i++) {
    diabetes[i] = data[i].percent_diabetes
};

for (var i = 0; i < data.length; i++) {
    income[i] = data[i].mean_income
};

var chartData = {
    labels: states,
    datasets: [{
        type: 'line',
        label: 'Percent of Adults with Diabetes',
        pointBackgroundColor: '#FF533D',
        backgroundColor: '#FF533D',
        data: diabetes,
        yAxisID: 'diabetes-axis',
        showLine: false,
        pointRadius: 5
    }, {
        type: 'bar',
        label: 'Mean Income',
        backgroundColor: '#AB987A',
        data: income,
        yAxisID: 'income-axis' 
    }]
};

var option = {
    responsive: true,
    maintainAspectRatio: false,
    title: {
        display: true,
        text: 'Interactive Chart Visualizing Diabetes Prevalence and Income by US State'
    },
    tooltips: {
        mode: 'index',
        intersect: true
    },
    scales:{ 
        yAxes: [{
            position: 'left',
            'id': 'income-axis', 
            ticks: {
                min: 20000,
                max: 110000,
                callback: function(value, index, values) {
                        return '$' + value;
                }
            },
            scaleLabel: {
                display: true,
                labelString: 'Mean Income in US Dollars'
            }
        }, {
            position: 'right',
            'id': 'diabetes-axis',
            ticks: {
                min: 0,
                max: 18,
                callback: function(value, index, values) {
                        return value + '%';
                }
            },
            scaleLabel: {
                display: true,
                labelString: 'Percent of Adults with Diabetes'    
            }    
        }], 
        xAxes: [{
            gridLines: {display: false},
            ticks: {autoSkip: false}
        }]
    }
};

var chart = new Chart(ctx, {
    type: 'bar',
    data: chartData,
    options: option
});
