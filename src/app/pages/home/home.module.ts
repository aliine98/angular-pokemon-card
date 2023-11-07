import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TitleComponent } from './title/title.component';
import { HeroComponent } from './hero/hero.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [TitleComponent, HeroComponent, HomeComponent],
    imports: [CommonModule],
    exports: [HomeComponent],
})
export class HomeModule {}

