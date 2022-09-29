import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

export interface Book {
  name;
  price;
  author;
}

@Injectable({
  providedIn: 'root'
})
export class AppservService {

  constructor(private http: HttpClient,private _http: HttpClient) { }

  getAllUsers(){
    console.log("hi");
    return this.http.get("https://nikhil-statemanagement.herokuapp.com/api/v1/userDetails");
    // return this.http.get("https://jsonplaceholder.typicode.com/users");
  }
  postProduct(data: any) {
    console.log(data);
    return this._http.post<any>('https://nikhil-statemanagement.herokuapp.com/api/v1/userDetails', data).pipe(map((res: any) => {
      console.log(res);
    return res;
    })
    );
    }
  DeleteProduct(data: any) {
    console.log(data);
    return this._http.delete<any>(`https://nikhil-statemanagement.herokuapp.com/api/v1/userDetails/${data}`).pipe(map((res: any) => {
      console.log(res);
    return res;
    })
    );
    }

    getBooks() {
      return this.http.get<any>('assets/book.json')
        .toPromise()
        .then(res => <Book[]>res.data)
        .then(data => { return data; });
      }


}
