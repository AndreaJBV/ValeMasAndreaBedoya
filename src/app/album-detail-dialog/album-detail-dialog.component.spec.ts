import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumDetailDialogComponent } from './album-detail-dialog.component';

describe('AlbumDetailDialogComponent', () => {
  let component: AlbumDetailDialogComponent;
  let fixture: ComponentFixture<AlbumDetailDialogComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AlbumDetailDialogComponent]
    });
    fixture = TestBed.createComponent(AlbumDetailDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
