import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
export type Language = 'en' | 'ka';
@Injectable({
  providedIn: 'root',
})
export class HeaderService {
  private _usersCount: number = 0;
  private _chosenLanguage: Language = 'en';

  private chosenLanguageSubject$ = new BehaviorSubject('en');
  public chosenLanguage$ = this.chosenLanguageSubject$.asObservable();

  constructor() {}

  get userCount() {
    return this._usersCount;
  }

  set userCount(newUser: number) {
    this._usersCount = newUser;
  }

  // get chosenLanguage(): Language {
  //   return this._chosenLanguage;
  // }
  // set chosenLanguage(newLanguage: Language) {
  //   this._chosenLanguage = newLanguage;
  // }

  changeLanguage() {
    this.chosenLanguageSubject$.next(
      this.chosenLanguageSubject$.value === 'en' ? 'ka' : 'en'
    );
  }
}
