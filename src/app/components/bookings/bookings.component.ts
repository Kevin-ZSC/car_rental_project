import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Booking, Car } from '../../model/car';

@Component({
  selector: 'app-bookings',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './bookings.component.html',
  styleUrl: './bookings.component.css'
})
export class BookingsComponent implements OnInit{
  carList: Car[] = [];
  localKeyName: string = 'rentalCar'
  isSidePanelVisable: boolean = false;
  bookingObj = new Booking;
  bookingList: Booking[] = [];

  ngOnInit(): void {
     debugger;
    const localData = localStorage.getItem(this.localKeyName);
    if(localData != null) {
      this.carList = JSON.parse(localData);
    }
    const localBookingData = localStorage.getItem('rentalBooking');
    if(localBookingData != null) {
      this.bookingList = JSON.parse(localBookingData);
    }
  }

  onBookingSave(){
    debugger;
    if(this.bookingObj.bookingId ==0) {
      const carData=  this.carList.find(m=>m.carId == this.bookingObj.carId);
      if(carData != undefined) {
        this.bookingObj.carName = carData?.name;
      } 
      this.bookingList.unshift(this.bookingObj);
      localStorage.setItem('rentalBooking',JSON.stringify(this.bookingList))
    }
  }

  onReset() {
      this.bookingObj = new Booking;
  }
}
