function start() {
    Clock();
    Img();
    Datum();
}
function Clock(){
    var today = new Date();
    var h = today.getHours();
    var m = today.getMinutes();
    m = checkTime(m);
    document.getElementById('time').innerHTML =
        h + ":" + m;
    var t = setTimeout(Clock, 500);
}
function checkTime(i) {
    if (i < 10) {i = "0" + i};
    return i;
}

function Img(){
    var today = new Date();
    var h = today.getHours();
    console.log(h);

    if(h>=6 && h<=11){
        //change the images ONLY IF YOU KNOW WHAT YOUR DOING   "url('www.yourimage.jpg')" OR change the images in the map and rename.
        document.getElementById('img').style.backgroundImage = "url('img/morning2.jpg')";
        // Change position ONLY IF YOU KNOW WHAY YOU ARE DOING     "-123px"
        document.getElementById('img').style.backgroundPositionY = "-210px";
        // YOU CAN CHANGE YOUR NAME HERE               "Good morning Yourname!"
        document.getElementById('welcome').innerHTML = "Buenos días Visitante!";
    }
    if(h>=12 && h<=16) {
        document.getElementById('img').style.backgroundImage = "url('img/day1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-250px";
        // ALSO CHANGE YOUR NAME HERE                  "Good morning Yourname!"
        document.getElementById('welcome').innerHTML = "Buen día Visitante!";
    }
    if(h>=17 && h<=19) {
        document.getElementById('img').style.backgroundImage = "url('img/noon1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-150px";
        // ALSO CHANGE YOUR NAME HERE                  "Good morning Yourname!"
        document.getElementById('welcome').innerHTML = "Buenas tardes Visitante!";
    }
    if((h>=20 && h<=23) || (h>=0 && h<=5)){
        document.getElementById('img').style.backgroundImage = "url('img/night1.jpg')";
        document.getElementById('img').style.backgroundPositionY = "-240px";
        // ALSO CHANGE YOUR NAME HERE                  "Good morning Yourname!"
        document.getElementById('welcome').innerHTML = "Buenas noches Visitante!";
    }
}
function Datum(){
    var today = new Date();

    var weekday = new Array(7);
    weekday[0]=  "Domingo";
    weekday[1] = "Lunes";
    weekday[2] = "Martes";
    weekday[3] = "It is Wednesday my dudes!";
    weekday[4] = "Jueves";
    weekday[5] = "Viernes";
    weekday[6] = "Sábado";

    var day = weekday[today.getDay()];

    var d = today.getDate();

    var month = new Array(12);
    month[0] = "Enero";
    month[1] = "Febrero";
    month[2] = "Marzo";
    month[3] = "Abril";
    month[4] = "Mayo";
    month[5] = "Junio";
    month[6] = "Julio";
    month[7] = "Agosto";
    month[8] = "Septiembre";
    month[9] = "Octubre";
    month[10] = "Noviembre";
    month[11] = "Diciembre";

    var m = month[today.getUTCMonth()];

    var total = day + " | " + d + " | " + m;
    console.log(total);

    document.getElementById('datum').innerHTML = total;
}
