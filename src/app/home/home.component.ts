import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})

export class HomeComponent {
  country = new FormControl('');

  public title : string;
  public intro : string;
  public description : string;
  
  constructor(){
    this.title = "Country Infos" ;
    this.intro = "Get all info of a country" ;
    this.description = "Put a country name right above in the field";
  }

  displayCountry(){
    alert(this.country.value)
  }
}
