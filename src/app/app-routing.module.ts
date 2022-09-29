import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MtestComponent } from './mtest/mtest.component';
import { TabledataComponent } from './tabledata/tabledata.component';
// import { TdataComponent } from './tdata/tdata.component';

const routes: Routes = [
  {path:'home', component:TabledataComponent},
  {path:'mtest', component:MtestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
