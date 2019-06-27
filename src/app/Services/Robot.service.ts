import { Injectable } from '@angular/core';
import { Robot } from '../models/Robot.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class RobotService 
{
  robots: Array<Robot> = []
  constructor(private http: HttpClient) { }

  getRobots()
  {
    return this.http.get<Robot[]>("http://localhost:3000/robots") 
    .subscribe
        (
            data => 
            {               
                this.robots = data
                //this.userService.getUserInfo().subscribe(profile => {this.profileForm.patchValue(profile[0])});               
            },
            error => 
            {                
                //this.alertService.error(error);
                alert("Error, can't load, see logs")
                console.log(error)                              
            }
        ) 
  }

  onChange(robot) 
  {
    this.http.put("http://localhost:3000/robots/" + robot.id, robot)
    .subscribe
    (
      data =>
      {    //update robots if sucseed
          this.getRobots()
      },
      error =>
      {
          alert("error while updateing DB, see logs")
          console.log(error)
      }
    )

  }  
  
}
