import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service'


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
  
})
export class SearchComponent implements OnInit {
 
  profile: any[];
  repos: any[];
  username: string;
  
  constructor(private userService: UserService) { 

  }
    findProfile(){
      this.userService.updateProfile(this.username);
      this.userService.getProfileInfo().subscribe(profile => {
        console.log(profile);
        this.profile = profile;
      });
  
      this.userService.getProfileRepos().subscribe(repos => {
        console.log(repos);
        this.repos = repos;
      })  	
    }
    findRepos(){}
  ngOnInit(): void{
  }

}
