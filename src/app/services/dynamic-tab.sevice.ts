import { Injectable } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class DynamicTabService {

    private menuCode: BehaviorSubject<number>;
    private menuName: BehaviorSubject<string>;

    constructor() {
        this.menuCode = new BehaviorSubject<number>(null);
        this.menuName = new BehaviorSubject<string>(null);
    }

    getValueMenuCode(): Observable<number> {
        return this.menuCode.asObservable();
    }

    setValueMenuCode(newValue: number): void {
        this.menuCode.next(newValue);
    }

    getValueMenuName(): Observable<string> {
        return this.menuName.asObservable();
    }

    setValueMenuName(newValue: string): void {
        this.menuName.next(newValue);
    }
}
