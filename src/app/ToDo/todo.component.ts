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
  items : any | null = JSON.parse(window.localStorage.getItem('todos') || '[]');
  addTodo(input: any) {
    if (input != '') {
      var newIndex = typeof this.items.slice(-1).pop() === 'undefined' ? 1 : this.items.slice(-1).pop()['id'] +1;
      this.items.push({id:newIndex,desc: input, action: false});
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
    this.items[itemId]['action'] = true;
    window.localStorage.setItem('todos',JSON.stringify(this.items));
  }

  getObject(obj:any){
    return obj;
  }

  deleteItem(itemId:any){
    this.items.splice(itemId,1);
    window.localStorage.setItem('todos',JSON.stringify(this.items));
  }
}
