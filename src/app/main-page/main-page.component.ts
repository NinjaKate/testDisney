import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {DataService} from "../services/data.service";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  characters: any[] = [];
  paginator: any = {
    pageSize: 10,
    pageIndex: 0,
    length: 0,
  };

  constructor(private dataService: DataService) {}

  setPage(event: any) {
    this.paginator.pageSize = event.pageSize;
    this.paginator.pageIndex = event.pageIndex;
  }

  ngOnInit(): void {
    this.dataService.getRemoveData().subscribe((obj => {
      this.characters = obj.data;
      this.paginator.length = this.characters.length;
      console.log(this.characters[0])
    }))
  }


}
