import {Injectable} from '@angular/core';
import {Layout} from "../workspace/navbar/sheet-controls/layout-control/layout";
import {Color} from "../workspace/navbar/sheet-controls/color-control/color";
import {Font} from "../workspace/navbar/sheet-controls/typography-control/font";
import {FontSize} from "../workspace/navbar/sheet-controls/typography-control/font-size";
import {SectionItem} from "../workspace/navbar/sheet-controls/sections-control/section-item";
import {
  CustomSectionItem
} from "../workspace/navbar/sheet-controls/sections-control/custom-section-selector/custom-section-item";

@Injectable({
  providedIn: 'root'
})
export class SheetStateService {

  layout: Layout = Layout.Split;
  color: any = Color.AzureBlue;
  font: Font = Font.Nunito;
  fontSize: FontSize = FontSize.Medium;
  SectionItemsColumn1: SectionItem[] = [
    {label: 'Location', state: true},
    {label: 'Phone Number', state: true},
    {label: 'Email', state: true},
    {label: 'Website', state: true},
    {label: 'LinkedIn', state: true},
    {label: 'Custom 1', state: false},
    {label: 'Custom 2', state: false}
  ];
  SectionItemsColumn2: SectionItem[] = [
    {label: 'Picture', state: true},
    {label: 'About Me', state: true},
    {label: 'Role', state: true},
    {label: 'Work Experience', state: true},
    {label: 'Education', state: true},
    {label: 'Skills', state: true},
    {label: 'Languages', state: false},
    {label: 'Hobbies', state: false}
  ];
  customSectionItems: CustomSectionItem[] = [];

  setLayout(layout: Layout): void {
    this.layout = layout;
    console.log(`new layout = ${this.layout}`)
  }

  setColor(color: any) {
    this.color = color;
    console.log(`new color = ${this.color}`)
  }

  setFont(font: Font) {
    this.font = font;
    console.log(`new font = ${this.font}`)
  }

  setFontSize(fontSize: FontSize) {
    this.fontSize = fontSize;
    console.log(`new font = ${this.fontSize}`)
  }

  toggleSectionItem(item: SectionItem) {
    item.state = !item.state;
    const column = this.SectionItemsColumn1.includes(item)
      ? this.SectionItemsColumn1
      : (this.SectionItemsColumn2.includes(item) ? this.SectionItemsColumn2 : null);
    if (column) {
      let targetItem = column.find(x => x === item);
      console.log('Section item updated: ', targetItem);
    } else {
      console.log('Section item not found.');
    }
  }

  addCustomSection(customSectionItem: CustomSectionItem) {
    this.customSectionItems.push(customSectionItem);
    console.log('Custom section item added: ', this.customSectionItems);
  }
}
