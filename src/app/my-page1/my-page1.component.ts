import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-my-page1',
  templateUrl: './my-page1.component.html',
  styleUrls: ['./my-page1.component.css']
})
export class MyPage1Component {
  constructor(private router: Router) { }

  async handleClickIndex() {
    await setTimeout(() => {
      this.router.navigate(['/']);
    }, 1500);
  }

    async handleClickPage2() {
      await setTimeout(() => {
        this.router.navigate(['/page2']);
      }, 1500);
    
  }
}
