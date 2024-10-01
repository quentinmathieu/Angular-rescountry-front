import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  standalone: true,
  imports:[CommonModule, ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})

export class HomeComponent {
  country = new FormControl('');

  public title : string;
  public intro : string;
  public description : string;

  public capital: string = "";
  public population: string = "";
  public currency: string = "";
  public language: string ="";
  
  constructor(private readonly http: HttpClient){
    this.title = "Country Infos" ;
    this.intro = "Get all info of a country" ;
    this.description = "Put a country name right above in the field";
  }

  displayCountry(){
    return this.http.get("https://restcountries.com/v3.1/name/" + this.country.value).subscribe((data:any) => {
      console.log(data[0]['currencies'][Object.keys(data[0]['currencies'])[0]]);
      this.capital = data[0]['capital'];
      this.population = data[0]['population'] + " habitants";
      this.currency = data[0]['currencies'][Object.keys(data[0]['currencies'])[0]]['name'];
      this.language = data[0]['languages'][Object.keys(data[0]['languages'])[0]];
    });
  }
}
