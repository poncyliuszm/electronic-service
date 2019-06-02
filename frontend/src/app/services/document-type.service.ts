import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class DocumentTypeService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/documentType/list');
  }

  save(documentType: any) {
    return this.http.post(environment.appContext + '/documentType/save', documentType);
  }

  getDocumentType(id: any) {
    return this.http.get(environment.appContext + '/documentType/' + id);
  }

  update(documentType: any) {
    return this.http.put(environment.appContext + '/documentType', documentType);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/documentType/' + id);
  }
}
