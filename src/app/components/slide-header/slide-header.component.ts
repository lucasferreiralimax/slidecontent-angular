import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-header',
  templateUrl: './slide-header.component.html',
  styleUrls: ['./slide-header.component.scss']
})
export class SlideHeaderComponent implements OnInit {

  @Input()  title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
