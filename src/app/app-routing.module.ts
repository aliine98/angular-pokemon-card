import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home/home.component';
import { PokemonCardComponent } from './pages/projects/pokemon-card/pokemon-card.component';
import { ProjectsComponent } from './pages/projects/projects/projects.component';

const routes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    { path: 'projects', component: ProjectsComponent, children: [
        { path: 'poke-card', component: PokemonCardComponent }
    ]},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}


