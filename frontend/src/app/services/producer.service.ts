import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";

@Injectable()
export class ProducerService {

  constructor(private http: HttpClient) {

  }

  list() {
    return this.http.get(environment.appContext + '/producer/list');
  }

  save(producer: any) {
    return this.http.post(environment.appContext + '/producer/save', producer);
  }

  getProducer(id: any) {
    return this.http.get(environment.appContext + '/producer/' + id);
  }

  update(producer: any) {
    return this.http.put(environment.appContext + '/producer', producer);
  }

  delete(id: any) {
    return this.http.delete(environment.appContext + '/producer/' + id);
  }
}
