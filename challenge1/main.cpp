// Vanessa Méndez Palacios A01639925
// Challenge 1 - Lines drawing algorithm
// Bresenham's line algorithm
// Programa en C++

/*Para correr el programa se debe dar click en el boton de correr 
e ingresar en la consola el valor de "x" y "y" del punto 0 y punto 1*/

#include <iostream>
#include <bits/stdc++.h>
using namespace std;

void plotLine(int x0, int y0, int x1, int y1) {
  
  int dx = x1 - x0;
  int m = 2 * (y1 - y0);
	int D = m - (x1 - x0);
  int y = y0;
  
	for (int x = x0; x <= x1; x++) {
		cout << x << "," << y << "\n";
    D += m;
		if (D >= 0) {
			y++;
			D = D - (2 * dx);
		}
	}
  
}

int main() {
  int x0, y0, x1, y1;
  // punto 0
  cout << "Punto 0 (x,y): " << endl;
	cin >> x0;
  cin >> y0;
  // punto 1
  cout << "Punto 1 (x,y): " << endl;
  cin >> x1;
  cin >> y1;

	plotLine(x0, y0, x1, y1);
  
	return 0;
}