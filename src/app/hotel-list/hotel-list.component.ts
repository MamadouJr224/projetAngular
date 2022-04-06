import { Component } from "@angular/core";
import {IHotel} from "./hotel";
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html'
})

export class HotelListComponent{
  public  title = 'liste hotels';
  public hotels: IHotel[] = [
    {
      "hotelId": 1,
      "hotelName": "Buea sweet life",
      "description": "Belle vue au bord de la mer",
      "price": 230.5,
      "imageUrl": "assets/img/image1.jpg",
    },
    {
      "hotelId": 2,
      "hotelName": "Marakech",
      "description": "Profitez de la vue sur les montagnes",
      "price": 145.5,
      "imageUrl": "assets/img/image2.jpg",
    },
    {
      "hotelId": 3,
      "hotelName": "Abudja new look palace",
      "description": "Séjour complet avec service de voitures",
      "price": 120.12,
      "imageUrl": "assets/img/image3.jpg",
    },
    {
      "hotelId": 4,
      "hotelName": "Cape town city",
      "description": "Magnifique cadre pour votre séjour",
      "price": 135.12,
      "imageUrl": "assets/img/image4.JPG",
    }
  ];
  public showBadge: boolean | undefined;
  public hotelFilter = 'mot';

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }
}
