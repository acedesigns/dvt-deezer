/* =======================================================
 *
 * @anele_ace
 *
 * =======================================================
 */

import { NgModule } from '@angular/core';
import { ArtistRoutingModule } from './artist.routing.module';
import { ComponentsModule } from '../components.module';

@NgModule({

    imports: [ ComponentsModule, ArtistRoutingModule, ],

    declarations: [  ],

    providers : [  ],

})

export class ArtistModule {}
