import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-page2',
  templateUrl: './my-page2.component.html',
  styleUrls: ['./my-page2.component.css']
})

export class MyPage2Component {
  constructor(private router: Router) { }

  async handleClickIndex() {
    await setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

    async handleClickPage1() {
        this.router.navigate(['/page1']);
  }
}
