import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaderResponse } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class LoginService {
  constructor(private http: HttpClient) {}

  registrarClientes(registro: any): Promise<any> {
    let headers = this.getHeaders();
    let option = new HttpHeaderResponse({ headers: headers });
    let body = {
      title: registro.title,
      body: registro.body,
      userId: registro.userId
    };
    let url_services = "http://jsonplaceholder.typicode.com/posts";
    return this.http.post(url_services, body, option).toPromise();
  }

  private getHeaders(): any {
    return new Headers({ "Content-Type": "application/json" });
  }
}
