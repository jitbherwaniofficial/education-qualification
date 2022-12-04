import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-add-education',
  templateUrl: './add-education.component.html',
  styleUrls: ['./add-education.component.css']
})
export class AddEducationComponent implements OnInit {

  constructor(private service : RestapiService) { }

  ngOnInit(): void {
  }

  qualificationForm = new FormGroup({
    degree:new FormControl(''),
    college:new FormControl(''),
    major:new FormControl(''),
    year:new FormControl(''),
    image:new FormControl('assets/Group3.svg')
  })

  getPostData(){
    
  }

  onSubmit(){
    this.service.postQualification(this.qualificationForm.value).subscribe(response => {
      alert("Your Qualification Saved")
    })
  }


}
