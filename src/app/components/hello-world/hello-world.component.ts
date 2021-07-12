import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { skuValidator } from "../../validators/skuValidator";

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit {
  myForm: FormGroup;

  constructor(fb: FormBuilder) { 
    this.myForm = fb.group({
      'sku': ['ABC123', Validators.compose([
        Validators.required,
        skuValidator,
      ])]
    });
    console.log(this.myForm.controls)
  }

  ngOnInit(): void {
  }

  onSubmit(value: any) {
    console.log(value);
  }

}
