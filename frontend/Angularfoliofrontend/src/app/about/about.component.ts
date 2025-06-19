import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  profile = {
    name: 'Abdelhakim Chaabani',
    age: 30,
    nationality: 'Tunisien',
    location: 'Suisse romande',
    description: 'Développeur Web, spécialisée Angular/Spring Boot.',
    linkedin: 'https://www.linkedin.com/in/chaabani-abdelhakim-964a791b6/',
    cvLink: 'https://drive.google.com/file/d/1DISy5MESnKkgJJqEvaKbtnET22hho40U/view?usp=drive_link'
  };

  constructor() { }

  ngOnInit(): void { }

}
