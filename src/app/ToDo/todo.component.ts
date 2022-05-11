import { Component } from "@angular/core";
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
    selector: "app-todo",
    templateUrl: "./ToDo.component.html",
    styleUrls: ["./ToDo.component.css"]
})

export class TodoComponent {
    onSubmit(){
        console.log("asdf");
    }
}