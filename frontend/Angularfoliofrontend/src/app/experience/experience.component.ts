import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.scss']
})
export class ExperienceComponent implements OnInit {

  public workExperiences = {
    viewExperiences: true,
    experience: [
      {
        role: "Développeur Full Stack",
        company: "Mirakl",
        color: "#3781c2",
        companylogo: "../../../assets/images/LogoMirakl.png",
        date: "2023",
        // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        desc: "développement des applications web ",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Développeur Full Stack",
        company: "Segma Consulting",
        color: "#3f703f",
        companylogo: "../../../assets/images/images.jpeg",
        date: "2024",
        desc: "développement des applications web",
        // descBullets: [
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        // ]
      },
      {
        role: "Programmeur",
        company: "Multi Solutions",
        color: "#ff9102",
        companylogo: "../../../assets/images/images.png",
        date: "2025",
        desc: "Développement Web , intégration d’API de paiement",
        },
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    ]
  };

  constructor() { }

  ngOnInit(): void {
  }

}
