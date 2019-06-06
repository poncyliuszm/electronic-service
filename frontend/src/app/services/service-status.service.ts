import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ServiceStatusService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/serviceStatus/list');
  }

  save(serviceStatus: any) {
    return this.http.post(environment.appContext + '/serviceStatus/save', serviceStatus);
  }

  getServiceStatus(id: any) {
    return this.http.get(environment.appContext + '/serviceStatus/' + id);
  }

  update(serviceStatus: any) {
    return this.http.put(environment.appContext + '/serviceStatus', serviceStatus);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/serviceStatus/' + id);
  }
}
