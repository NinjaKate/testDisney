import {Component, OnInit} from '@angular/core';
import {DataService} from "../services/data.service";
import {Character} from "../models/character.model";
import {Paginator} from "../models/paginator.model";

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  characters: Array<Character> = [];
  paginator: Paginator = {
    pageSize: 50,
    pageIndex: 0,
    length: 0,
  };
  characterToShow: Character = {
    allies: [],
    createdAt: '',
    enemies: [],
    films: [],
    imageUrl: '',
    name: '',
    parkAttractions: [],
    shortFilms: [],
    sourceUrl: '',
    tvShows: [],
    updatedAt: '',
    url: '',
    videoGames: [],
    __v: 0,
    _id: 0
  };

  constructor(private dataService: DataService) {}

  setPage(event: any): void {
    this.paginator.pageSize = event.pageSize;
    this.paginator.pageIndex = event.pageIndex;
    this.getDataByPage(this.paginator.pageIndex + 1);
    this.clearCharacterToShow();
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
    } else if (url.includes('.gif')) {
      return imgUrl.substring(0, url.indexOf('.gif') + 4);
    } else if (url.includes('.webp')) {
      return imgUrl.substring(0, url.indexOf('.webp') + 5);
    } else {
      return imgUrl.substring(0, url.indexOf('.jpeg') + 5);
    }
  }

  showMoreInformation(item: Character) {
    this.characterToShow = item;
  }

  scrollToElement($element: any): void {
    $element.scrollIntoView({behavior: "smooth", block: "start", inline: "nearest"});
  }

  getDataByPage(page:number):void {
    this.dataService.getRemoteData(page).subscribe((obj => {
      this.characters = obj.data;
      this.paginator.length = obj.totalPages * obj.count;

    }));
  }

  clearCharacterToShow() {
    this.characterToShow = {
      allies: [],
      createdAt: '',
      enemies: [],
      films: [],
      imageUrl: '',
      name: '',
      parkAttractions: [],
      shortFilms: [],
      sourceUrl: '',
      tvShows: [],
      updatedAt: '',
      url: '',
      videoGames: [],
      __v: 0,
      _id: 0
    };
  }

  ngOnInit(): void {
    this.clearCharacterToShow();
    this.getDataByPage(1);
  }

}
