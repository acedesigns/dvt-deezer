/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-artist',
    templateUrl: './artist.component.html',
    styleUrls: ['./artist.component.scss']
})
export class ArtistComponent implements OnInit {

    selectedArtist: number;
    artist: any;
    albums: any;

    constructor( private activeRoute: ActivatedRoute, private service: HttpService) {
        this.selectedArtist = this.activeRoute.snapshot.params.artistID;
    }


    ngOnInit(): void {
        this.service.getData('music/artist/' +this.selectedArtist)
            .pipe()
            .subscribe(
                (data: any) => {
                    this.artist = data;
                    this.albums = this.groupArray(data.albums, 3);
                },
                (error) => {
                    console.log("An Error occurred");
                    console.error(error);
                },
                () => {}
            )
    }


    playAdio(url: string) {
        console.log(url);
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


    nFormatter(num, digits) {
        let si = [
            { value: 1, symbol: "" },
            { value: 1E3, symbol: " k" },
            { value: 1E6, symbol: " M" }
        ];
        let rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
        let i;
        for (i = si.length - 1; i > 0; i--) {
            if (num >= si[i].value) {
                break;
            }
        }
        return (num / si[i].value).toFixed(digits).replace(rx, "$1") + si[i].symbol;
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
