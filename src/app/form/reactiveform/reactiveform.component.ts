import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

interface StudentModel {
  name: FormControl<string | null>;
  surname: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  city: FormControl<string | null>;
  address: FormControl<string | null>;
  course: FormControl<string | null>;
}

@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.scss']
})
export class ReactiveformComponent {

constructor(private fb: FormBuilder) {

let studentForm: FormGroup<StudentModel> = new FormGroup({
    name: new FormControl(''),
    surname: new FormControl(''),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    city: new FormControl(''),
    address: new FormControl(''),
    course: new FormControl('', Validators.required)
  });

}
}
 

    
    



