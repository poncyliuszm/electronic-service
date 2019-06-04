import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class DocumentService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/document/list');
  }

  save(document: any) {
    return this.http.post(environment.appContext + '/document/save', document);
  }

  getDocument(id: any) {
    return this.http.get(environment.appContext + '/document/' + id);
  }

  update(document: any) {
    return this.http.put(environment.appContext + '/document', document);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/document/' + id);
  }
}
