import {Ingridient} from './shared/ingridient';

export class Recipe {

  name: string;
  description: string;
  imagePath: string;
  ingridients : Ingridient[];

  constructor(name:string,description:string, imagePath:string,ingridients:Ingridient[]){
      this.name = name;
      this.description = description;
      this.imagePath = imagePath;
      this.ingridients = ingridients;
  }
}
