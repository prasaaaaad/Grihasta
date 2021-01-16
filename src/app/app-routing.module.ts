import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  /*  {
     path: '',
     loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
   }, */
  {
    path: '', redirectTo: 'login', pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./auth/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterPageModule)
  },
  {
    path: 'about-app',
    loadChildren: () => import('./pages/about-app/about-app.module').then(m => m.AboutAppPageModule)
  },
  {
    path: 'map',
    loadChildren: () => import('./pages/map/map.module').then(m => m.MapPageModule)
  },
  {
    path: 'raise-complaint',
    loadChildren: () => import('./pages/raise-complaint/raise-complaint.module').then(m => m.RaiseComplaintPageModule)
  },
  {
    path: 'gallery',
    loadChildren: () => import('./pages/gallery/gallery.module').then(m => m.GalleryPageModule)
  },
  {
    path: 'clubhouse',
    loadChildren: () => import('./pages/clubhouse/clubhouse.module').then(m => m.ClubhousePageModule)
  },
  {
    path: 'parking',
    loadChildren: () => import('./pages/parking/parking.module').then(m => m.ParkingPageModule)
  },
  {
    path: 'maintenance',
    loadChildren: () => import('./pages/maintenance/maintenance.module').then(m => m.MaintenancePageModule)
  },
  {
    path: 'nearby-services',
    loadChildren: () => import('./nearby-services/nearby-services.module').then(m => m.NearbyServicesPageModule)
  },
  {
    path: 'food-delivery',
    loadChildren: () => import('./food-delivery/food-delivery.module').then(m => m.FoodDeliveryPageModule)
  },
  {
    path: 'temple',
    loadChildren: () => import('./pages/temple/temple.module').then(m => m.TemplePageModule)
  },
  {
    path: 'visitor-pass',
    loadChildren: () => import('./pages/visitor-pass/visitor-pass.module').then(m => m.VisitorPassPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
