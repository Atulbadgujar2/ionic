import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home2',
    loadChildren: () => import('./main/home2/home2.module').then( m => m.Home2PageModule)
  },
    {
    path: '',
    loadChildren: () => import('./main/pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'swiper',
    loadChildren: () => import('./main/swiper-slides/swiper-slides.module').then( m => m.SwiperSlidesModule)
  },
  {
    path: 'demotemplate',
    loadChildren: () => import('./main/demotemplate/demotemplate.module').then( m => m.DemotemplateModule)
  },
  {
    path: 'login2',
    loadChildren: () => import('./main/login2/login2.module').then( m => m.Login2Module)
  },

  {
    path: 'tabs',
    loadChildren: () => import('./main/pages/tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./main/pages/account/login/login.module').then(m => m.LoginPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./main/pages/account/signup/signup.module').then(m => m.SignupPageModule)
  },
  {
    path: 'orders',
    loadChildren: () => import('./main/pages/account/orders/orders.module').then(m => m.OrdersPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./main/pages/account/wishlist/wishlist.module').then(m => m.WishlistPageModule)
  },
  {
    path: 'order-details',
    loadChildren: () => import('./main/pages/account/order-details/order-details.module').then(m => m.OrderDetailsPageModule)
  },
  {
    path: 'forgot-password',
    loadChildren: () => import('./main/pages/account/forgot-password/forgot-password.module').then(m => m.ForgotPasswordPageModule)
  },
  {
    path: 'cart',
    loadChildren: () => import('./main/pages/cart/cart.module').then(m => m.CartPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./main/pages/checkout/checkout.module').then(m => m.CheckoutPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./main/pages/home/home.module').then(m => m.HomePageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./main/pages/filter/filter.module').then(m => m.FilterPageModule)
  },
  {
    path: 'products',
    loadChildren: () => import('./main/pages/products/products.module').then(m => m.ProductsPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./main/pages/product/product.module').then(m => m.ProductPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./main/pages/search/search.module').then(m => m.SearchPageModule)
  },
  {
    path: 'notifications',
    loadChildren: () => import('./main/pages/notifications/notifications.module').then(m => m.NotificationsPageModule)
  },
  {
    path: 'help',
    loadChildren: () => import('./main/pages/help/help.module').then(m => m.HelpPageModule)
  },
  {
    path: 'add-payment-card',
    loadChildren: () => import('./main/pages/add-payment-card/add-payment-card.module').then(m => m.AddPaymentCardPageModule)
  },
  {
    path: 'payment-cards',
    loadChildren: () => import('./main/pages/payment-cards/payment-cards.module').then(m => m.PaymentCardsPageModule)
  },
  {
    path: 'account',
    loadChildren: () => import('./main/pages/account/account/account.module').then(m => m.AccountPageModule)
  },
  {
    path: 'store',
    loadChildren: () => import('./main/pages/store/store.module').then(m => m.StorePageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./main/pages/category/category.module').then(m => m.CategoryPageModule)
  },
  {
    path: 'main-category',
    loadChildren: () => import('./main/pages/main-category/main-category.module').then(m => m.MainCategoryPageModule)
  },
  {
    path: 'sort',
    loadChildren: () => import('./main/pages/sort/sort.module').then(m => m.SortPageModule)
  },
  {
    path: 'payment',
    loadChildren: () => import('./main/pages/payment/payment.module').then(m => m.PaymentPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./main/dashboard/dashboard.module').then( m => m.DashboardModule)
  },
  {
    path: 'adminproduct',
    loadChildren: () => import('./main/admin-product/admin-product.module').then( m => m.AdminProductModule)
  },
  {
    path: 'adminorder',
    loadChildren: () => import('./main/admin-order/admin-order.module').then( m => m.AdminOrderModule)
  },
  {
    path: 'adminuser',
    loadChildren: () => import('./main/admin-user/admin-user.module').then( m => m.AdminUserModule)
  },
  {
    path: 'admincategory',
    loadChildren: () => import('./main/admin-category/admin-category.module').then( m => m.AdminCategoryModule)
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
