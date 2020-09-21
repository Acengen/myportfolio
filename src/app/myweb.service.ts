import { Game } from './Game.model';
import { Project } from './Product.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MywebService {
  projects:Project[] = [
    {image: "../../assets/images/neo.png", link:"https://mobilestore-5e2b5.web.app/products", name:"NEO MOBILE",desc:"Developing using Angular" },
    {image: "../../assets/images/rocket.png", link:"https://acengen.github.io/Business-marketing/", name:"BUSSINES MARKETING", desc:"Developing with only html/css/javascript"},
    {image: "../../assets/images/applicationform.jpg", link:"https://student-form-app.web.app/", name: "APPLICATION FORM", desc:"Developing using Angular"},
    {image:"../../assets/images/pai_validated.jpg", link:"https://acengen.github.io/form/", name:"FORM VALIDATION", desc:"html/css/javascript/regEx"},
    {image: "../../assets/images/TimeTracker.jpg", link:"https://timetracking-71bf1.web.app/homepage", name:"TIMETRACK", desc:"Developing using Angular"}
  ]

  games:Game[] =[
      {image:"../../assets/images/1.png", link: "https://simmer.io/@Djolence/skull-dungeon", name:"SKULL DUNGEON"},
      {image: "../../assets/images/2.png", link: "https://simmer.io/@Djolence/zombie-town", name: "ZOMBIE TOWN"},
      {image: "../../assets/images/3.png", link: "https://simmer.io/@Djolence/gun-zomania", name: "GUN ZOMANIA"}
  ]

  removeClass: boolean = false;
  removeClassEmitter = new EventEmitter<boolean>();

  removeOnClick() {
    this.removeClass = true;
    this.removeClassEmitter.emit(this.removeClass);
  }

  getProducts() {
    return this.projects.slice();
  }

  getGames() {
    return this.games.slice();
  }

  getProductById(id:number) {
    return this.projects[id];
  }

  
  constructor() {}
}
