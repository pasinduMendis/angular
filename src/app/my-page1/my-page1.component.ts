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
      this.router.navigate(['/']);
  }

    async handleClickPage2() {
        this.router.navigate(['/page2']);
    
  }
}
