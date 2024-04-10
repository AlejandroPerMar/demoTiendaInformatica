import { Component } from '@angular/core';
import { MdbFormsModule } from 'mdb-angular-ui-kit/forms';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MdbFormsModule, 
    ReactiveFormsModule
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {

  ContactForm = new FormGroup({
    Email: new FormControl<string>("", [Validators.email, Validators.required]),
    firstName: new FormControl<string>("", [Validators.required]),
    lastName: new FormControl<string>("", [Validators.required]),
    Comments: new FormControl<string>("", Validators.maxLength(300))
  })
  
  constructor() {}
}
