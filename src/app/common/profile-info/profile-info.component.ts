import { Component, OnInit } from '@angular/core';
import Typed from 'typed.js';

@Component({
  selector: 'app-profile-info',
  templateUrl: './profile-info.component.html',
  styleUrls: ['./profile-info.component.css']
})
export class ProfileInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typedInit();
  }

  typedInit() {
    const options = {
      strings: ['Angular Developer', 'React Developer', 'NodeJs Developer'],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 2000,
      smartBackspace: true,
      loop: true
    };
    const typed = new Typed('.typed-element', options);
  }

}
