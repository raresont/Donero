import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {

  constructor(private router: Router){}
  startRecord() {
    return this.router.navigateByUrl('/app/tabs/speakers/speaker-details/1');
  }
}
