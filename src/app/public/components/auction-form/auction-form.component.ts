import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Item } from 'src/app/core/models/item.model';
import { AuctionService } from 'src/app/core/services/auction.service';

@Component({
  selector: 'app-auction-form',
  templateUrl: './auction-form.component.html',
  styleUrls: ['./auction-form.component.scss']
})
export class AuctionFormComponent implements OnInit {
  auctionForm!:FormGroup;
  @Input() itemToAuction!:Item
  @Output() setToFalse: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private router:Router, 
    private auctionService: AuctionService,
    private toastService: ToastService){}


  ngOnInit(): void {
    this.auctionForm = new FormGroup({
      itemId: new FormControl(this.itemToAuction.itemId, [Validators.required]),
      price: new FormControl(null, [Validators.required, Validators.pattern('[0-9]*(\.[0-9]{0,2})?')]),
      startDate: new FormControl(null, [Validators.required, dateValidator()]),
      endDate: new FormControl(null, [Validators.required, dateValidator()]),
      status: new FormControl('SCHEDULED')
    })
  }

  sendHideEvent(){
    this.setToFalse.emit(false);
  }

  getMinDate(){
    const value = new Date().toISOString().slice(0,new Date().toISOString().lastIndexOf(":"))
    return value
  }

  setEndDate(event:any){
    const days = event.target.value
    const result = new Date(this.auctionForm.get('startDate')!.value)
    result.setDate(result.getDate() + parseInt(days))
    const dateString = result.toISOString().slice(0, result.toISOString().lastIndexOf(':'))
    this.auctionForm.get('endDate')!.patchValue(dateString)
    //set or patch the auctionForm
  }


  scheduleAuction(){
    // console.log(this.auctionForm.value)
    if(this.auctionForm.valid){
      this.auctionService.createAuction(this.auctionForm.value)
      .subscribe({
        next:(value) => {
          this.sendHideEvent()
          this.router.navigateByUrl('/dashboard')
        },
        error: (err) => {
          this.toastService.error('Could not create auction')
          console.log(err)
        }
      })
    } else {
      this.toastService.error("Invalid form")
    }
  }

}

export function dateValidator(): ValidatorFn {
  return (control: AbstractControl): {[key: string]: any} | null => {
    const today = new Date().getTime();

    if(!(control && control.value)) {
      // if there's no control or no value, that's ok
      return null;
    }

    // return null if there's no errors
    return new Date(control.value).getTime() < today 
      ? {invalidDate: 'You cannot use past dates' } 
      : null;
  }
}