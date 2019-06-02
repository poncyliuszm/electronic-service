import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class OrderService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/order/list');
  }

  save(order: any) {
    return this.http.post(environment.appContext + '/order/save', order);
  }

  getOrder(id: any) {
    return this.http.get(environment.appContext + '/order/' + id);
  }

  update(order: any) {
    return this.http.put(environment.appContext + '/order', order);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/order/' + id);
  }
}
