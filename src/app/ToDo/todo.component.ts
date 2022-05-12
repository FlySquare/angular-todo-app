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

  addTodo(input: any) {
    if (input != '') {
      this.items.push({id:this.items.length+1,desc: input, action: false});
    } else {
      alert("Please check all fields");
    }
  }

  items = [{id:1,desc: "Çamaşırları Yıka", action: false}, {id:2,desc: "Evi Süpür", action: true}, {id:3,desc: "Ders Çalış", action: false}];

  getItems(){
    if (this.showAll){
      return this.items;
    }
    return this.items.filter(item => item.action === false);
  }
  doneItem(itemId:any){
    this.items[itemId-1]['action'] = true;
  }
  deleteItem(itemId:any){
    this.items = this.items.filter(item => item.id != itemId)
  }
}
