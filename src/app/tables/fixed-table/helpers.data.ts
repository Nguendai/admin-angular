import { User } from '../../model/user.model';
import { FixedService } from './service/fixed.service';
import {merge as observableMerge, BehaviorSubject , Observable } from 'rxjs';
import { DataSource, CollectionViewer } from '@angular/cdk/collections';

export class UserDataSource implements DataSource<User> {

    private lessonsSubject = new BehaviorSubject<User[]>([]);

    constructor(private fixedService: FixedService) {}

    connect(collectionViewer: CollectionViewer): Observable<User[]> {
        return this.lessonsSubject.asObservable();
    }

    disconnect(collectionViewer: CollectionViewer): void {
        this.lessonsSubject.complete();
    }

    loadLessons() {
        this.fixedService.getData()
        .subscribe((lessons : User[]) => this.lessonsSubject.next(lessons));
    }
}
