import { Component, OnInit } from '@angular/core';
import { CommonService } from './../common.service';

@Component({
  selector: 'app-listflowers',
  templateUrl: './listflowers.component.html',
  styleUrls: ['./listflowers.component.css']
})
export class ListflowersComponent implements OnInit {

  myflowers = [
    {name:'Lily',colour:'Yellow'},
    {name:'Rose',colour:'Pink'},
    {name:'Lily',colour:'Yellow'},
    {name:'Rose',colour:'Pink'},
    {name:'Lily',colour:'Yellow'},
    {name:'Rose',colour:'Pink'}
  ]
  constructor(private cs:CommonService) { }

  ngOnInit(): void {
  }

  loadDataFromServer() {
    this.cs.list().subscribe(d=>{
      this.myflowers=d['data']

    })
  }
  addMore() {
    this.myflowers.push({
      name:'new flower',colour:'bright green'
    })
  }

  delete(i:any) {
    delete this.myflowers[i]
  }
}
