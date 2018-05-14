import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contact: any;

  constructor() { 
    this.contact = {
      name: 'Agnes',
      email: 'agnes@test',
      company: 'NN',
      role: 'student',
      twitter: 'NN',
      location: 'Göteborg',
      notes: 'dfngjkdngjk',
      image: ''
    };
  }
  ngOnInit() {
  }

}
