//Necesitamos crear un sistema para una máquina de reciclaje de botellas automática. Dicha
//máquina nos pagará dinero por la cantidad de plástico reciclado. Tenemos que ingresar
//nuestro usuario y contraseña para que se nos cargue el saldo por sistema a nuestra
//cuenta.

// Condición simple anidada: validaremos que el usuario sea "Albus_D", luego si esto es
// verdadero, validaremos si la contraseña es "caramelosDeLimon". Si la contraseña es
// correcta haremos que una variable llamada Login sea verdadera.

//  Bucle Mientras: 
// Este bloque de validación de la contraseña lo encerraremos en un
//	bucle Mientras para darle al usuario sólo 3 intentos para poner la contraseña.


// Bucle Hacer Mientras(Repetir): Una vez que el login sea verdadero, accederemos al
//	menú de opciones:
//			o Ingresar botellas
//			o Consultar saldo
//			o Salir

//Ingresar Botellas: Primero preguntaremos cuántas botellas se va a ingresar al sistema.
//	Una vez que tenemos el número vamos a usar un bucle para, a fin de ir ingresando
//		cada botella. En cada ciclo del bucle se debe generar un número aleatorio entre 100 y
//		3000 gr, que va a ser el peso de las botellas a reciclar (simulando que el usuario está
//		ingresando botellas en la máquina). Una vez generado, según el peso del material,
//	usaremos un condicional múltiple para asignarle un valor monetario:
//			o Si es menos de 500 gr, corresponden $50
//			o Si es entre 501 gr y 1500 gr, corresponden $125
//			o Si es más de 1501 gr, corresponden $200
//Hecho esto, el programa debe informar al usuario por pantalla el valor que se le
//ofrece. Si el usuario acepta, lo acreditamos a su saldo, sino se debe devolver el
//		material (sólo mostrar en pantalla "Devolviendo material"). Para esto usaremos un
//			condicional doble.


//Consultar saldo: revisaremos el valor monetario que tiene asignada la variable "saldo".

//Tanto al terminar "Ingresar Botellas" como "Consultar Saldo" debe volver al menú
//principal.


Algoritmo sin_titulo
	definir user, pass como cadena
	definir login, perfecto,aceptar Como Logico
	definir contador, menu, botellas,pesos,total Como Entero
	contador = 1
	login = falso 
	Escribir "ingresar usuario "
	leer user  	//Albus_D
	Mientras user <> "admin" y contador < 3  Hacer
		Escribir "ingresar usuario "
		leer user 
		contador = contador + 1
		si contador = 3 Entonces
			Escribir "ya supero sus intentos de usuarios"
		FinSi
	Fin Mientras
	
	si user ==  "admin" Entonces //Albus_D
		Escribir "ingresar password"
		leer pass //"caramelosDeLimon".
		contador = 1
		Mientras pass <> "pass" y contador < 3  Hacer
			Escribir "ingrese de nuevo su password"
			leer pass 
			contador = contador + 1
			si contador = 3 Entonces
				Escribir "ya supero sus intentos de password"
			FinSi
		Fin Mientras
		si pass == "pass" Entonces //caramelosDeLimon
			login = Verdadero
			Escribir "		*** 1 -- Ingresar botellas *** "
			Escribir "		***	 2 -- Consultar saldo ***" 
			Escribir "		*** 3 -- salir ***"
			leer menu
			Segun menu Hacer
				1:
					//Ingresar Botellas: Primero preguntaremos cuántas botellas se va a ingresar al sistema.
					//	Una vez que tenemos el número vamos a usar un bucle para, a fin de ir ingresando
					//		cada botella. En cada ciclo del bucle se debe generar un número aleatorio entre 100 y
					//		3000 gr, que va a ser el peso de las botellas a reciclar (simulando que el usuario está
					//		ingresando botellas en la máquina). Una vez generado, según el peso del material,
					//	usaremos un condicional múltiple para asignarle un valor monetario:
					//			o Si es menos de 500 gr, corresponden $50
					//			o Si es entre 501 gr y 1500 gr, corresponden $125
					//			o Si es más de 1501 gr, corresponden $200
					//Hecho esto, el programa debe informar al usuario por pantalla el valor que se le
					//ofrece. Si el usuario acepta, lo acreditamos a su saldo, sino se debe devolver el
					//		material (sólo mostrar en pantalla "Devolviendo material"). Para esto usaremos un
					//			condicional doble.
					
					Escribir "cuantas botellas ingresara??"
					leer botellas
					total = 0
					Para i=1 Hasta botellas Con Paso 1 Hacer
						pesos = aleatorio(100,3000)
						
						si pesos < 500  Entonces
							Escribir " por botella : ", i   " $50"
							total = total + 50
						SiNo
							si pesos > 500 y pesos <= 1500 Entonces
								Escribir " por botella : ", i  " $125"
								total = total + 125
							SiNo
								Si pesos > 1501 Entonces
									Escribir " por botella : ", i  " $200"
									total = total + 200
								FinSi
							FinSi
						FinSi
					Fin Para
					Escribir " el total de las ", botellas,  " botellas es : ", total 
					Escribir "acepta ese monto?" 
					leer aceptar
				2:
					//C
				3:
					//S
				De Otro Modo:
					Escribir "no es una opccion valida"
			Fin Segun
		FinSi
		
	
	FinSi
	
	
	
	// cuando pas y user = true ->e nos cargue el saldo por sistema a nuestra cuenta
	
	
	
FinAlgoritmo
