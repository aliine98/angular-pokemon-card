import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { HomeModule } from './pages/home/home.module';
import { ProjectsModule } from './pages/projects/projects.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        SharedModule,
        ProjectsModule,
        HomeModule,
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
