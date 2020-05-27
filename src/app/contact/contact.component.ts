import { Component, OnInit } from '@angular/core';
import { User } from '../domains/User';
import { MailService } from '../service/mail.service';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  user: User = new User();
  err: boolean;
  ok: boolean;
  sending: boolean;

  constructor(private mailService: MailService, private router: Router) { }

  ngOnInit() {
  }

  redirection() {
    this.router.navigate(['/accueil']);
  }
  sendEmail() {
    this.sending = true;

    this.mailService.sendEmail(this.user).subscribe(
        () => {
          this.ok = true;
          this.sending = false;

          setTimeout(this.redirection.bind(this), 5000);


        },
        error => {

          return this.err = true;

        });


  }

}
