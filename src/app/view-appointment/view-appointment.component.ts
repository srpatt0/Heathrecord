import { Component, OnInit } from '@angular/core';
import { UserService } from '../_services/user.service';



@Component({
  selector: 'app-view-appointment',
  templateUrl: './view-appointment.component.html'
})
export class ViewAppointmentComponent implements OnInit {

  private data:any;
  private ands:any;
  constructor(private userService:UserService) {
  
   }

  ngOnInit() {
 this.userService.getfitnessdata().subscribe((data)=>{this.data= data})
  this.ands="rool"  

}


 
}
