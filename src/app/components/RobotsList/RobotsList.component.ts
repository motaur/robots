import { Component, OnInit } from '@angular/core';
import { Robot } from '../../models/Robot.model';
import { RobotService } from '../../Services/Robot.service'
import { Sort } from '@angular/material/sort';


@Component({
  selector: 'app-Robots',
  templateUrl: './RobotsList.component.html',
  styleUrls: ['./RobotsList.component.css']
})
export class RobotsListComponent implements OnInit
{
  
  robots: Robot[];
  sortedData: Robot[];  
  columns
  date = new Date();
  searchStr = ''

  
  constructor(private robotService: RobotService) 
  { 
    
  }

  sortData(sort: Sort) 
  {
    const data = this.robots.slice();
    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
      return;
    }

    this.sortedData = data.sort((a, b) => {
      const isAsc = sort.direction === 'asc';
      switch (sort.active) {
        case 'id': return compare(a.id, b.id, isAsc);
        case 'name': return compare(a.name, b.name, isAsc);
        case 'type': return compare(a.type, b.type, isAsc);
        case 'architecture': return compare(a.architecture, b.architecture, isAsc);
        case 'developer': return compare(a.developer, b.developer, isAsc);
        default: return 0;
      }
    });
  }
  

  ngOnInit() 
  {
    this.getRobots();
    this.sortedData = this.robots.slice();
  }

  getRobots(): void 
  {    
    this.columns = this.robotService.getColumns()
    this.robotService.getRobots().subscribe(robots => this.robots = robots);    
  }

  //filter robots
  onEnter(value: string)
  {    
    this.getRobots();   

      this.robots = this.robots.filter(robot =>{   
      let name = robot.name.toLowerCase()   
      value = value.toLowerCase()
      return name.includes(value)
    })
  }

}

function compare(a: number | string, b: number | string, isAsc: boolean) {
  return (a < b ? -1 : 1) * (isAsc ? 1 : -1);
}