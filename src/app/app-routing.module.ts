import { NgModule } from '@angular/core';
import { RouterModule, Routes  } from '@angular/router';

import { RobotsListComponent }      from './components/RobotsList/RobotsList.component';
import { RobotDetailsComponent }  from './components/RobotDetails/RobotDetails.component';


const routes: Routes = [
  { path: 'details/:id', component: RobotDetailsComponent },
  { path: 'robots', component: RobotsListComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
