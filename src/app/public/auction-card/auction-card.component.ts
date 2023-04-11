import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Auction } from 'src/app/core/models/auction.model';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.scss']
})
export class AuctionCardComponent {
  @Input() auction!:Auction;

  constructor(private router:Router) {}

  showAuctionDetails(){
    if (this.auction.status != 'END') {
      this.router.navigateByUrl(`/live-auction-detail/${this.auction.auctionId}`)
    } else {
      this.router.navigateByUrl(`/completed-auction-detail/${this.auction.auctionId}`)
    }
  }
}
