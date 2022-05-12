import { Component } from "@angular/core";

@Component({
    selector: "app-header",
    templateUrl: "./header.component.html",
    styleUrls: ["./header.component.css"]
})

export class HeaderComponent {
    githubUrl = "https://github.com/FlySquare/angular-todo-app";
    linkedinUrl = "https://linkedin.com/in/flysquare";
    instagramUrl = "https://instagram.com/fly.square";
    emailUrl = "mailto:uarda@teklifbilisim.com";
}
