import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  url = "http://jsonplaceholder.typicode.com/qualifications";

  constructor(private http : HttpClient) { }

  getAllQualifications(){
    return this.http.get(this.url);
  }

  postQualification(data:any){
    return this.http.post(this.url, data)
  }

  updateQualification(){
    
  }
}
