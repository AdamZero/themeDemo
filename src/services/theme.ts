import { Injectable } from '@angular/core';
import { theme } from '../config/index';
/**
 * 用于主题切换的Service
 */
@Injectable()
export class ThemeService {
  currentThemeKey = 'primary';
  constructor() {
  }
  /**
   * 修改主题
   * @param key 修改主题的关键字,可以是theme里的key或者index
   */
  changeTheme(key: string | number) {
    if (this.currentThemeKey) {
      document.body.classList.remove(`theme-${key}`);
    }
    if (typeof key === 'string') {
      document.body.classList.add(`theme-${key}`);
    } else if (typeof key === 'number') {
      if (key < theme.length) {
        document.body.classList.add(`theme-${theme[key]['key']}`);
      } else {
        this.randomTheme();
      }
    } else {
      this.randomTheme();
    }
  }
  /**
   * 在主题列表中随机一个主题使用
   */
  randomTheme() {
    // 随机生成一个index
    const index = Math.floor(Math.random() * theme.length);
    const themeName = `theme-${theme[index]['key']}`;
    // 判断随机主题是否当前主题
    if (document.body.classList.contains(themeName)) {
      this.randomTheme();
    } else {
      // 移除前一个主题
      document.body.classList.remove(`theme-${this.currentThemeKey}`);
      document.body.classList.add(`theme-${theme[index]['key']}`);
      this.currentThemeKey = theme[index]['key'];
    }
  }
}
