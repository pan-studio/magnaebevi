import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { TabsModule } from 'ngx-tabset';
import { StickyNavModule } from 'ng2-sticky-nav';
import { NgxScrollTopModule } from 'ngx-scrolltop';
import { NgxSmartModalModule } from 'ngx-smart-modal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/magna_bevi/common/footer/footer.component';
import { HomeDemoOneComponent } from './components/pages/home-demo-one/home-demo-one.component';
import { HomeDemoTwoComponent } from './components/pages/home-demo-two/home-demo-two.component';
import { InstagramComponent } from './components/magna_bevi/common/instagram/instagram.component';
import { ContactComponent } from './components/magna_bevi/common/contact/contact.component';
import { PartnerComponent } from './components/magna_bevi/common/partner/partner.component';
import { BlogComponent } from './components/magna_bevi/common/blog/blog.component';
import { FeedbackComponent } from './components/magna_bevi/common/feedback/feedback.component';
import { FeaturesComponent } from './components/magna_bevi/common/features/features.component';
import { GalleryComponent } from './components/magna_bevi/common/gallery/gallery.component';
import { CallToActionComponent } from './components/magna_bevi/common/call-to-action/call-to-action.component';
import { ChefsComponent } from './components/magna_bevi/common/chefs/chefs.component';
import { BookTableComponent } from './components/magna_bevi/common/book-table/book-table.component';
import { RestaurantMenuComponent } from './components/magna_bevi/common/restaurant-menu/restaurant-menu.component';
import { VideoComponent } from './components/magna_bevi/common/video/video.component';
import { StunningThingsComponent } from './components/magna_bevi/common/stunning-things/stunning-things.component';
import { AboutComponent } from './components/magna_bevi/common/about/about.component';
import { OfferComponent } from './components/magna_bevi/common/offer/offer.component';
import { HomeoneBannerComponent } from './components/pages/home-demo-one/homeone-banner/homeone-banner.component';
import { NavbarComponent } from './components/magna_bevi/common/navbar/navbar.component';
import { BookATablePageComponent } from './components/pages/book-a-table-page/book-a-table-page.component';
import { PrivacyPolicyComponent } from './components/pages/privacy-policy/privacy-policy.component';
import { TermsConditionsComponent } from './components/pages/terms-conditions/terms-conditions.component';
import { NotFoundComponent } from './components/pages/not-found/not-found.component';
import { HometwoBannerComponent } from './components/pages/home-demo-two/hometwo-banner/hometwo-banner.component';
import { HomeDemoThreeComponent } from './components/pages/home-demo-three/home-demo-three.component';
import { HomeDemoFourComponent } from './components/pages/home-demo-four/home-demo-four.component';
import { HomethreeBannerComponent } from './components/pages/home-demo-three/homethree-banner/homethree-banner.component';
import { HomefourBannerComponent } from './components/pages/home-demo-four/homefour-banner/homefour-banner.component';
import { HomeDemoFiveComponent } from './components/pages/home-demo-five/home-demo-five.component';
import { HomeDemoSixComponent } from './components/pages/home-demo-six/home-demo-six.component';
import { HomefiveBannerComponent } from './components/pages/home-demo-five/homefive-banner/homefive-banner.component';
import { HomesixBannerComponent } from './components/pages/home-demo-six/homesix-banner/homesix-banner.component';
import { BlogPageComponent } from './components/pages/blog-page/blog-page.component';
import { BlogDetailsPageComponent } from './components/pages/blog-details-page/blog-details-page.component';
import { OrderPageComponent } from './components/pages/order-page/order-page.component';
import { MyAccountComponent } from './components/pages/my-account/my-account.component';
import { ForgotPasswordComponent } from './components/pages/forgot-password/forgot-password.component';
import { ChangePasswordComponent } from './components/pages/change-password/change-password.component';
import { LoginComponent } from './components/magna_bevi/pages/login/login.component';
import { HomepageComponent } from './components/magna_bevi/pages/homepage/homepage.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './components/magna_bevi/pages/cart/cart.component';
import { AdminhomeComponent } from './components/magna_bevi/pages/admin/adminhome/adminhome.component';
import { SidebarComponent } from './components/magna_bevi/common/sidebar/sidebar.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CreatemenuComponent } from './components/magna_bevi/pages/admin/menu/createmenu/createmenu.component';
import { FormlyBootstrapModule } from '@ngx-formly/bootstrap';
import { FormlyModule } from '@ngx-formly/core';
import { RepeatTypeComponent } from './components/magna_bevi/common/dynamicform/customtype/repeat-section.type';
import { DynamicFormComponent } from './components/magna_bevi/common/dynamicform/dynamicform.component';
import { ScontisticaComponent } from './components/magna_bevi/pages/admin/scontistica/createmenu/scontistica.component';
import { MenulistComponent } from './components/magna_bevi/pages/admin/menu/menulist/menulist.component';

@NgModule({
    declarations: [
        AppComponent,
        FooterComponent,
        HomeDemoOneComponent,
        HomeDemoTwoComponent,
        InstagramComponent,
        ContactComponent,
        PartnerComponent,
        BlogComponent,
        FeedbackComponent,
        FeaturesComponent,
        GalleryComponent,
        CallToActionComponent,
        ChefsComponent,
        BookTableComponent,
        RestaurantMenuComponent,
        VideoComponent,
        StunningThingsComponent,
        AboutComponent,
        OfferComponent,
        HomeoneBannerComponent,
        NavbarComponent,
        BookATablePageComponent,
        PrivacyPolicyComponent,
        TermsConditionsComponent,
        NotFoundComponent,
        HometwoBannerComponent,
        HomeDemoThreeComponent,
        HomeDemoFourComponent,
        HomethreeBannerComponent,
        HomefourBannerComponent,
        HomeDemoFiveComponent,
        HomeDemoSixComponent,
        HomefiveBannerComponent,
        HomesixBannerComponent,
        BlogPageComponent,
        BlogDetailsPageComponent,
        OrderPageComponent,
        MyAccountComponent,
        ForgotPasswordComponent,
        ChangePasswordComponent,
        LoginComponent,
        HomepageComponent,
        CartComponent,
        AdminhomeComponent,
        SidebarComponent,
        CreatemenuComponent,
        MenulistComponent,
        ScontisticaComponent,
        RepeatTypeComponent,
        DynamicFormComponent
    ],
    imports: [
        NgbModule,
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        CarouselModule,
        TabsModule,
        NgxScrollTopModule,
        StickyNavModule,
        HttpClientModule,
        ReactiveFormsModule,
        FormlyBootstrapModule,
        FormlyModule.forRoot({
            types: [
              { name: 'repeat', component: RepeatTypeComponent },
            ],
          }),
        NgxSmartModalModule.forRoot()

    ],
    providers: [],
    bootstrap: [AppComponent],
    schemas: [
        CUSTOM_ELEMENTS_SCHEMA,
        NO_ERRORS_SCHEMA
      ]
})
export class AppModule { }