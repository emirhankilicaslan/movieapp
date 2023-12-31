import { Component } from '@angular/core';
import { Category } from '../models/category';
import { CategoryService } from '../services/category.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-category-create',
  templateUrl: './category-create.component.html',
  styleUrls: ['./category-create.component.css'],
  providers: [CategoryService]
})
export class CategoryCreateComponent {

  constructor(private categoryService: CategoryService, private router: Router){}
  createCategory(name: string){
    const category: Category = {
      name: name
    }
    this.categoryService.createCategory(category).subscribe(data=>{
      console.log(data);
      this.router.navigate(["/"]);
    })
  }
}
