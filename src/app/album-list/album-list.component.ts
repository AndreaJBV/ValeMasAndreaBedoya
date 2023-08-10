import { Component, OnInit } from '@angular/core';
import { AlbumService } from '../album.service';
import { MatDialog } from '@angular/material/dialog';
import { AlbumDetailDialogComponent } from '../album-detail-dialog/album-detail-dialog.component';


@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css']
})
export class AlbumListComponent implements OnInit{
  albums: any[] = [];

  constructor(private albumService: AlbumService, private dialog: MatDialog){}

  ngOnInit(){
    this.getAlbums();
  }

  getAlbums(){
    this.albumService.getAlbums().subscribe(albums =>{
      this.albums = albums;
    })
  }

  openAlbumDetailDialog(albumId: number){
    const dialogRef = this.dialog.open(AlbumDetailDialogComponent,{
      width: '300px',
      data: {albumId: albumId}
    });
  }
}
