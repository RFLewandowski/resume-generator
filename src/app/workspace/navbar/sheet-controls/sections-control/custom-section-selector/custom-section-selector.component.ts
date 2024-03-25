import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {CustomSectionItem, Placement, SectionType} from "./custom-section-item";
import {NgIf} from "@angular/common";

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

  constructor(private formBuilder: FormBuilder) {
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
      this.showError = false;
      console.log(customSectionItem)
    } else {
      this.showError = true;
    }
  }
}
