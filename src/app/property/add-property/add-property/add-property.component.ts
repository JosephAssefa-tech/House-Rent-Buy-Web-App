import { Component, OnInit, ViewChild } from '@angular/core';
import { Form, NgForm } from '@angular/forms';

import { Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.scss']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm!:NgForm;
  // @Input() property:string ={} as string;

  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  routeBack()
  {
    this.route.navigateByUrl('/');

  }
  onSubmit(Form: NgForm){
    console.log("done")
    console.log(this.addPropertyForm);
  }

}
