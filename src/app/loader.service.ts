import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoaderService {
  public isLoaded: Subject<boolean> = new Subject<boolean>();
  
  public show() {
    this.isLoaded.next(false);
  }

  public hide() {
    this.isLoaded.next(true);
  }
}
