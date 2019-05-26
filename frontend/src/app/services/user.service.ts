import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class UserService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/user/list');
  }

  save(user: any) {
    return this.http.post(environment.appContext + '/user/save', user);
  }

  getUser(id: any) {
    return this.http.get(environment.appContext + '/user/' + id);
  }

  update(user: any) {
    return this.http.put(environment.appContext + '/user', user);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/user/' + id);
  }
}
