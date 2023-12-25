function addMeasurements() {
    const URL = "http://localhost:8181/measurements/add";
    const ok = "Измерения успешно добавились!";
    let temperature = document.getElementById("tempValue").value;
    let raining = document.getElementById("raining").value === "true";
    let sensorName = document.getElementById("sensor").value;
    let responseContainer = document.getElementById("responseMeasurements");

    let data = {
        "value": temperature,
        "raining": raining,
        "sensor":  {
            "name": sensorName
        }
    }

    sendDataToServer(URL, data, ok, responseContainer);
}