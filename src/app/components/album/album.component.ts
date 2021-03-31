import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { HttpService } from '../../services/http.service';

@Component({
    selector: 'app-album',
    templateUrl: './album.component.html',
    styleUrls: ['./album.component.scss']
})
export class AlbumComponent implements OnInit {


    constructor( private service: HttpService, private router: Router ) { }
    brunoMars: any;
    burnnaBoy: any;
    billieE: any;


    ngOnInit(): void {

        this.service.getData('music')
            .pipe()
            .subscribe(
                (data: any) => {
                    this.brunoMars = data.bruno;
                    this.burnnaBoy = data.burna;
                    this.billieE = data.billie;
                },
                (error) => {
                    console.log("An Error occurred");
                    console.error(error);
                },
                () => {}
            )
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


    goToArtist(artistID: number) {
        this.router.navigate(['/artist', artistID]);
    }

}
