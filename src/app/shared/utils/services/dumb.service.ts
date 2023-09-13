import { Injectable } from "@angular/core";

@Injectable()
export class DumbService {
  constructor(){
    console.log('[DumbService] - Hey, I\'m actually very clever! 0_o');
  }

  isAdminRole(): boolean {

    // Faking data
    return true;
  }
}
