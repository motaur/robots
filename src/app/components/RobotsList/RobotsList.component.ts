import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/Robot.model';
import { RobotService } from '../../Services/Robot.service'

@Component({
  selector: 'app-Robots',
  templateUrl: './RobotsList.component.html',
  styleUrls: ['./RobotsList.component.css']
})
export class RobotsListComponent implements OnInit {
  
  robots: Robot[];

  constructor(private robotService: RobotService) { }

  ngOnInit() 
  {
    this.getRobots();
  }

  getRobots(): void {
    this.robotService.getRobots()
    .subscribe(robots => this.robots = robots);
  }

}
