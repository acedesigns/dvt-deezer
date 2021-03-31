/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ComponentsModule } from '../components.module';
import { AlbumRoutingModule } from './album.routing.module';

@NgModule({

    imports: [ ComponentsModule, RouterModule ],

    declarations: [ AlbumRoutingModule ],

    providers : [  ],

})

export class AlbumModule {}