import { Ingredient } from "../shared/ingredient.model";

export class Recipe {
  public name: string;
  public description: string;
  public imagePath: string;
  public geoJsonPath: string;
  public ingredients: Ingredient[];

  constructor(
    name: string,
    desc: string,
    imagePath: string,
    geoJsonPath: string,
    ingredients: Ingredient[]
  ) {
    this.name = name;
    this.description = desc;
    this.imagePath = imagePath;
    this.geoJsonPath = geoJsonPath;
    this.ingredients = ingredients;
  }
}
