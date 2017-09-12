import {
  Component,
  OnInit
} from '@angular/core';
import { Chessground} from 'chessground';

@Component({
  selector: 'hello',
  providers: [
  ],
  styleUrls: ['./hello.component.css'],
  templateUrl: './hello.component.html'
})
export class HelloComponent implements OnInit {
  private ground = Chessground(document.body, this.makeConfig());


  constructor(
  ) { }

  public ngOnInit() {
  }

 makeConfig() {
  return {
    fen: 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1',
    movable: {
      free: true,
      color: 'both',
      dropOff: 'trash'
    },
  };
}

}
