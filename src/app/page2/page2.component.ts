import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements OnInit {

  constructor(private theme: ThemeService) { }

  ngOnInit() {
  }
  toggleTheme() {
    this.theme.randomTheme();
  }

}
