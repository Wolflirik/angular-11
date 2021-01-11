import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../model/user';
import { ActivatedRoute, Router } from '@angular/router';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {
  public rowsPerPage: number = 5;
  public users: Array<User> = [];
  public page: number = 1;
  public collectionSize: number = 0;

  constructor(
    private usersService: UsersService, 
    private route: ActivatedRoute, 
    private router: Router,
    private loader: LoaderService) {
    this.loader.show();
  }

  public onPageChanged(pageNumber: number) {
    this.router.navigate(['/user/list', pageNumber]);
  }

  public removeUser(userId: number) {
    this.loader.show();
    this.usersService.removeUser(userId).subscribe(() => {
      this.loadPage().add(() => {
        if (this.users.length == 0 && this.page > 1) this.onPageChanged(this.page - 1);
      });
    });
  }

  private loadPage() {
    return this.usersService.getUsers(this.page, this.rowsPerPage).subscribe(page => {
      this.users = page.rows;
      this.collectionSize = page.totalCount;
      this.loader.hide();
    });
  }



  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.page = params['page'] ?? 1;
      this.loadPage();
    });
  }

}
