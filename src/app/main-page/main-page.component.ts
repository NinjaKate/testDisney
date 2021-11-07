import {Component, OnInit} from '@angular/core';
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
  characterToShow: any;

  constructor(private dataService: DataService) {}

  setPage(event: any): void {
    this.paginator.pageSize = event.pageSize;
    this.paginator.pageIndex = event.pageIndex;
    this.characterToShow = null;
  }

  openCharacterInfo(url: string): void {
    window.open(url);
  }

  getImageUrl(imgUrl: string): string {
    const url = imgUrl.toLowerCase();
    if (url.includes('.png')) {
      return imgUrl.substring(0, url.indexOf('.png') + 4);
    } else if (url.includes('.jpg')) {
      return imgUrl.substring(0, url.indexOf('.jpg') + 4);
    } else {
      return imgUrl.substring(0, url.indexOf('.jpeg') + 5);
    }
  }

  showMoreInformation(item: any) {
    this.characterToShow = item;
  }

  ngOnInit(): void {
    this.dataService.getRemoveData().subscribe((obj => {
      this.characters = obj.data;
      this.paginator.length = this.characters.length;
      console.log(this.characters)
    }))
  }


}
