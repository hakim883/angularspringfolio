import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-social-media',
  templateUrl: './social-media.component.html',
  styleUrls: ['./social-media.component.scss']
})
export class SocialMediaComponent implements OnInit {
  socialMediaLinks = {

    github: "https://github.com/hakim883",
    linkedin: "https://www.linkedin.com/in/chaabani-abdelhakim-964a791b6/",
    gmail: "contact@hakimdev.ch",
    instagram : "#",
    facebook: "#"
  };
  constructor() { }

  ngOnInit(): void {
  }

}
