import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties:Array<IProperty>=[];
  SellRent=1;



  constructor(private route:ActivatedRoute, private housingService: HousingService ) { }

  ngOnInit(): void {
    this.getHouse();


  }
  getHouse()
  {
    if(this.route.snapshot.toString())
    {
      this.SellRent=2;//means we are on rent-property URL else we are on base URl
    }
    this.housingService.getAll(this.SellRent).subscribe(response=>{

      this.properties=response;
      console.log(response);
      console.log();
    },
    error=>{
      console.log("error");

    }
    )
  }



}
