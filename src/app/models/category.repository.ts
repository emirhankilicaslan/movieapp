import { Category } from "./category";

export class CategoryRepository{
    private categories: Category[];

    constructor(){
        this.categories = [
            {id:1,name:"Macera"},
            {id:2, name:"Korku"},
            {id:3, name:"Fantastik"},
            {id:4, name:"Bilim Kurgu"},
        ]
    }
    getCategories(): Category[]{
        return this.categories;
    }
}