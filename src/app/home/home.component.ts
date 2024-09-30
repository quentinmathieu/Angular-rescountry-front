import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  public maValeur : string | undefined ;
  
  constructor(){
    this.maValeur = "zqddz World !" ;
  }
}
