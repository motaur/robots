import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Robot } from '../../models/Robot.model'
import {RobotService } from '../../Services/Robot.service'

@Component({
  selector: 'app-RobotDetails',
  templateUrl: './RobotDetails.component.html',
  styleUrls: ['./RobotDetails.component.css']
})
export class RobotDetailsComponent implements OnInit {
  robot: Robot;

  constructor(private route: ActivatedRoute,
              private robotService: RobotService,
              private location: Location
              ) { }

  ngOnInit(): void {
    this.getRobot();
  }

  getRobot(): void 
  {
    const id = +this.route.snapshot.paramMap.get('id');
    this.robotService.getRobot(id)
      .subscribe(robot => this.robot = robot);
  }

  goBack(): void {
    this.location.back();
  }
  

}
