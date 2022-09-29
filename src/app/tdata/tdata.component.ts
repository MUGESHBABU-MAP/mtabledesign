import { Component, OnInit } from '@angular/core';
import { AppservService } from '../appserv.service';

export interface Car {
  vin;
  year;
  brand;
  color;
}
@Component({
  selector: 'app-tdata',
  templateUrl: './tdata.component.html',
  styleUrls: ['./tdata.component.css']
})

export class TdataComponent implements OnInit {

  users = null;

  cars: Car[];

    cols: any[];
  uploadData: any;

  constructor(private appService: AppservService) {
    this.appService.getAllUsers()
    .subscribe(data => this.users = data);

    this.uploadData = {
      name: "",
      email: "",
    };
   }

  ngOnInit() {
    // this.appService.getCarsSmall().then(cars => this.cars = cars);

    // this.appService.getCarsSmall().then(cars => this.cars = cars);

    //     this.cols = [
    //         { field: 'vin', header: 'Vin' },
    //         { field: 'year', header: 'Year' },
    //         { field: 'brand', header: 'Brand' },
    //         { field: 'color', header: 'Color' }
    //     ];
  }
  addItem(index) {
    var currentElement = this.users[index];  
    this.users.splice(index, 0, currentElement);
  }
  // addItemn() {
  //   var currentElement = this.users[index];  
  //   this.users.splice(index, 0, currentElement);
  // }
  deleteFieldValue(index,id) {
    this.users.splice(index, 1);
    this.appService.DeleteProduct(id).subscribe((res) => {
      alert('record Deleted ');
      this.appService.getAllUsers();
    });
}
  

  private newAttribute: any = {};
  addItemn(newAttributeName:string,newAttributeEmail:string) {


    this.uploadData.name = newAttributeName
    this.uploadData.email = newAttributeEmail


    this.appService.postProduct(this.uploadData).subscribe((res) => {
      console.log(res);

      alert("Document Added Succesfully");
    });
    console.log(newAttributeEmail,newAttributeName);
    // this.newAttribute.name = newAttributeName
    // this.newAttribute.email = newAttributeEmail
    // this.newAttribute.name = "test"
    // this.newAttribute.email = "mailtest"
    // this.users.push(this.newAttribute)
    //     this.newAttribute = {};
  }

}
