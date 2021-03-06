import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Category} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  constructor(
    private http: HttpClient
  ) {}

  fetch(): Observable<Category[]> {
    return this.http.get<Category[]>('https://61aba6a8264ec200176d42aa.mockapi.io/api/v1/category')
  }
}
