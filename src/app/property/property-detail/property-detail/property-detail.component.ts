import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-detail',
  templateUrl: './property-detail.component.html',
  styleUrls: ['./property-detail.component.scss']
})
export class PropertyDetailComponent implements OnInit {
  public propertyId:number={} as number;

  constructor(private activatedRoute:ActivatedRoute) { }

  ngOnInit(): void {
    this.propertyId=this.activatedRoute.snapshot.params['id'];

  }

}
