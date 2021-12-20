import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.scss']
})
export class PropertyListComponent implements OnInit {
  properties:Array<any>=[{
    "Id":1,
    "Name":"Hayat House",
    "Type":"House",
    "Price":1200
  },

{
  "Id":2,
  "Name":"Birla House",
  "Type":"House",
  "Price":1300
},

{
  "Id":3,
  "Name":"Goha House",
  "Type":"Apartment",
  "Price":2300
},

{
  "Id":4,
  "Name":"Tsehay Realstate",
  "Type":"Realstate",
  "Price":300
},
{
  "Id":5,
  "Name":"Zenebe Realstate",
  "Type":"Realstate",
  "Price":1300
},
{
  "Id":6,
  "Name":"Noah Realstate",
  "Type":"Realstate",
  "Price":4400
}

]



  constructor() { }

  ngOnInit(): void {
  }

}
