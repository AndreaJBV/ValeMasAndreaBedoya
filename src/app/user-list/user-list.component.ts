import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit{
  users: any[] = [];
  currentPage = 1;
  filteredUsers : any[] = [];
  searchTerm = '';

  ngOnInit(){
    this.getUsers();
  }

  constructor(private userService: UserService, private router: Router){}

  getUsers(){
    this.userService.getUsers(this.currentPage)
    .subscribe(users => {
      this.users = users;
    });
  }

  nextPage(){
    this.currentPage++;
    this.getUsers();
  }

  prevPage(){
    if(this.currentPage > 1){
      this.currentPage--;
      this.getUsers();
    }
  }

  searchUsers():void{
    this.filteredUsers = this.users.filter(user =>
      user.id.toString().includes(this.searchTerm) ||
      user.name.toLowerCase().includes(this.searchTerm.toLowerCase())
      );
  }

  selectUser(user: any){
    this.router.navigate(['/user-details',user.id]);
  }
}
