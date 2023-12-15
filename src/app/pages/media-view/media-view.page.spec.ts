import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MediaViewPage } from './media-view.page';

describe('MediaViewPage', () => {
  let component: MediaViewPage;
  let fixture: ComponentFixture<MediaViewPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(MediaViewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
