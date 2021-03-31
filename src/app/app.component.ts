/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

    title = 'musicdb-app';

    searchModel = {
        term: '',
        onDate : ''
    };

    constructor( private router: Router ) {}


    doSearch(term) {
        const myOb = {
            term: term.term,
        };
        this.router.navigate(['search/', myOb.term]).then();
    }
}
