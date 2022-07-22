import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
declare var Email: any;
import '../../../../../../../libs/smtp.js'; 

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.scss'],
})
export class NewUserComponent implements OnInit {
  id: string;
  item: Observable<any>;

  constructor(private router: Router, private userService: UserService) { }

  ngOnInit(): void {
  }

  handleCreate(item: User): void {
    this.userService.add(item);
    this.sendEmail(item.email);
    this.router.navigate(['/dashboard/users']);
  }


  sendEmail( email: string ){
    console.log(email);
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'med.mnsour@gmail.com',
      Password : '9B76A5FDD7A2E8FDE3E179E3842D2093C5E2',
      To : email,
      From : 'sbouii.nesrine@gmail.com',
      Subject : 'Welcome to My Budget App',
      Body : `
        <p>MyBudget</p>
        <i>You have been added as a member in a group </i>
    `})
    .then( (message: any) => {console.log(message) } );   
  }
}
