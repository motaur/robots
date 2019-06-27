import { Component, Input } from '@angular/core';

import { Robot } from '../../models/Robot.model'
import {RobotService } from '../../Services/Robot.service'

@Component({
  selector: 'app-RobotDetails',
  templateUrl: './RobotDetails.component.html',
  styleUrls: ['./RobotDetails.component.css']
})
export class RobotDetailsComponent
{
  @Input() r: Robot; 

  constructor(private robotService: RobotService)   { } 

  tuggle()
  { 
    var employee = ""
    var reason = ""

    while(employee === "" ||  reason === "")
    {
       employee = prompt("Please enter your name:", "");
       reason = prompt("Please enter reason:", "");
    }

    if(employee !== "" &&  reason !== "")
    {  

      this.r.updatedBy = employee
      this.r.updateReason = reason            

      this.robotService.onChange(this.r)

      console.log(this.r.name + " now: " + this.r.isRunning) 
        
      
    }    
    
  
  }
  
}
