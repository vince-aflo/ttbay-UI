import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './pages/login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { ProfileComponent } from './pages/dashboard/profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { HomeComponent } from './pages/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SearchbarComponent } from './components/searchbar/searchbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { AccountSettingsComponent } from './pages/dashboard/account-settings/account-settings.component';
import { AngularToastifyModule } from 'angular-toastify';
import { DeleteAccountModalComponent } from './components/delete-account-modal/delete-account-modal.component'; 
import { HttpClientModule } from "@angular/common/http";
import { RedirectComponent } from './pages/redirect/redirect.component';
import { PendingAuctionsPopComponent } from './components/pending-auctions-pop/pending-auctions-pop.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ItemFormComponent } from './components/item-form/item-form.component';
import { AuctionFormComponent } from './components/auction-form/auction-form.component';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { ItemCardComponent } from './components/item-card/item-card.component';
import { ItemListComponent } from './pages/dashboard/item-list/item-list.component';
import { AuctionListComponent } from './pages/dashboard/auction-list/auction-list.component';
import { AuctionCardComponent } from './components/auction-card/auction-card.component';
import { ItemDetailComponent } from './pages/item-detail/item-detail.component';
import { FilterButtonComponent } from './components/filter-button/filter-button.component';
import { LiveAuctionCardComponent } from './components/live-auction-card/live-auction-card.component';
import { UserAuctionDetailComponent } from './pages/user-auction-detail/user-auction-detail.component';
import { AuctionDetailComponent } from './pages/auction-detail/auction-detail.component';
import { PendingBidsPopComponent } from './components/pending-bids-pop/pending-bids-pop.component';
import { BidFormComponent } from './components/bid-form/bid-form.component';
import { EditAuctionFormComponent } from './components/edit-auction-form/edit-auction-form.component';
import { BidListComponent } from './pages/dashboard/bid-list/bid-list.component';
import { BidCardComponent } from './components/bid-card/bid-card.component';
import { CompletedAuctionDetailComponent } from './pages/completed-auction-detail/completed-auction-detail.component';
import { CapitalizeFirstLetterPipe } from './pipes/capitalize-first-letter.pipe';
import { DashboardNavbarComponent } from './components/dashboard-navbar/dashboard-navbar.component';
import { SecondaryButtonComponent } from './components/secondary-button/secondary-button.component';
import { PrimaryButtonComponent } from './components/primary-button/primary-button.component';
import { DangerButtonComponent } from './components/danger-button/danger-button.component';
import { SearchModalComponent } from "./components/search-modal/search-modal.component"

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    ProfileComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    FooterComponent,
    AccountSettingsComponent,
    DeleteAccountModalComponent,
    RedirectComponent,
    ItemFormComponent,
    AuctionFormComponent,
    CategoryNamePipe,
    PendingAuctionsPopComponent,
    DashboardComponent,
    ItemCardComponent,
    ItemListComponent,
    AuctionListComponent,
    AuctionCardComponent,
    ItemDetailComponent,
    FilterButtonComponent,
    LiveAuctionCardComponent,
    UserAuctionDetailComponent,
    AuctionDetailComponent,
    PendingBidsPopComponent,
    BidFormComponent,
    EditAuctionFormComponent,
    BidListComponent,
    BidCardComponent,
    CompletedAuctionDetailComponent,
    CapitalizeFirstLetterPipe,
    DashboardNavbarComponent,
    SecondaryButtonComponent,
    PrimaryButtonComponent,
    DangerButtonComponent,
    CapitalizeFirstLetterPipe, 
    SearchModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    PublicRoutingModule,
    FormsModule,
    AngularToastifyModule,
    HttpClientModule,
    ReactiveFormsModule
  ]
})
export class PublicModule { }
