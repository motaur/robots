import { Pipe, PipeTransform, } from "@angular/core";

@Pipe({
    name: 'search'
})
export class SearchPipe implements PipeTransform
{
    transform(robots, value) //get array of robots and value for search
    {        
        return robots.filter(robot => 
        {
            value = value.toLowerCase()
            robot.name = robot.name.toLowerCase() 
            return robot.name.includes(value)//includes if value includes in prod.name
        })
    }
}