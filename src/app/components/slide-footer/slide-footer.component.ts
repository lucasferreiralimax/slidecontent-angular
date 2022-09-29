import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-slide-footer',
  templateUrl: './slide-footer.component.html',
  styleUrls: ['./slide-footer.component.scss']
})
export class SlideFooterComponent implements OnInit {

  @Input()  title: string;

  constructor() { }

  ngOnInit() {
  }

}
