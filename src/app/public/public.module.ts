import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { PublicComponent } from './public.component';
import { LoginComponent } from './login/login.component';
import { PublicRoutingModule } from './public-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './loading-spinner/loading-spinner.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchbarComponent } from './searchbar/searchbar.component';
import { ButtonComponent } from './button/button.component';
import { FooterComponent } from './footer/footer.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { ToastService, AngularToastifyModule } from 'angular-toastify';
import { DeleteAccountModalComponent } from './delete-account-modal/delete-account-modal.component'; 
import { HttpClientModule } from "@angular/common/http";
import { RedirectComponent } from './redirect/redirect.component';
import { PendingAuctionsPopComponent } from './pending-auctions-pop/pending-auctions-pop.component';
import { SellingComponent } from './selling/selling.component';
import { ItemFormComponent } from './item-form/item-form.component';
import { AuctionFormComponent } from './auction-form/auction-form.component';
import { CategoryNamePipe } from './pipes/category-name.pipe';
import { ItemCardComponent } from './item-card/item-card.component';
import { ItemListComponent } from './item-list/item-list.component';
import { AuctionListComponent } from './auction-list/auction-list.component';
import { AuctionCardComponent } from './auction-card/auction-card.component';
import { ItemDetailComponent } from './item-detail/item-detail.component';
import { FilterButtonComponent } from './filter-button/filter-button.component';
import { LiveAuctionCardComponent } from './live-auction-card/live-auction-card.component';
import { UserAuctionDetailComponent } from './user-auction-detail/user-auction-detail.component';
import { AuctionDetailComponent } from './auction-detail/auction-detail.component';
import { PendingBidsPopComponent } from './pending-bids-pop/pending-bids-pop.component';
import { BidFormComponent } from './bid-form/bid-form.component';
import { EditAuctionFormComponent } from './edit-auction-form/edit-auction-form.component';
import { BidListComponent } from './bid-list/bid-list.component';
import { BidCardComponent } from './bid-card/bid-card.component';
import { CompletedAuctionDetailComponent } from './completed-auction-detail/completed-auction-detail.component';

@NgModule({
  declarations: [
    PublicComponent,
    LoginComponent,
    ProfileComponent,
    LoadingSpinnerComponent,
    HomeComponent,
    NavbarComponent,
    SearchbarComponent,
    ButtonComponent,
    FooterComponent,
    AccountSettingsComponent,
    DeleteAccountModalComponent,
    RedirectComponent,
    ItemFormComponent,
    AuctionFormComponent,
    CategoryNamePipe,
    PendingAuctionsPopComponent,
    SellingComponent,
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
    CompletedAuctionDetailComponent
   
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
