import { AfterContentInit, Component, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterContentInit {
  title = 'PortFolio';
  constructor() {
    this.loadStyle('assets/css/colors/default.css');
  }

  isLoading: boolean = false;

  ngAfterContentInit(): void {
    window.onscroll = () => {
      this.scrollFunction();
      debugger;
      const sections = document.querySelectorAll(".handleScroll");
      const navLi = document.querySelectorAll(".navbar-nav li a");
      var current = "";

      sections.forEach((section: any) => {
        const sectionTop = section.offsetTop;
        if (pageYOffset >= sectionTop - 200) {
          current = section.getAttribute("id");
        }
      });

      navLi.forEach((li) => {
        li.classList.remove("active");
        if (li.getAttribute("href") === "#" + current) {
          li.classList.add("active");
        }
      });
    };
  }

  loadStyle(styleName: string) {
    const head = document.getElementsByTagName('head')[0];

    let themeLink = document.getElementById(
      'color-opt'
    ) as HTMLLinkElement;
    if (themeLink) {
      themeLink.href = styleName;
    } else {
      const style = document.createElement('link');
      style.id = 'color-opt';
      style.rel = 'stylesheet';
      style.href = `${styleName}`;

      head.appendChild(style);
    }
  }

  topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  scrollFunction() {
    var mybutton = document.getElementById("back-to-top");
    if (mybutton != null) {
      if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        mybutton.style.display = "block";
      } else {
        mybutton.style.display = "none";
      }
    }
  }

}
