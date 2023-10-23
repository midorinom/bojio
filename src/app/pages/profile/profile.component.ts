import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
})

export class ProfileComponent {
  userProfile: UserProfile; // Define userProfile property

  constructor() {
    // Initialize userProfile with sample data
    this.userProfile = {
      username: 'Ng Kuo Pin',
      pictureUrl: 'https://media.licdn.com/dms/image/C5603AQFOXMIaF4-HxA/profile-displayphoto-shrink_800_800/0/1625636615208?e=2147483647&v=beta&t=Xcj6NwLGGtRf7DUmsXhiqBvPzo7fbXI7PjEMc1C_X2g',
      location: 'Singapore',
      bio: 'Hehehehahaha',
      email: 'Test@gmail.com',
      phone: '98465203',
      hobby: 'Basketball',
      hobby2: 'Swimming',
      hobby3: 'Cycling'
    };
  }
}

interface UserProfile {
  username: string;
  pictureUrl: string;
  location: string;
  bio: string;
  email: string;
  phone: string;
  hobby: string;
  hobby2: string;
  hobby3: string;
}