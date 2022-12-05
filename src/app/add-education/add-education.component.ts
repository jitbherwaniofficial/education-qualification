import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {
  qualifications:any=[]
  constructor(private service : RestapiService, private router : Router) { }

  ngOnInit(): void {
  }

  qualificationForm = new FormGroup({
    degree:new FormControl(''),
    college:new FormControl(''),
    major:new FormControl(''),
    year:new FormControl(''),
    image:new FormControl('assets/Group3.svg')
  })

  onSubmit(){
    this.service.postQualification(this.qualificationForm.value).subscribe(response => {
      alert("Your Qualification Saved");
      console.log(response);
      this.router.navigate(['/']);
    })
  }


}
