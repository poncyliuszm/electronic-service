import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ElectronicServiceService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/electronicService/list');
  }

  save(electronicService: any) {
    return this.http.post(environment.appContext + '/electronicService/save', electronicService);
  }

  getElectronicService(id: any) {
    return this.http.get(environment.appContext + '/electronicService/' + id);
  }

  update(electronicService: any) {
    return this.http.put(environment.appContext + '/electronicService', electronicService);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/electronicService/' + id);
  }
}
