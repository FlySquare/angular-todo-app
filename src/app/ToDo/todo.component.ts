import {Component} from "@angular/core";
import {FormBuilder, FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: "app-todo",
  templateUrl: "./ToDo.component.html",
  styleUrls: ["./ToDo.component.css"]
})

export class TodoComponent {
  showAll : boolean = true;
  items : any | null = JSON.parse(window.localStorage.getItem('todos') || '{}');
  addTodo(input: any) {
    if (input != '') {
      this.items.push({id:this.items.length+1,desc: input, action: false});
      window.localStorage.setItem('todos',JSON.stringify(this.items));
    } else {
      alert("Please check all fields");
    }
  }

  getItems(){
    if (this.showAll){
      return this.items;
    }
    return this.items.filter((item : any) => item.action === false);
  }

  doneItem(itemId:any){
    this.items[itemId-1]['action'] = true;
    window.localStorage.setItem('todos',JSON.stringify(this.items));
  }

  deleteItem(itemId:any){
    //this.items = this.items.filter(item => item.id != itemId)
  }
}
