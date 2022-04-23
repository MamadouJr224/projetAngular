import {Component, OnInit} from "@angular/core";
import {IHotel} from "./hotel";
@Component({
  selector: 'app-hotel-list',
  templateUrl: './hotel-list.component.html',
  styleUrls: ['./hotel-list.component.css']
})

export class HotelListComponent implements OnInit {
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
  private _hotelFilter = 'mot' ;
  public filteredHotels: IHotel[] = [];

  ngOnInit() {
    this.filteredHotels = this.hotels;
    this.hotelFilter = 'mot';
  }

  public toggleIsNewBadge(): void {
    this.showBadge = !this.showBadge;
  }
  public get hotelFilter(): string {
    return this._hotelFilter;
  }

   public set hotelFilter(filter: string){
    this._hotelFilter = filter;

    this.filteredHotels = this.hotelFilter ? this.filterHotels(this.hotelFilter): this.hotels;
  }


  private filterHotels(criteria: string): IHotel[]{
    criteria = criteria.toLocaleLowerCase();

    const res = this.hotels.filter(
      (hotel:IHotel) => hotel.hotelName.toLocaleLowerCase().indexOf(criteria) !== -1
    );

    return res;

  }
}

