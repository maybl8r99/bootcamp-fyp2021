import { CssSelector } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { PostObject,CommonService } from './../common.service';

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
    this.loadDataFromServer()
  }

  loadDataFromServer() {
    this.cs.list().subscribe(d=>{
      this.myflowers=(d as PostObject).data
    })
  }
  addMore() {
    this.myflowers.push({
      name:'new flower',colour:'bright green'
    })
  }

  isNew(o:any) {
    let result = true
    if ('_id' in o) {
      result = false
    }
    return result
  }
  save(o:any) {
    this.cs.save(o).subscribe(d=>{
      this.loadDataFromServer()
    })
  }
  update(o:any) {
    let key = o['_id']
    this.cs.update(key,o).subscribe(d=>{
      this.loadDataFromServer()
    })
  }
  delete(o:any) {
    this.cs.delete(o['_id']).subscribe(d=>{
      this.loadDataFromServer()
    })
  }
}
