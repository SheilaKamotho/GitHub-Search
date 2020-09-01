import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private username: string;
  private clientid = 'dc4cbc3dcccd8cfa4ec7';
  private clientsecret = '5dfa88d45fa23b6c7ee535af8844baccfd42e61d';
  private apikey: string = '2acdeec577f9c9bdce8b7dde1cbf27e1b5134f14'

  constructor(private http:HttpClient){
    console.log('service is now ready');
    this.username = 'sheilakamotho'
  }
  getProfileInfo(){
  	return this.http.get("https://api.github.com/users/" + this.username + "?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
    .pipe(map((response: any) => response.json()));
  }

  getProfileRepos(){
  	return this.http.get("https://api.github.com/users/" + this.username + "/repos?client_id=" + this.clientid + "&client_secret=" + this.clientsecret)
  	.pipe(map((response: any) => response.json()));
  }

 updateProfile(username:string){
  	this.username = username;
  }

}
 
  