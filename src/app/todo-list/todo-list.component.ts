import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/service/list.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  searchStatus:string|any='';
  tasks:any;
  constructor(private listServ:ListService) { }

  ngOnInit(): void {
    this.initlist()
  }
 

  chengStatus(task:any){
    console.log(task)
if(task.status='pending'){
task.status='complited'
this.initlist()

}
else if(task.status !='pending')
task.status='complited'
this.initlist()
  }


  initlist(){
    this.tasks=this.listServ.getTaskList()

  }

}
