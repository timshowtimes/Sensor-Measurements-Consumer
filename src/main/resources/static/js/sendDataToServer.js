function sendDataToServer(URL, data, ok, responseContainer) {
    fetch(URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => {
            if (!response.ok) {
                return response.json().then(errorData => {
                    throw new Error(errorData.message)
                })
            }
            responseContainer.style.borderTop = "4px solid green"
            responseContainer.innerHTML = '';
            let text = document.createElement("div")
            text.textContent = ok;
            text.style.color = '#c5ffc5';
            text.style.fontSize = '0.74em';
            responseContainer.appendChild(text)
        })
        .catch(error => {
            responseContainer.style.borderTop = "4px solid red"
            let errorText = document.createElement("div");
            errorText.textContent = error.message;
            errorText.style.color = '#ffa6a6';
            errorText.style.fontSize = '0.74em';
            responseContainer.innerHTML = '';
            responseContainer.appendChild(errorText)
        })
}