import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { User } from '../../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from 'src/app/loader.service';

@Component({
  selector: 'app-user-form',
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.scss'],
})

export class UserFormComponent implements OnInit {
  public user: User = new User();
  public formSubmited: boolean = false;
  public error: string = '';

  constructor(
    private usersService: UsersService, 
    private route: ActivatedRoute, 
    private router: Router,
    private loader: LoaderService) { 
    this.loader.show();
  }

  public cleanForm() {
    this.user = new User();
  }

  private getUserData() {
    if (this.user.id>0) {
      this.usersService.getUser(this.user.id).subscribe(
        response => {
          this.user = response;
        },
        error => {
          this.error = `${error.status}, ${error.statusText}`;
        },
      ).add(() => {
        this.loader.hide();
      });
    } else {
      setTimeout(() => {this.loader.hide()});
    }
  }

  public onSubmitedNewUser() {
    this.loader.show();
    this.usersService.addUser(this.user).subscribe(() => {
      this.cleanForm();
      this.formSubmited = true;
      this.router.navigate(['/user/list']);
    });
  }

  public onSubmitedUpdateUser() {
    this.loader.show();
    this.usersService.updateUser(this.user.id, this.user).subscribe(() => {
      this.cleanForm();
      this.formSubmited = true;
      this.router.navigate(['/user/list']);
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.user.id = Number(params['userId']);
      this.getUserData();
    });
  }
}
