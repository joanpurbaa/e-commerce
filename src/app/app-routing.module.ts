import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'search',
        loadChildren: () =>
          import('./search/search.module').then((m) => m.SearchPageModule),
      },
      {
        path: 'saved',
        loadChildren: () =>
          import('./saved-items/saved-items.module').then(
            (m) => m.SavedItemsPageModule
          ),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('./notifications/notifications.module').then(
            (m) => m.NotificationsPageModule
          ),
      },
      {
        path: 'details',
        loadChildren: () =>
          import('./details/details.module').then((m) => m.DetailsPageModule),
      },
      {
        path: 'reviews',
        loadChildren: () =>
          import('./reviews/reviews.module').then((m) => m.ReviewsPageModule),
      },
      {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
      },
      {
        path: 'cart',
        loadChildren: () =>
          import('./cart/cart.module').then((m) => m.CartPageModule),
      },
      {
        path: 'checkout',
        loadChildren: () =>
          import('./checkout/checkout.module').then(
            (m) => m.CheckoutPageModule
          ),
      },
      {
        path: 'address',
        loadChildren: () =>
          import('./address/address.module').then((m) => m.AddressPageModule),
      },
      {
        path: 'new-address',
        loadChildren: () =>
          import('./new-address/new-address.module').then(
            (m) => m.NewAddressPageModule
          ),
      },
      {
        path: 'payment-method',
        loadChildren: () =>
          import('./payment-method/payment-method.module').then(
            (m) => m.PaymentMethodPageModule
          ),
      },
      {
        path: 'new-card',
        loadChildren: () =>
          import('./new-card/new-card.module').then((m) => m.NewCardPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('./account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: 'my-orders',
        loadChildren: () =>
          import('./my-orders/my-orders.module').then(
            (m) => m.MyOrdersPageModule
          ),
      },
      {
        path: 'track-order',
        loadChildren: () =>
          import('./track-order/track-order.module').then(
            (m) => m.TrackOrderPageModule
          ),
      },
      {
        path: 'completed-order',
        loadChildren: () =>
          import('./completed-order/completed-order.module').then(
            (m) => m.CompletedOrderPageModule
          ),
      },
      {
        path: 'my-details',
        loadChildren: () =>
          import('./my-details/my-details.module').then(
            (m) => m.MyDetailsPageModule
          ),
      },
    ],
  },
  {
    path: 'splash-screen',
    loadChildren: () =>
      import('./splash-screen/splash-screen.module').then(
        (m) => m.SplashScreenPageModule
      ),
  },
  {
    path: 'landing',
    loadChildren: () =>
      import('./landing/landing.module').then((m) => m.LandingPageModule),
  },
  {
    path: 'signup',
    loadChildren: () =>
      import('./signup/signup.module').then((m) => m.SignupPageModule),
  },
  {
    path: 'signin',
    loadChildren: () =>
      import('./signin/signin.module').then((m) => m.SigninPageModule),
  },
  {
    path: 'forgot-password',
    loadChildren: () =>
      import('./forgot-password/forgot-password.module').then(
        (m) => m.ForgotPasswordPageModule
      ),
  },
  {
    path: 'verification',
    loadChildren: () =>
      import('./verification/verification.module').then(
        (m) => m.VerificationPageModule
      ),
  },
  {
    path: 'reset-password',
    loadChildren: () =>
      import('./reset-password/reset-password.module').then(
        (m) => m.ResetPasswordPageModule
      ),
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
  ],
  exports: [RouterModule],
})
export class AppRoutingModule {}
