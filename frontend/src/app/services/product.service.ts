import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ProductService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/product/list');
  }

  save(product: any) {
    return this.http.post(environment.appContext + '/product/save', product);
  }

  getProduct(id: any) {
    return this.http.get(environment.appContext + '/product/' + id);
  }

  update(product: any) {
    return this.http.put(environment.appContext + '/product', product);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/product/' + id);
  }
}
