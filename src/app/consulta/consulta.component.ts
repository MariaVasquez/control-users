import { Component, OnInit } from "@angular/core";
import { ConsumeService } from './consume.service';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: "app-consulta",
  templateUrl: "./consulta.component.html",
  styleUrls: ["./consulta.component.css"]
})
export class ConsultaComponent implements OnInit {
  title = "prueba";
  displayedColumns = ["postId", "id", "name", "email", "body"];
  dataSource: any;

  constructor(private results: ConsumeService) {}

  ngOnInit() {
    this.result();
  }

  async result() {
    let data = await this.results.logUsuario();

    if (data) {
      this.dataSource = new MatTableDataSource();
      this.dataSource.data = data;
    }
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
  }
}
