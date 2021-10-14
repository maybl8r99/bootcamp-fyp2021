import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  url = 'http://localhost:8888/'

  constructor(private http:HttpClient) {

  }

  list() {
    return this.http.get(this.url)
  }
  save(d:any) {
    return this.http.post(this.url,d)
  }
  update(key:string,d:any) {
    return this.http.put(this.url+'?id='+key,d)
  }
  delete(key:string) {
    return this.http.delete(this.url+'?id='+key)
  }


}

export interface PostObject {
  data: any
}