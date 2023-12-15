import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'media-row',
  templateUrl: './media-row.component.html',
  styleUrls: ['./media-row.component.scss'],
})
export class MediaRowComponent implements OnInit {
  @Input() allMedia: any;
  @Input() mediaType: any;
  constructor() {}

  ngOnInit() {}
}
