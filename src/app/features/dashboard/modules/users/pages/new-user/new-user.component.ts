import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../../models/user';
import { UserService } from '../../services/user.service';
import '../../../../../../../libs/smtp.js'; 
declare let Email: any;

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
    this.sendEmail();
    this.router.navigate(['/dashboard/users']);
  }


  sendEmail(){
    Email.send({
      Host : 'smtp.elasticemail.com',
      Username : 'med.mnsour@gmail.com',
      Password : '98390C6003FC00AA876E21820FA853F4D2C0',
      To : 'med.mnsour@gmail.com',
      From : `med.mnsour@gmail.com`,
      Subject : 'password change',
      Body : `
      <i>This is sent as a default password </i>`}).then( (message: any) => {console.log(message) } );   
  }
}
