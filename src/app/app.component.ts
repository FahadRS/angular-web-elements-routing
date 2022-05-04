import { Component } from '@angular/core';
import { NzNotificationService } from 'ng-zorro-antd/notification';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {



  constructor(private notification: NzNotificationService) {}
  

  createNotification(type: string): void {
    this.notification.create(
      type,
      '',
      'This is Danger.'
    );
  }


}


