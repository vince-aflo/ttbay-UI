import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { ToastService } from 'angular-toastify';
import { Auction } from 'src/app/core/models/auction.model';
import { AuctionService } from 'src/app/core/services/auction.service';

@Component({
  selector: 'app-completed-auction-detail',
  templateUrl: './completed-auction-detail.component.html',
  styleUrls: ['./completed-auction-detail.component.scss']
})
export class CompletedAuctionDetailComponent {
  auction!:Auction;
  userEmail!:string;
  currentImagePosition:number = 0;
  showAuctionForm:boolean = false;
  showBidForm:boolean = false;

  constructor(private auctionService: AuctionService,
    private router:Router,
    private toastService: ToastService,
    private oidcSecurityService: OidcSecurityService){}

  ngOnInit(): void {
    const routeInfo = this.router.url.split('/');
    const id = parseInt(routeInfo[routeInfo.length - 1])
    this.oidcSecurityService.getUserData().subscribe({
      next: (data) => {
        this.userEmail = data.email
        console.log(this.userEmail)

      }
    })
    this.auctionService.getAuction(id).subscribe({
      next:(data) => {
        this.auction = data;
        console.log(this.auction)
      },
      error:(err) => {
        this.toastService.error('Could not fetch item info')
        console.error(err);
      }
    })
  }

  toggleAuctionFormVisibility(){
    this.showAuctionForm = !this.showAuctionForm;
  }

  previousImage(){
    if(this.currentImagePosition > 0) this.currentImagePosition--
  }

  nextImage(){
    if(this.currentImagePosition < this.auction.item!.imageList.length - 1) this.currentImagePosition++
  }

}
