import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-index-page',
  templateUrl: './index-page.component.html',
  styleUrls: ['./index-page.component.css']
})
export class IndexPageComponent {
  constructor(private router: Router) { }

  async handleClickPage1() {
      this.router.navigate(['/page1']);
    
  }

    async handleClickPage2() {
        this.router.navigate(['/page2']);
  }
}
