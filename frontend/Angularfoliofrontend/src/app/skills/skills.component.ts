import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  skillsSection = {
    title: "Ce que je fais💁‍♂️",
    subTitle: "Développeur Full Stack passionné et un peu fou, avide d’explorer toutes les stacks technologiques",
    skills: [
      "⚡ Développer des interfaces front-end hautement interactives pour vos applications web et mobiles",
      "⚡ Création de backends d’application avec Node, Express et Flask",
      "⚡ Applications Web Progressives (PWA) en stacks classiques et SPA (Single Page Application)",
      "⚡ Intégration de services tiers tels que Firebase, Heroku et AWS",
      "⚡ Expérience sur des projets de vision par ordinateur (Computer Vision) et de traitement du langage naturel (NLP)"
    ]
  };
  constructor() { }

  ngOnInit(): void {
  }

}
