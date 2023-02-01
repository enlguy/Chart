d3.csv('https://drive.google.com/file/d/1PtBrnJikES5r77pURmHB55Y0R8JpCeFr/view?usp=share_link').then(makeChart);

function makeChart(movies) {
    var movieLabels = movies.map(function (d) {
        return d.Film;
    });
    var Score = movies.map(function (d) {
        return d.RTScore;
    });

    var chart = new Chart("myChart", {
        type: "bar",
        data: {
            labels: Film,
            datasets: 
        }
    })
}