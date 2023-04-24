


Algoritmo sin_titulo
	Definir num, contador,tam Como entero //1234.... 10 < 11  - 12
	Definir text como cadena
	Escribir "ingrese numero"
	leer num
	Escribir num 
	text = ConvertirATexto(num)
	tam = longitud(text)
	contador=0
	
	si tam > 11 Entonces
		Escribir "el numero tiene por long ",  tam, " cifras"
	sino
		Mientras num >= 1 Hacer // 1000 - 100 - 10 - 1 /10  0.1
			contador = contador +1 
			num = trunc(num / 10)
		Fin Mientras
		Escribir "el numero tiene por mat ", contador " cifras"
	FinSi
	
FinAlgoritmo