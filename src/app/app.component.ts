import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TabledataDelete';
  term: string;
  public id : number;
  public name : string;
  public age : number;
  public gender : string;
  public country : string;

  public rows : Array<{id : number,name : string,age : number,gender : string,country : string}> =[];

  headers = ["ID","Name","Age","Gender","Country","Action"];

  // rows =[
  //   {
  //     "ID":"1",
  //     "Name":"Madhan",
  //     "Age":"25",
  //     "Gender":"Male",
  //     "Country":"Indian",
  //   },
  //   {
  //     "ID":"2",
  //     "Name":"Azhar",
  //     "Age":"24",
  //     "Gender":"Male",
  //     "Country":"Indian",

  //   }
  // ]

  deleteEmployee(i){
    console.log(i)
    const index = this.rows.indexOf(i);
    console.log(index);
    this.rows.splice(index,5);
    console.log(index)
  }

  buttonClicked(){
    this.rows.push({id : this.id , name:this.name , age : this.age , gender : this.gender , country : this.country});
    this.id = null;
    this.name = null;
    this.age = null;
    this.gender = null;
    this.country = null;
  }
}
