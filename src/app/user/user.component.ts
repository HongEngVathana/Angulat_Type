import { Component } from '@angular/core';
import { UserSingleComponent } from './user-single/user-single.component';
import { CommonModule } from '@angular/common';
import { UserService } from '../service/user-service.service';

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [UserSingleComponent, CommonModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  testUser = 'Test User';
  // userList = [
  //   'Tucker Anselm',
  //   'Elmira Keddy',
  //   'Eveline Grandisson',
  //   'Berry Wildes',
  //   'Quintus Hastings',
  //   'Harp Antonignetti',
  //   'Vite Playfair',
  //   'Noelle Dowears',
  //   'Delcine Lubbock',
  //   'Auberta Skerrett',
  //   'Constantin Cosgry',
  //   'Loleta Grenfell',
  //   'Nadeen Matchett',
  //   'Elli Galliver',
  //   'Gayla Hawtin',
  //   'Liam Antwis',
  //   'Merilyn Baumford',
  //   'Lilas Colquyte',
  //   'Roi Kinworthy',
  //   'Patin Flecknoe',
  //   'Etienne Vedeneev',
  //   'Diane Evesque',
  //   'Ashlee Amoore',
  //   'Julissa Bandey',
  //   'Merridie McPartling',
  //   'Nanete Kitlee',
  // ];
  // removeUser(index: number) {
  //   this.userList.splice(index, 1);
  // }

  constructor(public userService: UserService) {}
  UserSingleComponent() {}
}
