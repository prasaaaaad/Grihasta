import { Component, OnInit } from '@angular/core';
import { ActionSheetController } from '@ionic/angular';
import { Photo, PhotoService } from 'src/app/services/photo.service';

@Component({
  selector: 'app-raise-complaint',
  templateUrl: './raise-complaint.page.html',
  styleUrls: ['./raise-complaint.page.scss'],
})
export class RaiseComplaintPage implements OnInit {

  constructor(public actionSheetController: ActionSheetController, public photoService: PhotoService) { }

  async ngOnInit() {
    /* This will pre-load photos in the view */
    await this.photoService.loadSaved();
  }

  /* This will open an action-sheet to add photos */
  async onAddPhotosClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Add photos',
      buttons: [{
        text: 'Open camera',
        handler: () => {
          console.log('camera opened');
          this.photoService.addNewToGallery();
        }
      }, {
        text: 'Select from gallery',
        handler: () => {
          // this.route.navigate(['/temple']);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  public async onPhotoClick(photo: Photo, position: number) {
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      }, {
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          // Nothing to do, action sheet is automatically closed
        }
      }]
    });
    await actionSheet.present();
  }

}
