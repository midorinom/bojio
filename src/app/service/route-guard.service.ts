import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';
import { FacadeService } from './facade.service';

export const mustLoginGuard = () => {
    const facadeService = inject(FacadeService);

    facadeService.getLoginSession();
};

export const mustLoggedOutGuard = () => {
    const facadeService = inject(FacadeService);

    facadeService.getAnySession();
};

export const bothOKGuard = () => {
    const facadeService = inject(FacadeService);

    facadeService.getAnySession();
};