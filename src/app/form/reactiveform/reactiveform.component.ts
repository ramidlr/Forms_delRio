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


studentForm: FormGroup

constructor(private fb: FormBuilder) {

  this.studentForm = this.fb.group<StudentModel>({
    name: new FormControl('', [Validators.required]),
    surname: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.email, Validators.required]),
    password: new FormControl('', [Validators.minLength(8), Validators.required]),
    city: new FormControl(''),
    address: new FormControl(''),
    course: new FormControl('', Validators.required)
  });
}

onSubmit(): void {
    console.log(JSON.stringify(this.studentForm.value));
  }
}

 

    
    



