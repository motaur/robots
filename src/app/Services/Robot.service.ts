import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Robot } from '../models/Robot.model';
import { ROBOTS } from '../helpers/db';

@Injectable({
  providedIn: 'root'
})
export class RobotService 
{
  getRobot(id: number) : Observable<Robot>
  {
    return of(ROBOTS.find(robot => robot.id === id));
  }
  
  getRobots() : Observable<Robot[]>
  {
    return of(ROBOTS);
  }

constructor() { }

}
