import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortfolioComponent implements OnInit {
  skills: any[] = [
    { name: 'React', score: '60%' },
    { name: 'Javascript', score: '75%' },
    { name: 'CSS', score: '90%' },
    { name: 'Vue', score: '80%' },
    { name: 'Redux', score: '77%' },
    { name: 'React Native', score: '86%' },
  ];

  hobbies: any[] = [
    {
      name: 'Gaming',
      description: 'Lorem ipsum dolor sit.',
      img: 'assets/img/playstation-1845880_640.jpg',
    },
    {
      name: 'Cooking',
      description: 'Lorem ipsum dolor sit.',
      img: 'assets/img/spaghetti-6639970_640.jpg',
    },
    {
      name: 'Biking',
      description: 'Lorem ipsum dolor sit.',
      img: 'assets/img/cyclist-394274_640.jpg',
    },
  ];

  experiences: any[] = [
    {
      companyLogo: 'assets/img/adidas-seeklogo.svg',
      date: 'Feb 2017- Current',
      role: 'Front-end developer',
      description:
        'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    },
    {
      companyLogo: 'assets/img/adidas-seeklogo.svg',
      date: 'Aug 2016- Feb 2018',
      role: 'Full-Stack developer',
      description:
        'Donec aliquam est dui, vel vestibulum diam sollicitudin id. Quisque feugiat malesuada molestie.',
    },
  ];

  projects: any[] = [
    {
      name: 'Recipe Blog',
      description:
        'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
      img: 'assets/img/challengesDesigns_recipeBlogThumbnail.png',
      tags: ['#HTML', '#CSS', '#responsive'],
      primaryTag: 'Responsive',
    },
    {
      name: 'My Gallery',
      description:
        'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
      img: 'assets/img/challengesDesigns_GalleryThumbnail.png',
      tags: ['#HTML', '#CSS', '#responsive'],
      primaryTag: 'Responsive',
    },
    {
      name: 'Recipe Blog',
      description:
        'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
      img: 'assets/img/challengesDesigns_recipeBlogThumbnail.png',
      tags: ['#HTML', '#CSS', '#responsive'],
      primaryTag: 'Responsive',
    },
    {
      name: 'Checkout',
      description:
        'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
      img: 'assets/img/challengesDesigns_CheckoutThumbnail.png',
      tags: ['#HTML', '#CSS', '#React'],
      primaryTag: 'React',
    },
    {
      name: 'Recipe Blog',
      description:
        'In this project, I work with HTML and CSS to create a responsive page. This page is similiar with a page. The design is from devchallenge.io',
      img: 'assets/img/challengesDesigns_recipeBlogThumbnail.png',
      tags: ['#HTML', '#CSS', '#Vue'],
      primaryTag: 'Vue',
    },
  ];

  selectedTagsSoFar: any[] = [];
  arrayToShow: any[] = [];

  page: number = 1;
  totalRecords: number = this.projects.length;

  selectedTagIndex: number = 0;

  getSelectedTag(tagVal: any) {
    this.selectedTagIndex = this.selectedTagsSoFar.indexOf(tagVal);
    if (this.selectedTagIndex === -1) {
      this.selectedTagsSoFar.push(tagVal);
      for (let i = 0; i < this.projects.length; i++) {
        if (
          this.selectedTagsSoFar[this.selectedTagsSoFar.length - 1] ===
          this.projects[i].primaryTag
        )
          this.arrayToShow.push(this.projects[i]);
      }
    } else {
      this.selectedTagsSoFar.splice(this.selectedTagIndex, 1);
      let a = 0;
      while (this.arrayToShow.length > 0) {
        console.log('hi');

        if (this.arrayToShow[a].primaryTag == tagVal) {
          this.arrayToShow.splice(a, 1);
        }
      }
    }
  }

  uniqueTags: string[] = [];

  getPrimaryTagsCount() {
    let completeTagsArr = [];
    for (let i = 0; i < this.projects.length; i++) {
      completeTagsArr.push(this.projects[i].primaryTag);
    }
    this.uniqueTags = [...new Set(completeTagsArr)];
  }

  constructor() {}

  ngOnInit(): void {
    this.getPrimaryTagsCount();
  }
}
