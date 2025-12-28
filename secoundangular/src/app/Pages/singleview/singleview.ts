import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { Apiservice } from '../../apiservice';

@Component({
  selector: 'app-singleview',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './singleview.html',
  styleUrls: ['./singleview.css']
})
export class SingleviewComponent  {

  singleProduct: any ;

  constructor(
    private apiservice: Apiservice,
    private route: ActivatedRoute,private cdr:ChangeDetectorRef
  ) {}

  ngOnInit(){
    const productId = this.route.snapshot.paramMap.get('id');
    console.log(productId);

    if (productId) {
      this.apiservice.getsingleProduct(productId).subscribe((data: any) => {
        this.singleProduct = data;
        console.log(data)
        this.cdr.detectChanges()
      });
    }
  }
}