import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{User} from '../app/user';
@Injectable({
  providedIn: 'root'
})
export class DataService {
 constructor(private http:HttpClient){}
 baseUrl: string = 'http://localhost:3000/user';
 Url: string = ' http://localhost:3200/manage';
login='http://localhost:3000/mlogin';

 getUsers() {
  return this.http.get<User[]>(this.baseUrl);
  }

getUserById(id: number) {
  return this.http.get<User>(this.baseUrl + '/' + id);
}

createUser(user: User) {
  return this.http.post(this.baseUrl, user);
}

updateUser(user: User) {
  return this.http.put(this.baseUrl + '/' + user.id, user);
}

deleteUser(id: number) {
  return this.http.delete(this.baseUrl + '/' + id);
}

                              
//MANAGE LEAVE URL
getUser(){
  return this.http.get<User[]>(this.Url)
}
createUser1(manage:User){
  return this.http.post(this.Url,manage)
}
deleteUser1(id:number){
  return this.http.delete(this.Url + '/' + id);
}
updateUser1(user:User){
return this.http.put(this.Url + '/' + user.id,user);
}
//ManagerLoginurl
getlogin(){
  return this.http.get(this.login);
}
}
