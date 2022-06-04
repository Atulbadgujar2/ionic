import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home2',
    loadChildren: () => import('./home2/home2.module').then( m => m.Home2PageModule)
  },
    {
    path: '',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./swiper-slides/swiper-slides.module').then( m => m.SwiperSlidesModule)
  },
  {
    path: 'demotemplate',
    loadChildren: () => import('./demotemplate/demotemplate.module').then( m => m.DemotemplateModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./login2/login2.module').then( m => m.Login2Module)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/account/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/account/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/account/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./pages/account/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./pages/account/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./pages/account/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./pages/products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'add-payment-card',
    loadChildren: () => import('./pages/add-payment-card/add-payment-card.module').then(m => m.AddPaymentCardPageModule)
  },
  {
    path: 'payment-cards',
    loadChildren: () => import('./pages/payment-cards/payment-cards.module').then(m => m.PaymentCardsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./pages/account/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./pages/store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'main-category',
    loadChildren: () => import('./pages/main-category/main-category.module').then(m => m.MainCategoryPageModule)
  },
  {
    path: 'sort',
    loadChildren: () => import('./pages/sort/sort.module').then(m => m.SortPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'adminproduct',
    loadChildren: () => import('./admin-product/admin-product.module').then( m => m.AdminProductModule)
  },
  {
    path: 'adminorder',
    loadChildren: () => import('./admin-order/admin-order.module').then( m => m.AdminOrderModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'home',
  //   pathMatch: 'full'
  // },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
