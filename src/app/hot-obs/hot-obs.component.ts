import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { publish } from 'rxjs/operators';

@Component({
  selector: 'app-hot-obs',
  templateUrl: './hot-obs.component.html',
  styleUrls: ['./hot-obs.component.css']
})
export class HotObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    const obsv = new Observable<number>(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);
    }).pipe(
      publish());

    //obsv.pipe(connect());

    // Subscription A
    setTimeout(() => {
      obsv.subscribe(value => console.log("Inside hot Sub A " + value));
    }, 0);

    // Subscription B
    setTimeout(() => {
      obsv.subscribe(value => console.log("Inside hot Sub B " + value));
    }, 2500);
  }

}
