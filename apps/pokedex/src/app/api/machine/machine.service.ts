import { Injectable } from '@angular/core';
import { Machine, PxMachine } from '@pokedex-md/domain';
import { BaseService } from '../base.service';

@Injectable({
  providedIn: 'root',
})
export class MachineService extends BaseService<Machine, PxMachine> {
  protected get name(): string {
    return 'machine';
  }
}
