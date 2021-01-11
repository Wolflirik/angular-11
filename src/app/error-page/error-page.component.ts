import { Component, OnInit } from '@angular/core';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.scss']
})
export class ErrorPageComponent implements OnInit {

  constructor(private loader: LoaderService) {
    this.loader.show();
  }

  ngOnInit(): void {
    setTimeout(() => { this.loader.hide()});
  }

}
