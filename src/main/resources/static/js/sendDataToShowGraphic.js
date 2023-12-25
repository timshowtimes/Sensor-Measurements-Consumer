function sendDataToShowGraphic(data, graphContainer) {
    let graphButton = document.createElement('button');
    graphButton.id = 'graphButton';
    graphButton.innerHTML = 'График температур';
    graphContainer.appendChild(graphButton);
    graphButton.classList.add('graphButton');
    graphButton.addEventListener("click", function() {
        fetch('http://localhost:8181/measurements/build-graphic', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(response => {
                const graphPath = "/graphChart/chart.png";
                const img = document.createElement('img');
                const graphImage = document.getElementById('graphImage');
                img.src = graphPath;
                img.style.height = '25em';
                img.style.width = '27.7em';
                img.style.marginTop = '2em';
                graphImage.appendChild(img);
                graphButton.disabled = true;
            })
            .catch(error => {
                console.log('Error while printing image...' + error);
            })
    })

}

function graphButtonRemove() {
    const graphButton = document.getElementById('graphButton');
    graphButton.remove();
}
