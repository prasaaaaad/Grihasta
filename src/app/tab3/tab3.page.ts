import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Camera, CameraResultType, CameraSource } from '@capacitor/core';
import { ActionSheetController, AlertController } from '@ionic/angular';
import { PhotoService } from '../services/photo.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  constructor(private alertController: AlertController, private router: Router, public actionSheetController: ActionSheetController, public photoService: PhotoService) { }

  async onChangeProfilePictureClick() {
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
        handler: this.takePicture
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  /* This method will display an alert to confirm log out */
  async onLogOut() {
    const alert = await this.alertController.create({
      header: 'Log out',
      message: 'Are you sure you would like to log out?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Log out cancelled.');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.router.navigateByUrl('login');
          }
        }
      ]
    });
    await alert.present();
  }

  async takePicture() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: true,
      source: CameraSource.Photos,
      resultType: CameraResultType.Uri
    });
    // image.webPath will contain a path that can be set as an image src.
    // You can access the original file using image.path, which can be
    // passed to the Filesystem API to read the raw data of the image,
    // if desired (or pass resultType: CameraResultType.Base64 to getPhoto)
    var imageUrl = image.webPath;
    // Can be set to the src of an image now
    //imageElement.src = imageUrl;
  }

}
