import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit{

  userId! : number
  user: any;
  userPosts: any[] = [];

  constructor(private route: ActivatedRoute, private userService: UserService){}

  ngOnInit() {
    this.route.paramMap.subscribe(param =>{
      this.userId = Number(param.get('id'));
      this.getUserDatils();
    })
  }

  getUserDatils(){
    this.userService.getUser(this.userId)
    .subscribe(user => {
      this.user = user;
      this.getUserPosts();
    })
  }

  getUserPosts(){
    this.userService.getUserPosts(this.userId)
    .subscribe(posts =>{
      this.userPosts= posts;
      this.fetchCommentsForPosts();
    })
  }

  fetchCommentsForPosts(){
    for(const post of this.userPosts){
      this.userService.getCommentsForPost(post.id)
      .subscribe(comments =>{
        post.comments = comments;
      })
    }
  }
}
