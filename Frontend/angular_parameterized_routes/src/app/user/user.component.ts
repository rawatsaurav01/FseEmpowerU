import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent implements OnInit {
  // inject required user service and activated route
  user: any;
  constructor(private route: ActivatedRoute, private userService: UserService) {}
 
  //subscribe to the route params to get the id and then call the getUserById method of the UserService to get the user details
  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.userService.getUserById(id).subscribe(data => {
        this.user = data;
      })
    })
 
  }
}
