import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  constructor() { }



}

enum Layout { // TODO - move to external file and pass from service to component
  Split = "SPLIT_LAYOUT",
  Classic = "CLASSIC_LAYOUT",
  Hybrid = "HYBRID_LAYOUT"
}
