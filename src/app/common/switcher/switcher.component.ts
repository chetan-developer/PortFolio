import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css']
})
export class SwitcherComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleSwitch() {
    // debugger;
    var i = document.getElementById('style-switcher');
    if (i.style.left == "-170px") {
      i.style.left = "0px";
    } else if (i.style.left == "") {
      i.style.left = "0px";
    } else {
      i.style.left = "-170px";
    }
  }


  setColor(theme) {
    const cssLink = document.getElementById('color-opt') as HTMLLinkElement;;
    cssLink.href = 'assets/css/colors/' + theme + '.css';
    this.toggleSwitch();
  };

}
