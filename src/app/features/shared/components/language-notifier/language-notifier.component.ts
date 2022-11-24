import { Component, OnInit } from '@angular/core';
import { delay, map, merge, skip, Subject, tap } from 'rxjs';
import { HeaderService } from 'src/app/features/services/header.service';

@Component({
  selector: 'app-language-notifier',
  templateUrl: './language-notifier.component.html',
  styleUrls: ['./language-notifier.component.scss'],
})
export class LanguageNotifierComponent implements OnInit {
  hide$ = new Subject<boolean>();
  languageChanged$ = this.headerService.chosenLanguage$.pipe(
    tap(() => {
      setTimeout(() => this.hide$.next(false), 2000);
    })
  );
  isVisible$ = merge(this.hide$, this.languageChanged$).pipe(skip(1));

  constructor(private headerService: HeaderService) {}

  ngOnInit(): void {}
}
