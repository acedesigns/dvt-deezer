/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-search',
    templateUrl: './search.component.html',
    styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

    searchResults: any;
    isData = true;
    searchTerm: string;

    constructor( private activeRoute: ActivatedRoute, private service: HttpService ) {
        this.activeRoute.params.subscribe(
            (param: any) => {
                this.getSearchResult(param);
                this.searchTerm = param.term;
            }
        );
    }


    ngOnInit(): void {}



    getSearchResult(search: any) {

        this.service.getData('search/' +search.term )
            .pipe()
            .subscribe(
                (data: any) => {
                    this.isData = false;
                    this.searchResults = this.groupArray(data.results.data, 3);
                },
                (error) => {
                    console.log("An Error occurred");
                    console.error(error);
                },
                () => {}
            )
    }


    groupArray<T>(data: Array<T>, n: number): Array<T[]> {
        let group = new Array<T[]>();
​
        for (let i = 0, j = 0; i < data.length; i++) {
            if (i >= n && i % n === 0)
                j++;
            group[j] = group[j] || [];
            group[j].push(data[i])
        }
​
        return group;
    }

    formatTime(time) {
        // Hours, minutes and seconds
        let hrs = ~~(time / 3600);
        let mins = ~~((time % 3600) / 60);
        let secs = ~~time % 60;

        // Output like "1:01" or "4:03:59" or "123:03:59"
        let ret = "";
        if (hrs > 0) {
            ret += "" + hrs + ":" + (mins < 10 ? "0" : "");
        }
        ret += "" + mins + ":" + (secs < 10 ? "0" : "");
        ret += "" + secs;
        return ret;
    }

}
