import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlbumComponent } from './components/album/album.component';

const routes: Routes = [
    { path: '', redirectTo: 'albums', pathMatch: 'full'},
    { path: 'albums', component: AlbumComponent },
    {
        path: 'artist/:artistID',
        loadChildren: () => import('./components/artist/artist.module').then(m => m.ArtistModule)
    },
    {
        path: 'search/:term',
        loadChildren: () => import('./components/search/search.module').then(m => m.SearchModule)
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
