import { MywebService } from './../myweb.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { from } from 'rxjs';

@Component({
  selector: 'app-footer-contact',
  templateUrl: './footer-contact.component.html',
  styleUrls: ['./footer-contact.component.css']
})
export class FooterContactComponent implements OnInit {
  isActive:boolean;

  isSubmited:boolean = false;
  constructor(private webService:MywebService, private http:HttpClient) { }

  ngOnInit(): void {
    this.webService.removeClassEmitter.subscribe(
      (isactive:boolean) => this.isActive = isactive
    )
  }

  onSubmit(form:NgForm) {
      const name = form.value.name;
      const textarea = form.value.txtarea;
      this.http.post("https://my-portfolio-790e6.firebaseio.com/msg.json", {
        name:name,
        textarea: textarea
      }).subscribe(
      (resData) => {
        this.isSubmited = true;
        setTimeout(()=> {
          this.isSubmited = false;
        },2000)
      }
      )
  }

  

}
