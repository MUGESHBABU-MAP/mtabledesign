import { Component, OnInit } from '@angular/core';
import { FilterService, PrimeNGConfig } from 'primeng/api';
import { CalendarModule } from 'primeng/calendar';
import { AppservService, Book } from '../appserv.service';
import { DatePipe } from '@angular/common'

@Component({
  selector: 'app-tabledata',
  templateUrl: './tabledata.component.html',
  styleUrls: ['./tabledata.component.css'],
  providers: [FilterService, CalendarModule, PrimeNGConfig, DatePipe]
})
export class TabledataComponent implements OnInit {

  constructor(private appService: AppservService, public datepipe: DatePipe) { }

  tmdata = [
    { "id": "1", "name": "Project A", "price": 10, "author": "Mario Puzo", "startdate": "14 jan 2001", "enddate": "" },
    { "id": "2", "name": "Project B", "price": 15, "author": "J.R.R. Tolkien", "startdate": "", "enddate": "15 feb 2021" },
    { "id": "3", "name": "Project C", "price": 20, "author": "J.K. Rowling  ", "startdate": "", "enddate": "" }
  ]

  // books: Book[];
  value: Date;
  cdate: Date;

  ngOnInit() {
    // this.appService.getBooks().
    //   then(books => this.books = books);
    console.log(this.tmdata)
  }
  updatevalue(index) {
    console.log("hi")
    // this.users.splice(index, 1);
    // this.appService.DeleteProduct(id).subscribe((res) => {
    //   alert('record Deleted ');
    //   this.appService.getAllUsers();
    // });
  }
  onch(valued, id) {
    console.log(valued, id);
    this.myFunction(valued, id)
  }
  onsch(valued, id) {
    console.log(valued, id);
    this.mysFunction(valued, id)
  }
  cat(value) {

    console.log(value);

  }
  mysFunction(valued, id) {
    // this.cdate=new Date();
    let latest_date = this.datepipe.transform(valued, 'yyyy-MM-dd');
    console.log(latest_date);
    // const index: number = this.tmdata.indexOf(id);
    const newArr = this.tmdata.map(obj => {
      if (obj.id === id) {
        return { ...obj, startdate: latest_date };
      }

      return obj;
    });
    // console.log(index,id)
    console.log(newArr)
    this.tmdata = newArr
  }
  myFunction(valued, id) {
    // this.cdate=new Date();
    let latest_date = this.datepipe.transform(valued, 'yyyy-MM-dd');
    console.log(latest_date);
    // const index: number = this.tmdata.indexOf(id);
    const newArr = this.tmdata.map(obj => {
      if (obj.id === id) {
        return { ...obj, enddate: latest_date };
      }

      return obj;
    });
    // console.log(index,id)
    console.log(newArr)
    this.tmdata = newArr
  }

}
