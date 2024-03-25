import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomSectionItem, Placement, SectionType} from "./custom-section-item";
import {NgIf} from "@angular/common";
import {SheetStateService} from "../../../../../services/sheet-state.service";

@Component({
  selector: 'app-custom-section-selector',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './custom-section-selector.component.html',
  styleUrl: './custom-section-selector.component.scss'
})
export class CustomSectionSelectorComponent implements OnInit {
  sectionType = SectionType;
  placement = Placement;
  customSectionForm!: FormGroup;
  showError: boolean = false;

  constructor(private formBuilder: FormBuilder, private sheetStateService: SheetStateService) {
  }

  ngOnInit(): void {
    this.customSectionForm = this.formBuilder.group({
      type: ['', Validators.required],
      placement: ['', Validators.required]
    });
  }

  addCustomSection() {
    if (this.customSectionForm.valid) {
      const customSectionItem: CustomSectionItem = {
        type: this.customSectionForm.value.type,
        placement: this.customSectionForm.value.placement
      };
      this.sheetStateService.addCustomSection(customSectionItem)

      this.showError = false;
      this.resetForm();
    } else {
      this.showError = true;
    }
  }

  private resetForm() {
    this.customSectionForm.reset({
      type: '',
      placement: ''
    });
  }
}
