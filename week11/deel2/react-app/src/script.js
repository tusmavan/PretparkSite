
function calculateFare() {
    var typeTicket = document.querySelector('input[type=radio]:checked')
    var prijs = typeTicket.getAttribute("value");
    var volwassene = Number(document.getElementById('adult').value);
    var kind = Number(document.getElementById('child').value);

    var totaalprijs = (prijs == "Standard") ? (volwassene * 18) + (kind * 8) : (volwassene * 30) + (kind * 15);

    document.getElementById("total-vt").innerHTML = volwassene;
    document.getElementById("total-kt").innerHTML = kind;
    document.getElementById("total-cost").innerHTML = totaalprijs;
}

window.onload = haalweerop();

function haalweerop() {
    const xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://api.open-meteo.com/v1/forecast?latitude=52.44&longitude=5.77&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FLondon&start_date=2022-12-05&end_date=2022-12-05');
    xhr.send();
    xhr.onload = () => {
        const data = JSON.parse(xhr.response);
        let huidig = data.current_weather.temperature.toString();
        let min = data.daily.temperature_2m_min[0];
        let max = data.daily.temperature_2m_max[0];
        document.getElementById("huidigtemp").innerHTML="Huidige temperatuur: "+huidig; 
        document.getElementById("mintemp").innerHTML="Minimale temperatuur: "+min; 
        document.getElementById("maxtemp").innerHTML="Maximale temperatuur: "+max; 
    };
}

function naamtonen() {
    let naam = document.getElementById("denaam").value;
    document.getElementById("jouwnaam").innerHTML= naam;
}

function datepicker() {
    ("#datepicker").datepicker();
  }