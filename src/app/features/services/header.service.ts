import { Injectable } from '@angular/core';
export type Language= 'en' | 'ka';
@Injectable({
  providedIn: 'root',
})


export class HeaderService {
  private _usersCount: number = 0;
  private _chosenLanguage:Language = 'en';
  constructor() {}

  get userCount() {
    return this._usersCount;
  }

  set userCount(newUser: number) {
    this._usersCount = newUser;
  }
  
  get chosenLanguage(): Language{
    return this._chosenLanguage;
  }
  set chosenLanguage(newLanguage: Language){
    this._chosenLanguage = newLanguage;
  }

}
