import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {
  timeline = [
    // {
    //   heading: "Infosys",
    //   duration: "Present",
    //   subtitle: "",
    //   content: "Upcoming Full stack develover at Infosys!",
    //   className1: "mar-left",
    //   className2: "prt_about_learnbox_right"
    // },
    {
      titre: "Licence en Informatique",
      duree: "2021",
      sousTitre : "Institut Supérieur d’Informatique",
      contenu: "J'ai terminé avec succès ma Licence en Informatique en Tunisie.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    {
      titre: "Bootcamp Full-Stack JavaScript",
      duree: "2022",
      sousTitre : "Go My Code",
      contenu: "J'ai terminé avec succès ma <Bootcamp Full-Stack JavaScript> en Tunisie.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    },
    // {
    //   heading: "Secondary Stage(10th)",
    //   duration: "2014",
    //   subtitle: "CBSE Board",
    //   content: "Successfully completed my high school studies in 2014 from Georgions Academy, Shikohabad.",
    //   className1: "mar-right",
    //   className2: "prt_about_learnbox_left"
    // },
    {
      titre: "Bootcamp Full-Stack SpringBoot/Angular",
      duree: "2023",
      sousTitre : "Crococoder",
      contenu: "J'ai terminé avec succès ma <Bootcamp Full-Stack SpringBoot/Angular> en Tunisie.",
      className1: "mar-right",
      className2: "prt_about_learnbox_left"
    }
    ];

  constructor() { }

  ngOnInit(): void {
  }

}
