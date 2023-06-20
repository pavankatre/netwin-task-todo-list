import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { List } from '../shared/model/list.model';
import { ListService } from '../shared/service/list.service';

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.css']
})
export class TaskFormComponent implements OnInit {
  todoList:FormGroup|any;
  getId: string = new Date().getTime().toString()
  constructor( private fb: FormBuilder, private listServ : ListService) { }

  ngOnInit(): void {
    this.todoList=this.fb.group({
      name:this.fb.control('',Validators.required),
      status:this.fb.control('pending'),
      id:this.fb.control(this.getId)
    })
  }

  addTask(){
    console.log(this.todoList.value)
this.listServ.addTaskInList(this.todoList.value)
  }

}
