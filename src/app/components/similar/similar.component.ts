import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'all-similar',
  templateUrl: './similar.component.html',
  styleUrls: ['./similar.component.scss'],
})
export class SimilarComponent implements OnInit {
  @Input() allSimilar: any;
  @Input() mediaType: any;
  constructor() {}

  ngOnInit() {}
}
