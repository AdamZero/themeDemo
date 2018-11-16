import { Component, OnInit } from '@angular/core';
import { ThemeService } from 'src/services/theme';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit {

  constructor(private themeS: ThemeService) { }

  ngOnInit() {
  }
  toggleTheme() {
    this.themeS.randomTheme();
  }

}
