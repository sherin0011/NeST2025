import { ChangeDetectorRef, Component } from '@angular/core';
import { Apiservice } from '../../apiservice';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-products',
  imports: [RouterLink],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  products: any[] = [];

      constructor(private apiService: Apiservice,private cdr:ChangeDetectorRef) {}
      ngOnInit() {
        this.apiService.getProduct().subscribe((data: any) => {
          this.products = data;
          this.cdr.detectChanges()
        });

}
}
