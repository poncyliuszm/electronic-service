import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class PartService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/part/list');
  }

  save(part: any) {
    return this.http.post(environment.appContext + '/part/save', part);
  }

  getPart(id: any) {
    return this.http.get(environment.appContext + '/part/' + id);
  }

  update(part: any) {
    return this.http.put(environment.appContext + '/part', part);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/part/' + id);
  }
}
