import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import {publish} from 'rxjs/operators';

@Component({
  selector: 'app-cold-obs',
  templateUrl: './cold-obs.component.html',
  styleUrls: ['./cold-obs.component.css']
})
export class ColdObsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const obsv = new Observable(observer => {
      setTimeout(() => {
        observer.next(1);
      }, 1000);
      setTimeout(() => {
        observer.next(4);
      }, 4000);

    });
    // Subscription A
    setTimeout(() => {
      obsv.subscribe(value => console.log("Inside Cold Sub A : " + value));
    }, 0);
    // Subscription B
    setTimeout(() => {
      obsv.subscribe(value => console.log("Inside Cold Sub B : " + value));
    }, 2500);


  }

}
