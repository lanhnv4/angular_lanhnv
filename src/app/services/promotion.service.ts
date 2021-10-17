import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Promotion } from '../shared/promotion';
import { PROMOTIONS } from '../shared/promotions';

@Injectable({
  providedIn: 'root'
})
export class PromotionService {

  constructor() { }
  getPromotions(): Observable<Promotion[]> {
    return of(PROMOTIONS).pipe();
  }

  getPromotion(id: string): Observable<Promotion> {
    return of(PROMOTIONS.filter((promo) => (promo.id === id))[0]).pipe();
  }

  getFeaturedPromotion(): Observable<Promotion>{
    return of(PROMOTIONS.filter((promotion) => promotion.featured)[0]).pipe();
  }
}
