import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class InformationForClientService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/informationForClient/list');
  }

  save(informationForClient: any) {
    return this.http.post(environment.appContext + '/informationForClient/save', informationForClient);
  }

  getInformationForClient(id: any) {
    return this.http.get(environment.appContext + '/informationForClient/' + id);
  }

  update(informationForClient: any) {
    return this.http.put(environment.appContext + '/informationForClient', informationForClient);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/informationForClient/' + id);
  }
}
