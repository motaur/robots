import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/Robot.model';
import { RobotService } from '../../Services/Robot.service'

@Component({
  selector: 'app-Robots',
  templateUrl: './RobotsList.component.html',
  styleUrls: ['./RobotsList.component.css']
})
export class RobotsListComponent implements OnInit
{   
  searchStr = '';

  constructor(private robotService: RobotService) 
  { 
    
  }  

  ngOnInit() 
  {
    this.robotService.getRobots();    
  } 
  
}