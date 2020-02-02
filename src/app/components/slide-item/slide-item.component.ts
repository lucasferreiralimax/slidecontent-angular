import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-item',
  templateUrl: './slide-item.component.html',
  styleUrls: ['./slide-item.component.styl']
})
export class SlideItemComponent implements OnInit {
  @Input('actived') actived: boolean;
  @Input('title') title: string;
  @Input('img') img: string;
  @Input('url') url: string;
  @Input('target') target: string;

  constructor() { }

  ngOnInit() {
  }

}
