import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }    from '@angular/forms';

import { AppComponent } from './app.component';
import { RobotService } from './Services/Robot.service';
import { AppRoutingModule } from './app-routing.module'

//my components
import { RobotsListComponent } from './components/RobotsList/RobotsList.component'
import { RobotComponent } from './components/Robot/Robot.component';
import { RobotDetailsComponent }  from './components/RobotDetails/RobotDetails.component';



@NgModule({
  declarations: [
    AppComponent,
    RobotsListComponent,
    RobotComponent,
     RobotDetailsComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [RobotService],
  bootstrap: [AppComponent]
})
export class AppModule { }
