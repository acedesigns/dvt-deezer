/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AlbumComponent } from './album/album.component';
import { ArtistComponent } from './artist/artist.component';
import { SearchComponent } from './search/search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({

    imports: [ CommonModule, FormsModule, ReactiveFormsModule, RouterModule ],

    declarations: [  AlbumComponent, ArtistComponent, SearchComponent],

    exports: [ AlbumComponent, ArtistComponent, SearchComponent ],

})
export class ComponentsModule {}