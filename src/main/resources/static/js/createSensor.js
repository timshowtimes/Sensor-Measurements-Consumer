function createSensor() {
    const ok = "Сенсор был успешно добавлен!";
    const URL = "http://localhost:8181/sensors/registration";
    let responseContainer = document.getElementById("responseContainer");
    let name = document.getElementById("sensorName").value;
    let data = {
        "name": name
    }
    sendDataToServer(URL, data, ok, responseContainer);
}

