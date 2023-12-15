import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'jv-logo',
  templateUrl: './jv-logo.component.html',
  styleUrls: ['./jv-logo.component.scss'],
})
export class JvLogoComponent implements OnInit {
  @Input() fill: string = '#008080';
  constructor() {}

  ngOnInit() {}
}
