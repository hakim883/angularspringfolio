import { Component, OnInit } from '@angular/core';
import {Apollo} from "apollo-angular";
import gql from 'graphql-tag';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {
  projects2 = [];
  projects3 = [
    {
      link: "https://github.com/hakim883",
    },
    {
      link: "",
    },
    {
      link: "https://github.com/hakim883",
    },
    {
      link:""
    },
    {

      link: "https://github.com/hakim883",
    },
    {
      link: "https://github.com/hakim883",

    }
  ]
  constructor(public apollo: Apollo) { }

  ngOnInit(): void {


    this.apollo.query<any>({
      query: gql`
      {
      user(login: "sarthakgoenka") {
        pinnedItems(first: 6, types: [REPOSITORY]) {
          totalCount
          edges {
            node {
              ... on Repository {
                name
                description
                forkCount
                stargazers {
                  totalCount
                }
                url
                id
                diskUsage

                primaryLanguage {
                  name
                  color
                }
              }
            }
          }
        }
      }
    }
      `
    }).subscribe((data) => {
      this.projects2 = data.data.user.pinnedItems.edges;
      // console.log(this.projects2);
    });
  }

}
