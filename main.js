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
var opcionMaquina = aleatorio(0,2);

opcionUsuario = prompt("¿Qué eliges?\n Piedra: 0\n Papel: 1\n Tijera: 2\n Lagarto: 3\n  Spock: 4", 0);
alert("Elegiste: " + opciones[opcionUsuario]);
alert("Javacript eligio: " + opciones[opcionMaquina]);

if(opcionUsuario == piedra)
{
    if(opcionMaquina == opcionUsuario)
    {
        alert("Empate!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste :( ");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Ganaste");
    }
    else if(opcionMaquina == spock)
    {
        alert("Perdiste");
    }
}

else if(opcionUsuario == papel)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Perdiste");
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste");
    }
}

else if(opcionUsuario == tijera)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste!");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste!");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Perdiste");
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste");
    }
}

else if(opcionUsuario == lagarto)
{
    if(opcionMaquina == piedra)
    {
        alert("Perdiste");
    }
    else if(opcionMaquina == papel)
    {
        alert("Ganaste");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Perdiste");
    }
    else if(opcionMaquina == spock)
    {
        alert("Ganaste");
    }
}

else if(opcionUsuario == spock)
{
    if(opcionMaquina == piedra)
    {
        alert("Ganaste");
    }
    else if(opcionMaquina == papel)
    {
        alert("Perdiste");
    }
    else if(opcionMaquina == tijera)
    {
        alert("Ganaste");
    }
    else if(opcionMaquina == lagarto)
    {
        alert("Perdiste");
    }
}
else
{
    alert("¿Que Putas");
}
