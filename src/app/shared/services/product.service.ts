import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Product} from "../interfaces";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(
    private http: HttpClient
  ) {}

  fetch(id:string): Observable<Product[]> {
    return this.http.get<Product[]>(`https://61aba6a8264ec200176d42aa.mockapi.io/api/v1/category/${id}/product`)
  }
}
