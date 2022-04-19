import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-submission-form',
  templateUrl: './submission-form.component.html',
  styleUrls: ['./submission-form.component.css']
})
export class SubmissionFormComponent implements OnInit {

  submissionForm = this.formBuilder.group({
    subject: '',
    email: '',
    location: '',
    review: '',
    image_input: ''
  });
  constructor(private formBuilder : FormBuilder) {}

  @Input() hasLocation : boolean = false;
  @Input() isStore : boolean = true;


  ngOnInit(): void {
  }

  onSubmit() {
    const regex = new RegExp('^[a-zA-Z]+[0-9][0-9]\@up\.edu$');
    if (this.hasLocation && this.isStore)
    {
      if (!this.submissionForm.controls['subject'].value ||
       !this.submissionForm.controls['email'].value ||
        !this.submissionForm.controls['review'].value ||
        !this.submissionForm.controls['location'].value)
      {
        alert("a field is empty")
        return;
      }
    }
    else if (this.hasLocation)
    {

    }
    else
    {
      if (!this.submissionForm.controls['subject'].value || !this.submissionForm.controls['email'].value || !this.submissionForm.controls['review'].value)
      {
        alert("a field is empty")
        return;
      }
    }


    if (!regex.test(this.submissionForm.controls['email'].value))
    {
      alert("invalid email format")
      return;
    }
    
    
    console.log(this.submissionForm.value);
    this.submissionForm.reset();
  }

}
