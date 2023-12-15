import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media-column',
  templateUrl: './media-column.component.html',
  styleUrls: ['./media-column.component.scss'],
})
export class MediaColumnComponent implements OnInit {
  @Input() allMedia: any;
  @Input() mediaType: any;
  constructor() {}

  ngOnInit() {}
}
