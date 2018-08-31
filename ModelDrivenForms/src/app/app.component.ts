import {Component} from '@angular/core';
import {FormGroup, FormControl, Validators} from '@angular/forms';
import {CustomValidator} from './app.custom.validator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  refForm = new FormGroup({
    fname: new FormControl('exampl', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(10)])),
    mname: new FormControl(),
    lname: new FormControl('',Validators.compose([CustomValidator.getCustom])),
    Address: new FormGroup({
      city: new FormControl(),
      pincode: new FormControl('', Validators.compose([Validators.required, Validators.pattern("^[0-9][1-9]{4}$")]))
    })
  });

  submitForm() {
    console.log(this.refForm.value);
  }
}
