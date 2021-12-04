import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
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
  constructor(private apiService: ApiService) { 
    this.apiService.readContacts().subscribe((result)=>{
      console.log(result);
      this.dataSource  =   new MatTableDataSource(result);
    })
  }

  ngOnInit() {

  }

  selectContact(libro:any){
    this.libro = libro;
    console.log("selected: ", this.libro);
  }

  newContact(){
    this.libro = {};
  }

  // addRowData(row_obj){
  //   var d = new Date();
  //   this.dataSource.Push({
  //     id:d.getTime(),
  //     name:row_obj.name
  //   });
  //   this.table.renderRows();
  // }

  // deleteRowData(row_obj){
  //    this.dataSource = this.dataSource.filter((value,key)=>{
  //      return value.id != row_obj.id;
  //    });
  // }


  createContact(f:any){

    console.log("form value: ", f.value);

    this.apiService.createContact(f.value).subscribe((result)=>{
      console.log(result);
      this.apiService.readContacts().subscribe((result)=>{
        console.log(result);
        this.dataSource  =   new MatTableDataSource(result);
      })
      // this.table.renderRows();
   //   window.location.reload();
    });

  }

  deleteContact(id:number){
    this.apiService.deleteContact(id).subscribe((result)=>{
      console.log(result);
      // window.location.reload();
      this.apiService.readContacts().subscribe((result)=>{
        console.log(result);
        this.dataSource  =   new MatTableDataSource(result);
      })
    });
  }

  updateContact(f:any){
    console.log("Update", f.value)
    f.value.id = this.libro['id'];
    this.apiService.updateContact(f.value).subscribe((result)=>{
      console.log(result);
    //  alert("editado");
      this.libro="";
    });
  }

}

function push(result: Libro[]): never[] {
  throw new Error('Function not implemented.');
}

