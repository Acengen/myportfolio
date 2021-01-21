import { Game } from './Game.model';
import { Project } from './Product.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MywebService {
  projects:Project[] = [
    {image:"../../assets/images/kr0NhBb.jpg", link:null, name:"SPORTSWEAR",desc:"This project is like any sport store.", way:".NET Core & Angular", gitlink:"https://github.com/Acengen/SportV",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image:"../../assets/images/kr0NhBb.jpg", link:null, name:"ADMINPANEL",desc:"Admins only web site", way:".NET Core & Angular2/NgRx", gitlink:"https://github.com/Acengen/Admin-Panel",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image: "../../../assets/images/1_7WeQGvRghyIVWVliG3kMsQ.png", link:"https://mobilestore-5e2b5.web.app/products",gitlink:"https://github.com/Acengen/NEO_Mobile", name:"NEO MOBILE",desc:"This project was made like vip mobile, where you can purchase mobile and packages.", way:"angular",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png" },
    {image: "../../assets/images/htmlcssjs-overview.png", link:"https://acengen.github.io/Business-marketing/",gitlink:"https://github.com/Acengen/Business-marketing", name:"BUSSINES MARKETING", desc:"This project is very simple one. It use to show my design skills.", way:"javascript",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image: "../../../assets/images/1_7WeQGvRghyIVWVliG3kMsQ.png", link:"https://student-form-app.web.app/",gitlink:"https://github.com/Acengen/student-application", name: "APPLICATION FORM", desc:"This project is samply a form with all validations required.", way:"angular",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image:"../../assets/images/icon.png", link:"https://acengen.github.io/form/",gitlink:"https://github.com/Acengen/form", name:"FORM VALIDATION", desc:"This project is samply a form with all validations required.", way:"js & regEx",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image: "../../assets/images/code-programming-javascript-software-develop-command-language-512.png", link:"https://acengen.github.io/numberGuesser/",gitlink:"https://github.com/Acengen/numberGuesser", name:"NUMBER GUESSER", desc:"This app is for guessing a number from 1 to 10", way:"javascript",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image:"../../assets/images/htmlcssjs-overview.png", link:"https://acengen.github.io/pcgamer-with-json-server/", name:"GAME SHOP",gitlink:"https://github.com/Acengen/pcgamer-with-json-server", desc:"This project is like a game shop where you can see how much game cost.", way:"js & json db",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"},
    {image:"../../assets/images/1_7WeQGvRghyIVWVliG3kMsQ.png", link:"https://alps-6adfd.web.app/alps-story", name:"TRAVEL ALPS",desc:"This project is used for booking and finding desire hotel.", way:"angular", gitlink:"https://github.com/Acengen/travel-hotels",cardimg:"../../../assets/images/420-4201852_vector-background-template-16001000-transprent-png-visiting-card.png"}
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
