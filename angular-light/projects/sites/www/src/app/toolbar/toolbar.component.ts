import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, OnInit } from '@angular/core';
import { AbstractI18nFramework } from '@i18n/framework.i18n';
import { Controller, ControllerProvider, I18nSubscriber } from '@sdk-ts/controller';

@Component({
  selector: 'app-toolbar',
  styleUrls: ['./toolbar.component.scss'],
  templateUrl: './toolbar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppToolbarComponent implements OnInit, OnDestroy, I18nSubscriber {

  public controller: Controller;
  public i18nFramework: AbstractI18nFramework;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
    this.i18nFramework = this.controller.i18nFramework;
  }

  onI18nChanged(): void {
    this.changeDetectorRef.markForCheck();
  }

  ngOnInit(): void {
    this.controller.i18nSubscribe(this);
  }

  ngOnDestroy(): void {
    this.controller.i18nUnsubscribe(this);
  }

  public privateArea(): void {
    this.controller.login();
  }
}
