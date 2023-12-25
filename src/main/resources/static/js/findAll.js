function findAll() {
    const listContainer = document.getElementById("list-container");
    const rainyDaysContainer = document.getElementById('rainyDaysDiv');
    const graphContainer = document.getElementById('graphic');
    fetch('http://localhost:8181/measurements')
        .then(response => response.json())
        .then(data => {
            if (Object.keys(data).length > 0) {
                sendDataToShowGraphic(data, graphContainer);
                showRainyDayCount(rainyDaysContainer);
                data.forEach(function (item, index) {
                    const combinedValue = `Сенсор: ${item.sensor.name}, Темп: ${item.value},
                Дождь: ${item.raining ? 'Да' : 'Нет'} `;

                    let li = document.createElement('li');
                    if (index % 2 === 0) {
                        li.style.backgroundColor = 'rgb(21, 37, 45)';
                        li.style.borderBottom = '2px solid';
                        li.style.borderColor = '#bd8c8c';
                        li.style.color = 'rgb(234, 169, 112)';
                    }
                    li.style.minWidth = '19.4em';
                    li.textContent = combinedValue;
                    listContainer.appendChild(li);
                    document.getElementById('listOfMeasurements').disabled = true;
                })

                hideButtonActivity(listContainer, rainyDaysContainer);
            } else {
                let emptyText = document.createElement('p');
                emptyText.textContent = 'Нет ни одного сенсора';
                listContainer.appendChild(emptyText)
            }
        })
        .catch(error => {
            console.log('Error while getting data: ' + error);
        })
}

function hideButtonActivity(listContainer, rainyDaysContainer) {
    const submitDiv = document.getElementById('submitToShowSensorList');
    let button = document.createElement('button');
    button.classList.add('hideListButton');
    button.innerHTML = 'Скрыть';
    submitDiv.appendChild(button);
    button.addEventListener('click', function() {
        listContainer.innerHTML = '';
        rainyDaysContainer.innerHTML = '';
        button.remove();
        graphButtonRemove();
        document.getElementById('graphImage').innerHTML = '';
        document.getElementById('listOfMeasurements').disabled = false;
    });
}