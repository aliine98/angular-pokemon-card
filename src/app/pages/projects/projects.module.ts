import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { ProjectsComponent } from './projects/projects.component';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProjectsComponent, ListComponent, PokemonCardComponent],
  imports: [CommonModule, RouterModule, FormsModule],
  exports: [ProjectsComponent, PokemonCardComponent],
})
export class ProjectsModule {}
