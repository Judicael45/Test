import { Component,OnInit, } from '@angular/core';
import {Recette} from "./recette/Recette"
import { RECETTES } from "./recette/RecetteList";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  title = 'angunow';
  recetteList : Recette[] = RECETTES
  recetteSelected:Recette|undefined
  ngOnInit():void
  {
    console.log(this.recetteList);
    //this.selectRecette(this.recetteList[0])
    
  }
  selectRecette(RecetteId:string):void
  {
    const index:number = parseInt(RecetteId)
    const recette:Recette|undefined = this.recetteList.find(rec=>rec.id === index)
  if(recette)
    console.log(`Vous avez selectionné ${recette.steps}`);
  else
    console.log("aucune recette correspondante");
    this.recetteSelected = recette
  }
  
}
