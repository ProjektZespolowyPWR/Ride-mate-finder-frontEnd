import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UserFormComponent } from './user-form/user-form.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
    },
];