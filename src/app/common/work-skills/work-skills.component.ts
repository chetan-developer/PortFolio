import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-work-skills',
  templateUrl: './work-skills.component.html',
  styleUrls: ['./work-skills.component.css']
})
export class WorkSkillsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  WorkSkills = [
    {
      name: 'Angular',
      image: 'assets/images/skills/Angular.svg',
      level: '80%',
    },
    {
      name: 'NodeJs',
      image: 'assets/images/skills/nodejs-icon.svg',
      level: '55%',
    },
    {
      name: 'MySql',
      image: 'assets/images/skills/my-sql.svg',
      level: '70%',
    },
    {
      name: 'React',
      image: 'assets/images/skills/react.svg',
      level: '60%',
    },
    {
      name: 'Bootstrap',
      image: 'assets/images/skills/bootstrap.svg',
      level: '70%',
    },
    {
      name: 'Material UI',
      image: 'assets/images/skills/materil-ui.svg',
      level: '70%',
    },
  ];

}
