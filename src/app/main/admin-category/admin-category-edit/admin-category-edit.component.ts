import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { CategoryService } from 'src/app/core/services/category.service';
import { FileUploadService } from 'src/app/core/services/fileupload.service';

@Component({
  selector: 'app-admin-category-edit',
  templateUrl: './admin-category-edit.component.html',
  styleUrls: ['./admin-category-edit.component.scss'],
})
export class AdminCategoryEditComponent implements OnInit {

  readonly MAX_SIZE: number = 1048576;

  modalTitle: string;
  modelId: number;
  GuidId : string;

  constructor(
    private modalController: ModalController,
    private categoryService : CategoryService,
    private uploadService: FileUploadService,
    private navParams: NavParams
  ) { }

  ngOnInit() {
    console.table(this.navParams);
    this.modelId = this.navParams.data.paramID;
    this.modalTitle = this.navParams.data.paramTitle;
  }

  async closeModal() {
    const onClosedData: string = "Wrapped Up!";    
    await this.modalController.dismiss(onClosedData);
  }

}
