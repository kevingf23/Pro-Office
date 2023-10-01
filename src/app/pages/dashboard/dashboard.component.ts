import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';
import { Elecciones } from 'src/app/model/elecciones';
import { HttpClient } from '@angular/common/http';
import { inject } from '@angular/core';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  title = 'consumoapi-app';

  eleccion: Elecciones[] = [];


  changeTitle(){
    this.title = 'pruebatitulo';
  }
  medicList: any[] = [];

  constructor(
    private http: HttpClient // Inyectar HttpClient
  ) {}

  ngOnInit(): void {
    // Realizar la solicitud HTTP a la API para obtener el listado de médicos
    this.http.get('https://localhost:7233/Elecciones/Elecciones')
      .subscribe(
        (data: any[]) => { // Observa un arreglo de objetos, no un objeto único
          // Imprimir los datos en la consola
          console.log('Datos de la API:', data);
  
          // Comprueba si data es un arreglo con al menos un elemento
          if (data.length > 0) {
            // Actualiza medicList con los datos reales de la API
            this.medicList = data;
            console.log(this.medicList);
          } else {
            console.error('La respuesta de la API no contiene datos.');
          }
        },
        (error) => {
          console.error('Error al obtener datos de la API', error);
        }
      );
  }
}
