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
var opciones = ["Piedra", "Papel", "Tijera", "Lagarto", "Spock"];
var opcionUsuario;
var opcionMaquina = aleatorio(0,4);

function inicio()
{

}

opcionUsuario = prompt("Que eliges: \n Piedra: 0 \n Papel: 1 \n Tijera: 2 \n Lagarto: 3 \n Spock: 4", 0);
alert("Eligiste: " + opciones[opcionUsuario]);
alert("Javacript eligio: " + opciones[opcionMaquina]);

if(opcionMaquina == opcionUsuario)
{ 
	alert("Empate")
}
else if(opcionUsuario == piedra && opcionMaquina == tijera ||
   opcionUsuario == piedra && opcionMaquina == lagarto ||
   opcionUsuario == papel && opcionMaquina == piedra ||
   opcionUsuario == papel && opcionMaquina == spock ||
   opcionUsuario == tijera && opcionMaquina == papel ||
   opcionUsuario == tijera && opcionMaquina == lagarto ||
   opcionUsuario == lagarto && opcionMaquina == papel ||
   opcionUsuario == lagarto && opcionMaquina == spock ||
   opcionUsuario == spock && opcionMaquina == piedra ||
   opcionUsuario == spock && opcionMaquina == tijera)
{
	alert("Ganaste :)");
}
else if(opcionUsuario == piedra && opcionMaquina == papel ||
   opcionUsuario == piedra && opcionMaquina == spock ||
   opcionUsuario == papel && opcionMaquina == tijera ||
   opcionUsuario == papel && opcionMaquina == lagarto ||
   opcionUsuario == tijera && opcionMaquina == piedra ||
   opcionUsuario == tijera && opcionMaquina == spock ||
   opcionUsuario == lagarto && opcionMaquina == tijera ||
   opcionUsuario == lagarto && opcionMaquina == piedra ||
   opcionUsuario == spock && opcionMaquina == lagarto ||
   opcionUsuario == spock && opcionMaquina == papel)
{
	alert("Perdiste .l.");
}
else
{
	alert("Que estas haciendo pedazo de idiota");
}