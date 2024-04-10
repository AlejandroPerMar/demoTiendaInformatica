import { ViewportScroller } from '@angular/common';
import { ErrorHandler, NgZone } from '@angular/core';

export class InnerViewPortScroller implements ViewportScroller {

  private offset: () => [number, number] = () => [0, 0];

  constructor(private scrollElementID: string, private document: Document, private window: any, private errorHandler: ErrorHandler, private ngZone: NgZone) {
  }

  public setOffset(offset: [number, number] | (() => [number, number])): void {
    if (Array.isArray(offset)) {
      this.offset = () => offset;
    } else {
      this.offset = offset;
    }
  }

  public getScrollPosition(): [number, number] {
    const scrollEl = this.document.querySelector(`#${this.scrollElementID}`);
    if (this.supportScrollRestoration() && scrollEl) {
      return [scrollEl.scrollLeft, scrollEl.scrollTop];
    } else {
      return [0, 0];
    }
  }

  public scrollToPosition(position: [number, number]): void {
    const scrollEl = this.document.querySelector(`#${this.scrollElementID}`);
    if (this.supportScrollRestoration() && scrollEl) {
      this.ngZone.runOutsideAngular(() => {
        setTimeout(() => {
          scrollEl.scrollTo(position[0], position[1]);
        }, 100);
      });
    }
  }

  public scrollToAnchor(anchor: string): void {
    if (this.supportScrollRestoration()) {
      const scroll: (attempt: number) => void = (attempt: number) => {
        if (attempt <= 0) {
          return;
        }
        this.ngZone.runOutsideAngular(() => {
          setTimeout(() => {
            // Escape anything passed to `querySelector` as it can throw errors and stop the application
            // from working if invalid values are passed.
            if (this.window.CSS && this.window.CSS.escape) {
              anchor = this.window.CSS.escape(anchor);
            } else {
              anchor = anchor.replace(/(\"|\'\ |:|\.|\[|\]|,|=)/g, '\\$1');
            }
            try {
              const elSelectedById = this.document.querySelector(`#${anchor}`);
              if (elSelectedById) {
                this.scrollToElement(elSelectedById);
                return;
              }
              const elSelectedByName = this.document.querySelector(`[name='${anchor}']`);
              if (elSelectedByName) {
                this.scrollToElement(elSelectedByName);
                return;
              }
            } catch (e) {
              this.errorHandler.handleError(e);
            }
            scroll(attempt - 1);
          }, 100);
        });
      };

      scroll(20);
    }
  }

  public setHistoryScrollRestoration(scrollRestoration: "auto" | "manual"): void {
    if (this.supportScrollRestoration()) {
      const history = this.window.history;
      if (history && history.scrollRestoration) {
        history.scrollRestoration = scrollRestoration;
      }
    }
  }

  private scrollToElement(el: any): void {
    const scrollEl = this.document.querySelector(`#${this.scrollElementID}`);
    const rect = el.getBoundingClientRect();
    const left = rect.left + scrollEl.scrollLeft;
    const top = rect.top + scrollEl.scrollTop;
    this.ngZone.run(() => {
      scrollEl.scrollTo({top: top, left: left, behavior: 'smooth'});
    });
  }

  private supportScrollRestoration(): boolean {
    try {
      return !!this.window && !!this.window.scrollTo;
    } catch {
      return false;
    }
  }
}