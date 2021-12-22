import { Component, OnInit } from '@angular/core';

import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  routeBack()
  {
    this.route.navigateByUrl('/');

  }
  onSubmit(Form: NgForm){
    console.log("done")
  }

}
