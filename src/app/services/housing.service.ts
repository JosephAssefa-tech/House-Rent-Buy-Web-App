import { HttpClient } from '@angular/common/http';
import { IProperty } from '../property/IProperty.interface';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import{map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HousingService {

  constructor(private http:HttpClient) {

  }
  getAll(SellRent:number):Observable<IProperty[]>
  {
    return this.http.get<IProperty[]>('data/properties.json').pipe(
      map(data=>{

        const propertiesArray: Array<IProperty>=[];
        for(const each  in data)
        {

          if(data.hasOwnProperty(each) && data[each].SellRent===SellRent)
         {
           propertiesArray.push(data[each]);

          }

        }
        return propertiesArray;

      })
    )

  }

}
