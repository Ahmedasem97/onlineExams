import { Routes } from '@angular/router';
import { authGuard } from './core/guards/auth.guard';
import { loggedGuard } from './core/guards/logged.guard';

export const routes: Routes = [
    {path:'', redirectTo: "exams" ,pathMatch:"full"},
    {
        path:"auth",
        canActivate:[loggedGuard],
        loadComponent: ()=> import("./core/layout/auth-layout/auth-layout.component").then(c => c.AuthLayoutComponent),
        children: [
            {path:'', redirectTo: "login" ,pathMatch:"full"},
            {path: "login" , loadComponent: ()=> import ("./core/pages/login/login.component").then(c => c.LoginComponent) },
            {path: "register", loadComponent: () => import("./core/pages/register/register.component").then(c => c.RegisterComponent)},
            {path: "forgetPassword", loadComponent: () => import("./core/pages/forget-password/forget-password.component").then(c => c.ForgetPasswordComponent)},
        ]
    },
    {
        path:"exams",
        canActivate:[authGuard],
        loadComponent:()=> import("./core/layout/exams-layout/exams-layout.component").then(c => c.ExamsLayoutComponent),
        children:[
            {path:'', redirectTo: "quizes" ,pathMatch:"full"},
            {path: "quizes" , loadComponent: ()=> import ("./core/pages/quizes/quizes.component").then(c => c.QuizesComponent) },
            {path: "quizes-history" , loadComponent: ()=> import ("./core/pages/quiz-history/quiz-history.component").then(c => c.QuizHistoryComponent) },
            {path: "diploma/:id" , loadComponent: ()=> import ("./core/pages/diploma/diploma.component").then(c => c.DiplomaComponent) },
        ]
    }

];
