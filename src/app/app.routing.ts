import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule  } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { ComponentsComponent } from './components/components.component';
import { LandingComponent } from './examples/landing/landing.component';
import { LoginComponent } from './examples/login/login.component';
import { ProfileComponent } from './examples/profile/profile.component';
import { NucleoiconsComponent } from './components/nucleoicons/nucleoicons.component';
import { JaliDoorDesignComponent } from './examples/jali-door-design/jali-door-design-component';
import { PastingDoorsComponent } from './examples/pasting-doors/pasting-doors-component';
import { WoodPanelDoorsComponent } from './examples/wood-panel-doors/wood-panel-doors-component';

const routes: Routes =[
    { path: '', redirectTo: 'landing', pathMatch: 'full' },
    { path: 'index',                component: ComponentsComponent },
    { path: 'nucleoicons',          component: NucleoiconsComponent },
    { path: 'landing',     component: LandingComponent },
    { path: 'examples/login',       component: LoginComponent },
    { path: 'double-ply-doors',     component: ProfileComponent },
    { path: 'jali-door-design',     component: JaliDoorDesignComponent },
    { path: 'pasting-doors',     component: PastingDoorsComponent },
    { path: 'wood-panel-doors',     component: WoodPanelDoorsComponent },
];

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        RouterModule.forRoot(routes)
    ],
    exports: [
    ],
})
export class AppRoutingModule { }
