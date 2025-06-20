import { Component, OnInit } from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-greeting',
  templateUrl: './greeting.component.html',
  styleUrls: ['./greeting.component.scss'],
  // animations:[  trigger('list1', [
  //   state('in', style({
  //     opacity: 1,
  //     transform: 'translateX(0)'
  //   })),
  //   transition('void => *', [
  //     style({
  //       opacity: 0,
  //       transform: 'translateX(-100px)'
  //     }),
  //     animate(300)
  //   ]),
  //   transition('* => void', [
  //     animate(300, style({
  //       transform: 'translateX(100px)',
  //       opacity: 0
  //     }))
  //   ])
  // ])]
  //
  //
  // animations: [
  //   trigger('visibilityChanged', [
  //     state('in', style({
  //       opacity: 0
  //     })),
  //     state('out',   style({
  //       opacity: 1
  //     })),
  //     transition('in => out', animate('100ms ease-in')),
  //     transition('out => in', animate('100ms ease-out'))
  //   ])
  // ]


})
export class GreetingComponent implements OnInit {
  greeting= {
    username: "Abdelhakim Chaabani",
    title: "Salut à tous, je suis Abdelhakim",
    subTitle: "Développeur logiciel passionné 🚀, avec une expérience dans la création d’applications Web et mobiles utilisant JavaScript, AngularJS, Node.js ainsi que d’autres bibliothèques et frameworks sympas..",
    resumeLink: "https://drive.google.com/file/d/1DISy5MESnKkgJJqEvaKbtnET22hho40U/view?usp=drive_link"
  }
  constructor() { }

  ngOnInit(): void {
  }

}