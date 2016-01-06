function aleatorio(maximo, minimo)
{
	var numero = Math.floor(Math.random() * (maximo - minimo + 1) + minimo);
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;
var opciones = ["piedra", "papel", "tijera", "lagarto", "spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

function inicio()
{
    canvas = document.getElementById("canvas");
    rectangulo = canvas.getContext("2d");

    rectangulo.beginPath();
    rectangulo.moveTo(0, 0);
    rectangulo.lineTo(600, 0);
    rectangulo.lineTo(600, 300);
    rectangulo.lineTo(0, 300);
    rectangulo.lineTo(0, 0);
    rectangulo.lineWidth = 5;
    rectangulo.strokeStyle = "black";
    rectangulo.stroke();
    rectangulo.closePath();
}

opcionUsuario = prompt("¿Qué eliges?\n Piedra: 0\n Papel: 1\n Tijera: 2\n Lagarto: 3\n  Spock: 4", 0);
alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javacript eligio: " + opciones[opcionMaquina]);

if(opcionMaquina == opcionUsuario){ alert("Empate")};

if(opcionUsuario == piedra && opcionMaquina == tijera){alert("Ganaste")};
if(opcionUsuario == piedra && opcionMaquina == lagarto){alert("Ganaste")};

if(opcionUsuario == papel && opcionMaquina == piedra){alert("Ganaste")};
if(opcionUsuario == papel && opcionMaquina == spock){alert("Ganaste")};

if(opcionUsuario == tijera && opcionMaquina == papel){alert("Ganaste")};
if(opcionUsuario == tijera && opcionMaquina == spock){alert("Ganaste")};

if(opcionUsuario == lagarto && opcionMaquina == papel){alert("Ganaste")};
if(opcionUsuario == lagarto && opcionMaquina == spock){alert("Ganaste")};

if(opcionUsuario == spock && opcionMaquina == piedra){alert("Ganaste")};
if(opcionUsuario == spock && opcionMaquina == tijera){alert("Ganaste")};

if(opcionUsuario == piedra && opcionMaquina == papel){alert("Perdiste")};
if(opcionUsuario == piedra && opcionMaquina == spock){alert("Perdiste")};

if(opcionUsuario == papel && opcionMaquina == tijera){alert("Perdiste")};
if(opcionUsuario == papel && opcionMaquina == lagarto){alert("Perdiste")};

if(opcionUsuario == tijera && opcionMaquina == piedra){alert("Perdiste")};
if(opcionUsuario == tijera && opcionMaquina == spock){alert("Perdiste")};

if(opcionUsuario == lagarto && opcionMaquina == tijera){alert("Perdiste")};
if(opcionUsuario == lagarto && opcionMaquina == piedra){alert("Perdiste")};

if(opcionUsuario == spock && opcionMaquina == lagarto){alert("Perdiste")};
if(opcionUsuario == spock && opcionMaquina == papel){alert("Perdiste")};

