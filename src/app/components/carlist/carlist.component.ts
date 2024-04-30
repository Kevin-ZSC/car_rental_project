import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Car } from '../../model/car';

@Component({
  selector: 'app-carlist',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './carlist.component.html',
  styleUrl: './carlist.component.css'
})
export class CarlistComponent implements OnInit {
  carObj = new Car;
  carList: Car[] = [];
  localKeyName: string = 'rentalCar'
  isSidePanelVisable: boolean = false;


  ngOnInit(): void {
    const localData = localStorage.getItem('rentalCar');
    if(localData != null ){
      this.carList = JSON.parse(localData)
    }
  }

  onSaveCars(){
    if(this.carObj.carId === 0) {
      this.carList.push(this.carObj)
      localStorage.setItem(this.localKeyName,JSON.stringify(this.carList))
      this.onReset();
    }
  }

  onReset() {
    this.carObj = new Car();
  }
}
