import { Injectable, inject } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateFn, Router, RouterStateSnapshot, UrlTree } from "@angular/router";

@Injectable()
export class UserToken {
}

@Injectable()
export class PermissionsService {
  canActivate(currentUser: UserToken, userId: string): UrlTree | boolean {
    const router: Router = inject(Router);
    const treeAdvancedRoutingPage: UrlTree = router.parseUrl('/topics/routing');

    return (userId == 'userWithoutRightPerm') ?  treeAdvancedRoutingPage : true;
  }

  canMatch(currentUser: UserToken): boolean {
    return true;
  }
}


export const canActivateUser: CanActivateFn = (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  if(route.routeConfig?.path == 'with-guard-urltree') {
    return inject(PermissionsService).canActivate(inject(UserToken), 'userWithoutRightPerm');
  } else {
    return inject(PermissionsService).canActivate(inject(UserToken), 'fakeUserId');
  }
};
