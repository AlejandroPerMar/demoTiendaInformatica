import { Component, Inject, NgModule, OnDestroy } from '@angular/core';
import { AbstractEdmObjectReadCmsPage } from '@sdk-datamodel-object/cms-page/cms-page.read.types';
import { ControllerProvider } from '@sdk-ts/controller';

@Component({
  template: '',
  selector: 'kiwi-page'
})
export class KiwiPage implements OnDestroy {

  protected futurePage: Promise<AbstractEdmObjectReadCmsPage>;

  protected asyncSetHeadersPage: () => void;

  constructor(@Inject(String) pageId: string, @Inject(String) doNotSetHeaders?: boolean) {
    const page: [() => void, Promise<AbstractEdmObjectReadCmsPage>] = ControllerProvider.instance.pageStatsAndHeaders(pageId, doNotSetHeaders);
    this.asyncSetHeadersPage = page[0];
    this.futurePage = page[1];
  }

  ngOnDestroy(): void {
    this.futurePage.then((page) => {
      if (page) {
        page.release();
      }
    })
  }

}


@NgModule({
  declarations: [
    KiwiPage
  ],
})
export class KiwiPageModule {
}
