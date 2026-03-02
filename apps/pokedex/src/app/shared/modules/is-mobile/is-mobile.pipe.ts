import { Pipe, PipeTransform } from '@angular/core';
import { Observable } from 'rxjs';
import { IsMobileService } from './is-mobile.service';

@Pipe({ name: 'isMobile', standalone: true })
export class IsMobilePipe implements PipeTransform {
  constructor(private readonly isMobileService: IsMobileService) {}

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  transform(_ = ''): Observable<boolean> {
    return this.isMobileService.isMobile$;
  }
}
