import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms'
import { Router } from '@angular/router';
import { RestapiService } from '../service/restapi.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  panelExpanded = false;
  // qualifications:any;

  constructor(private router: Router, private service : RestapiService){}

  qualificationForm = new FormGroup({
    degree:new FormControl(''),
    college:new FormControl(''),
    year:new FormControl(''),
    image:new FormControl('assets/Group3.svg')
  })

  onSubmit(){

  }

  // qualificationData(){
  //   this.service.getAllQualifications().subscribe(response => {
  //     this.qualifications = response;
  //     console.log(this.qualifications);
      
  //   })
  // }


  qualifications = [
    {
      degree: "Complete NodeJs Course",
      college: "Udemy",
      year: "2022 (February to March)",
      image:"assets/Group1.svg"
    },
    {
      degree: "Complete Angular 9 Course",
      college: "Udemy",
      year: "2021 (October to December)",
      image:"assets/Group1.svg"
    },
    {
      degree: "Web Development Bootcamp",
      college: "Udemy",
      year: "2021 (April to june)",
      image:"assets/Group1.svg",
    },
    {
      degree: "Diploma in Automobile Engineering",
      college: "Arun Muchchala Polytechnic",
      year: "2014 - 2016",
      image:"assets/Group3.svg"
    },
    {
      degree: "H.S.C",
      college: "R.D National College",
      year: "2008 - 2010",
      image:"assets/Group1.svg"
    },
  ]

  ngOnInit(): void {
    // this.qualificationData();
  }

}
