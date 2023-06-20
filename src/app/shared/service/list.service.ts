import { Injectable } from '@angular/core';
import { List } from '../model/list.model';

@Injectable({
  providedIn: 'root'
})
export class ListService {

  constructor() { }

  private taskList=[
    new List('task 1' ,'pending',1),
    new List('task 2' ,'complited',2),
    new List('task 3' ,'pending',3),

]

getTaskList(){
 return this.taskList.slice()
}
addTaskInList(task: any){
console.log(this.taskList)
  this.taskList.push(task)

}
}
