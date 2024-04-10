import { ChangeDetectionStrategy, ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Controller, ControllerProvider } from '@sdk-ts/controller';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppProductDetailComponent {

  public controller: Controller;

  constructor(private changeDetectorRef: ChangeDetectorRef) {
    this.controller = ControllerProvider.instance;
  }

  ngOnInit(): void {
    this.controller.withPortalBanner = false;
    this.controller.updateNavigationMenuMode('over');
  }

  ngOnDestroy(): void {
    this.controller.unregisterOnResize(this.onResize);
  }

  private onResize: () => void = () => {
    this.changeDetectorRef.markForCheck();
  }

}