import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-activity-information',
  templateUrl: './activity-information.component.html',
  styleUrls: ['./activity-information.component.css']
})
export class ActivityInformationComponent implements OnInit {
  activityId: any;
  activity: any = {}; 

  constructor(private http: HttpClient,private route: ActivatedRoute) { }


  ngOnInit(): void {
    this.activityId = +this.route.snapshot.paramMap.get('activityId')!;
    this.getallActivities();
  }

  getallActivities(): void {
    this.http.get('http://localhost:8080/api/budget-summary/activity/'+this.activityId).subscribe(response => {
      this.activity = response ;
    });
    
  }
}
