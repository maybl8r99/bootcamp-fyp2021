import { Component, OnInit } from '@angular/core';
import { PostObject,CommonService } from './../common.service'

@Component({
  selector: 'app-landingpage',
  templateUrl: './landingpage.component.html',
  styleUrls: ['./landingpage.component.css']
})
export class LandingpageComponent implements OnInit {

  xyz = []
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
    this.cs.list().subscribe(d=>{
      this.xyz=(d as PostObject).data
      console.log(this.xyz)
    })
  }

}
