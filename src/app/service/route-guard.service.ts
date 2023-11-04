import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { AccountService } from './account.service';

export const mustLoginGuard = () => {
    const accountService = inject(AccountService);
    const router = inject(Router);

    accountService.getSession().then(response => {
        switch (response.status) {
            case 200:
                sessionStorage.setItem("loggedIn", response.body.data);
                return true;
            case 401:
                sessionStorage.removeItem("loggedIn");
                router.navigateByUrl('/login');
                return false;
            default:
                return false;
        }
    });
};

export const mustLoggedOutGuard = () => {
    const accountService = inject(AccountService);
    const router = inject(Router);

    accountService.getSession().then(response => {
        switch (response.status) {
            case 200:
                sessionStorage.setItem("loggedIn", response.body.data);
                return false;
            case 401:
                sessionStorage.removeItem("loggedIn");
                return true;
            default:
                return false;
        }
    });
};

export const bothOKGuard = () => {
    const accountService = inject(AccountService);
    const router = inject(Router);

    accountService.getSession().then(response => {
        switch (response.status) {
            case 200:
                sessionStorage.setItem("loggedIn", response.body.data);
                return true;
            case 401:
                sessionStorage.removeItem("loggedIn");
                return true;
            default:
                return false;
        }
    });
};