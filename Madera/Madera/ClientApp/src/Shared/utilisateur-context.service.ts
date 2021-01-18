import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { SessionService } from './session.service';

const defaultUser = null;
const defaultIsConnected = false; 

@Injectable({
    providedIn: 'root',
})
export class UtilisateurContextService {
    public user$ = new BehaviorSubject(defaultUser);
    public isConnected = new BehaviorSubject(defaultIsConnected)

    constructor(private sessionService: SessionService, private router: Router,) {
        var data = this.sessionService.getItem("currentUser");
        if (data != null) {
            this.user$.next(data);
            this.isConnected.next(true);
        }
    }

    public setUser(user: any) {
        this.sessionService.setItem("currentUser", user);
        this.user$.next(user);
        this.isConnected.next(true);
    }

    public logout() {
        this.sessionService.removeItem("currentUser");
        localStorage.clear();
        this.sessionService.clear();
        this.user$.next(defaultUser);
        this.isConnected.next(defaultIsConnected);
        this.router.navigateByUrl('login')
    }

}