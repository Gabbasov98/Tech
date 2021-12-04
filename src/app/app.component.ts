import {Component, OnInit} from '@angular/core';
import {Category} from "./shared/interfaces";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {CategoriesService} from "./shared/services/categories.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  isCollapsed = false;
  categories: Category[] = []

  constructor(
    private categoriesService: CategoriesService
  ) {}

  ngOnInit(): void {
    this.categoriesService.fetch().subscribe(categories =>{
      this.categories = categories
    })
  }
}
