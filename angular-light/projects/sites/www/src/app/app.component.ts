import { Component, ComponentRef } from '@angular/core';
import { AbstractAppComponent } from '@app/app.component';
import { Controller, CustomComponent } from '@sdk-ts/controller';

import { I18nAppNavBarMenu } from './navbar.i18n';
import { AppToolbarComponent } from './toolbar/toolbar.component';


@Component({
  selector: 'app-root',
  templateUrl: '../../../../framework/app/app.component.html'
})
export class AppComponent extends AbstractAppComponent {
  title = 'template.com';
  public override kiwiInit(controller: Controller): void {
    controller.dedicatedMenu.push({
      name: 'home',
      label: 'HOME',
      route: '/index'
    });
    controller.dedicatedMenu.push({
      name: 'about',
      label: 'About',
      route: '/about'
    });
    controller.dedicatedMenu.push({
      name: 'CATALOG',
      label: 'CATALOG',
      route: '/catalog'
    });

    controller.dedicatedI18nNavbarMenu = new I18nAppNavBarMenu();
    controller.CustomComponentState.set(CustomComponent.Toolbar, true);
    controller.getCustomComponentContainer(CustomComponent.Toolbar).subscribe(param => {
      if (param) {
        param.view.clear();
        const content: ComponentRef<AppToolbarComponent> = param.view.createComponent(AppToolbarComponent);
        content.changeDetectorRef.detectChanges();
      }
    });
  }
}
