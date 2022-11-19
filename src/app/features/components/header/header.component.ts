import { Component, OnInit } from '@angular/core';
import { HeaderService } from '../../services/header.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  constructor(private headerService: HeaderService) {}
  get count(){
    return this.headerService.userCount;
  }

  get language(){
    return this.headerService.chosenLanguage;
  }

  onSwitchLanguage(){
    this.headerService.chosenLanguage = this.headerService.chosenLanguage === 'ka' ? 'en' : 'ka';
  }
  ngOnInit(): void {}
}
