import { Component, OnInit } from '@angular/core';
import { interval, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  private subscription: Subscription;
  private subscriptionWithError: Subscription;

  constructor() { }

  ngOnInit() {
    const data: any = new Observable(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        count++;
      }, 1000);
      setTimeout(() => {
        observer.complete();
      }, 5000);
    });


    const dataWithError: any = new Observable(observer => {
      let count: number = 0;
      setInterval(() => {
        observer.next(count);
        if(count === 3){
          observer.complete();
        }
        if (count > 5) {
          observer.error(new Error('Count is more than 5'));
        }
        count++;
      }, 1000);

    });


    //this.subscription = data.subscribe(arg => console.log("inside subscription " + arg));

    this.subscriptionWithError = dataWithError.subscribe(arg => console.log("inside subscription with Error" + arg),
      error => {
        console.log(error);
        alert(error.message);
      }, () => {
        console.log("Completed!");
      });

  }

}
