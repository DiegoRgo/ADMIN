import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PagenofoundComponent } from './shared/pagenofound/pagenofound.component';
import { PagesRoutingModule } from './pages/pages.routing';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'login', component: LoginComponent },
    { path: '**', component: PagenofoundComponent },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        PagesRoutingModule
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
