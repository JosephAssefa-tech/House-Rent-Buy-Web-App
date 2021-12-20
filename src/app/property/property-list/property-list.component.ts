import { Component, OnInit } from '@angular/core';

import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties:Array<IProperty>=[];



  constructor(private housingService: HousingService ) { }

  ngOnInit(): void {
    this.getHouse();


  }
  getHouse()
  {
    this.housingService.getAll().subscribe(response=>{

      this.properties=response;
    },
    error=>{
      console.log(error);

    }
    )
  }



}
