import { Component, OnInit } from '@angular/core';
import { JwtHelperService } from "@auth0/angular-jwt";
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  username: string;
  salario: number = 0
  renta: number = 0

  constructor() { }

  ngOnInit(): void {
    const helper = new JwtHelperService();
    const decodedToken = helper.decodeToken(localStorage.getItem(environment.TOKEN_NAME));
    this.username = decodedToken.name;
    let token = sessionStorage.getItem(environment.TOKEN_NAME);

  }

  pressKey(miVariable: any) {
    console.log("test")
    this.salario =+miVariable.target.value

    if (this.salario >= 0.01) {

      this.renta = 0
    }
  }

  

}
