import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class OperationService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/operation/list');
  }

  save(operation: any) {
    return this.http.post(environment.appContext + '/operation/save', operation);
  }

  getOperation(id: any) {
    return this.http.get(environment.appContext + '/operation/' + id);
  }

  update(operation: any) {
    return this.http.put(environment.appContext + '/operation', operation);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/operation/' + id);
  }
}
