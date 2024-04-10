import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, DetachedRouteHandle, RouteReuseStrategy } from '@angular/router';

@Injectable()
export class CustomReuseStrategy implements RouteReuseStrategy {
  private storedRoutes = new Map<string, DetachedRouteHandle>();

  shouldDetach(route: ActivatedRouteSnapshot): boolean {
    if (route.routeConfig && route.routeConfig.data && route.routeConfig.data.shouldReuse === true) {
      return true;
    } else {
      return false;
    }
  }

  store(route: ActivatedRouteSnapshot, handle: DetachedRouteHandle): void {
    if (!route.routeConfig) return;

    const path: string = this.getPathFromRoute(route);
    if (handle) {
      this.storedRoutes.set(path, handle);
    } else {
      this.storedRoutes.delete(path);
    }
  }

  shouldAttach(route: ActivatedRouteSnapshot): boolean {
    if (!route.routeConfig || !route.routeConfig.data || route.routeConfig.data.shouldReuse !== true) return false;
    const path: string = this.getPathFromRoute(route);
    return this.storedRoutes.has(path);
  }

  retrieve(route: ActivatedRouteSnapshot): DetachedRouteHandle {
    if (!route.routeConfig) return null;
    const path: string = this.getPathFromRoute(route);
    return this.storedRoutes.get(path);
  }

  shouldReuseRoute(future: ActivatedRouteSnapshot, curr: ActivatedRouteSnapshot): boolean {
    return true;//future.routeConfig && future.routeConfig.data && future.routeConfig.data.shouldReuse === true;
  }

  private getPathFromRoute(route: ActivatedRouteSnapshot): string {
    const retVal: string = route.pathFromRoot
      .map(v => v.url.map(segment => segment.toString()).join('/'))
      .join('/');
    if (retVal.endsWith('/') === true) {
      return retVal.substring(0, retVal.length - 1);
    } else {
      return retVal;
    }
  }
}