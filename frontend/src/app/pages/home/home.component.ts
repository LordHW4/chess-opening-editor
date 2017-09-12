import {
  Component,
  OnInit
} from '@angular/core';

// import { AppState } from '../app.service';
// import { Title } from './title';
// import { XLargeDirective } from './x-large';

@Component({
  selector: 'home',  // <home></home>
  providers: [
    // Title
  ],
  styleUrls: ['./home.component.css'],
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  public localState = { value: '' };

  constructor(
    /*
    public appState: AppState,
    public title: Title
     */
  ) { }

  public ngOnInit() {
    console.log('hello `Home` component');
  }

  public submitState(value: string) {
    console.log('submitState', value);
    // this.appState.set('value', value);
    this.localState.value = '';
  }
}
