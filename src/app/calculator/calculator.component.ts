import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import categories from '../../api/categories.json';
import { Categories } from './category';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  
  categoryList:{id: number, name: string, gstPercentage:number}[]=categories;
  
  categories: Categories | undefined
  
  

  constructor() {}
  ngOnInit(): void {
  }
  
  mainFormGroup = new FormGroup({
    priceControl: new FormControl()
  });

  calculateGST() {
    var inputPrice: number = this.mainFormGroup.get('priceControl')!.value
    var cal = inputPrice *  categories.gstPercentage / 100;
   
    console.log(cal)
  }
}


   


