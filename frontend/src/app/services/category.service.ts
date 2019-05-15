import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class CategoryService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/category/list');
  }

  save(category: any) {
    return this.http.post(environment.appContext + '/category/save', category);
  }

  getCategory(id: any) {
    return this.http.get(environment.appContext + '/category/' + id);
  }

  update(category: any) {
    return this.http.put(environment.appContext + '/category', category);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/category/' + id);
  }
}
