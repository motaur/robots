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
  
  robots: Robot[];
  columns
  date = new Date();
  searchStr = ''

  constructor(private robotService: RobotService) { }

  ngOnInit() 
  {
    this.getRobots();
  }

  getRobots(): void 
  {    
    this.columns = this.robotService.getColumns()
    this.robotService.getRobots().subscribe(robots => this.robots = robots);    
  }

  onEnter(value: string)
  {    
    this.getRobots();
    
    this.robots = this.robots.filter(robot =>{      
      return robot.name.includes(value)
    })

    

  }
  

}