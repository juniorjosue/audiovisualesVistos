import { Component, OnInit } from '@angular/core';
import { ApiService } from './API_SERVER';
import { Libro } from './libro';

@Component({
  selector: 'app-libro',
  templateUrl: './libro.component.html',
  styleUrls: ['./libro.component.css']
})
export class LibroComponent implements OnInit {


  displayedColumns  :  string[] = ['id', 'titulo', 'autor', 'descripcion', 'actions'];
  dataSource:any  = [];
  libro:any = {};
  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.apiService.readContacts().subscribe((result)=>{
      console.log(result);
      this.dataSource  =  result;
    })
  }

  selectContact(libro:any){
    this.libro = libro;
    console.log("selected: ", this.libro);
  }

  newContact(){
    this.libro = {};
  }

  createContact(f:any){

    console.log("form value: ", f.value);

    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
    });

  }

  deleteContact(id:number){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
    });
  }

  updateContact(f:any){
    console.log("Update", f.value)
    f.value.id = this.libro['id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    });
  }

}
function push(result: Libro[]): never[] {
  throw new Error('Function not implemented.');
}

