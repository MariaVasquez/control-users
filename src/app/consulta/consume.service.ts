import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConsumeService {

  constructor(private http: HttpClient) { }

  logUsuario(): Promise<any> {
    let url_services = "https://jsonplaceholder.typicode.com/comments";
    return this.http.get(url_services).toPromise();
  }


}
