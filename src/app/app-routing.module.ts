import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyPage1Component } from './my-page1/my-page1.component';
import { MyPage2Component } from './my-page2/my-page2.component';
import { IndexPageComponent } from './index-page/index-page.component';

const routes: Routes = [
  {path:'page1',component:MyPage1Component},
  {path:'page2',component:MyPage2Component},
  {path:'',component:IndexPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents=[MyPage1Component,MyPage2Component]
