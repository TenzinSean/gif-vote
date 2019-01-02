import { Component, OnInit } from '@angular/core';
import { GifService } from '@app/core/services/gif.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss']
})
export class CreateComponent implements OnInit {

  randomGif;

  constructor(private gifservice: GifService ) { }

  ngOnInit() {
    this.gifservice.getRandom()
      .subscribe(gif => this.randomGif = gif);
    };
}
