import { Component } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})


export class AppComponent {
  public isLoad: boolean = false; 
  constructor(public loader: LoaderService) {
    loader.isLoaded.subscribe((status) => {
      this.isLoad = status;
    });
  }
}
