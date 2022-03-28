import { Component, Input, OnInit } from '@angular/core';
import { ConfigUrlService } from '../service/config-url.service';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs';
import { NgForm, NgModel } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  @Input() Ingredientform: any

  constructor(public urlService: ConfigUrlService) { }

  ingredientName = <any>[];
  cocktailId = <any>[];

  ngOnInit(): void {}


  getCocktails(ingredient: any) {
    let strIngredient = JSON.stringify(ingredient)
    console.log("mon Ingredient:"+ ingredient);
    console.log("mon STR Ingredient:"+ strIngredient);

    this.urlService.getCocktailsByIngredientName(ingredient)     
      .subscribe(
          (result) => { 
            this.ingredientName = result  
            console.log(this.ingredientName);                      
          }
      );    
  }

  getCocktailById() {
    this.urlService.getCocktailById()
      .subscribe(
        (result) => {
          this.cocktailId = result
          console.log(this.cocktailId);
          
        }
      )

  }  

  
}   
