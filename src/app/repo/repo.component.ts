import { Component, OnInit } from '@angular/core';
import { UserService } from '../user-service/user.service'

@Component({
  selector: 'app-repo',
  templateUrl: './repo.component.html',
  styleUrls: ['./repo.component.css']
})
export class RepoComponent implements OnInit {
  reposItems: any[];
  reposName: string='Web Portfolio';
  constructor(private userService:UserService) {

  }

 
  findRepo() {
    this.userService.UpdateRepo(this.reposName);
    this.userService.searchrepos().subscribe(repo => {

     this.reposItems = repo['items'];
     console.log(this.reposItems);
    })
  }

 ngOnInit() {
   this.findRepo()
 }

}
