import { Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AlbumService } from '../album.service';

@Component({
  selector: 'app-album-detail-dialog',
  templateUrl: './album-detail-dialog.component.html',
  styleUrls: ['./album-detail-dialog.component.css']
})
export class AlbumDetailDialogComponent implements OnInit{
  album: any = {};

  constructor(@Inject(MAT_DIALOG_DATA) public data: any, private albumService: AlbumService){}

  ngOnInit() {
    this.getAlbumDetail(this.data.albumId);
  }

  getAlbumDetail(albumId: number){
    this.albumService.getAlbumDetail(albumId).subscribe(album =>{
      this.album = album;
    })
  }
}
