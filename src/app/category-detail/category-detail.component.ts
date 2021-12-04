import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params} from "@angular/router";
import {ProductService} from "../shared/services/product.service";
import {Category, Product} from "../shared/interfaces";
import {Observable} from "rxjs";
import {CategoriesService} from "../shared/services/categories.service";

@Component({
  selector: 'app-category-detail',
  templateUrl: './category-detail.component.html',
  styleUrls: ['./category-detail.component.scss']
})
export class CategoryDetailComponent implements OnInit {

  categories: Category[] = []
  products$: Observable<Product[]>|undefined
  categoryId: string = ''
  categoryTitle: string = ''

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private categoriesService: CategoriesService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe((params: Params)=>{
      this.categoryId = params['id']
      this.products$ = this.productService.fetch(this.categoryId)

      this.categoriesService.fetch().subscribe(categories =>{
        this.categories = categories
        const category = this.categories.filter((category)=> category.id === this.categoryId);
        this.categoryTitle = category[0].name
      })
    })
  }



}
