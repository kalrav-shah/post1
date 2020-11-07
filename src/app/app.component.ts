import { Observable } from "rxjs";

import { Component, OnInit } from "@angular/core";

import { GoogleSheetsDbService } from "ng-google-sheets-db";

import { environment } from "../environments/environment";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  characters$: Observable<any[]>;

  constructor(private googleSheetsDbService: GoogleSheetsDbService) {}

  ngOnInit(): void {
    this.characters$ = this.googleSheetsDbService.getActive<any>(
      environment.characters.spreadsheetId,
      environment.characters.worksheetId,
      "Active"
    );
  }
}
