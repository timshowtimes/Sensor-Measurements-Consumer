function showRainyDayCount(rainyDaysContainer) {
    let rainyDayButton = document.createElement('button');
    rainyDayButton.innerHTML = 'Кол-во дождливых дней: ';
    rainyDaysContainer.appendChild(rainyDayButton);
    rainyDayButton.classList.add('rainyDaysButton');
    rainyDayButton.addEventListener('click', function () {
        fetch('http://localhost:8181/measurements/rainyDaysCount')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Ошибка получения данных');
                }
                return response.text();
            })
            .then(data => {
                let countSpan = document.createElement('span');
                countSpan.textContent = data;
                countSpan.classList.add('rainyCount');
                rainyDaysContainer.appendChild(countSpan);
                rainyDayButton.disabled = true;
            })
    });

}