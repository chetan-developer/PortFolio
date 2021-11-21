import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  name: string = "";
  email: string = "";
  subject: string = "";
  message: string = "";
  successMessage: string = "";

  WarningList: string[] = [];


  validateForm() {
    let isValid = true;
    let _name = this.name.trim();
    let _email = this.email.trim();
    let _subject = this.subject.trim();
    let _message = this.message.trim();

    if (_name.length === 0) {
      this.WarningList.push("Name is required");;
    }
    if (_email.length === 0) {
      this.WarningList.push("Email is required");
    }
    if (_subject.length === 0) {
      this.WarningList.push("Subject is required");
    }
    if (_message.length === 0) {
      this.WarningList.push("Message is required");
    }

    if (this.WarningList.length > 0) {
      isValid = false;
    }
    return isValid;
  }

  onSubmit() {
    debugger;
    this.WarningList = [];
    this.successMessage = "";
    if (this.validateForm()) {
      this.http.post('https://idonttrust.me/api/Account/SendMailFromMainSite', {
        Name: this.name,
        Email: this.email,
        Subject: this.subject,
        Message: this.message
      }).subscribe((res: any) => {
        debugger;
        console.log(res);
        // this.successMessage = res.message
        alert(res.message);
        this.message = "";
        this.name = "";
        this.email = "";
        this.subject = "";
      }, (error: HttpErrorResponse) => {
        debugger;
        this.WarningList.push(error.error.message);
      });

    }
  }




}
