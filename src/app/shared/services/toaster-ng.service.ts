import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

@Injectable({
  providedIn: 'root'
})
export class ToasterNgService {

  constructor(
    private messageService: MessageService
  ) { }

  toasterSecsses(message:string) {
    this.messageService.add({ severity: 'success', detail: message });
  }
  toasterError() {
    this.messageService.add({ severity: 'error', summary: 'Error', detail: '' });
  }
}
