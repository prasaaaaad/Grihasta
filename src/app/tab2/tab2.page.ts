import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public appPages = [
    {
      title: 'Pramukh Meet',
      url: 'meet',
      icon: 'call'
    },
    {
      title: 'Maintenance',
      url: '/folder/Maintenance',
      icon: 'hammer'
    },
    {
      title: 'Club House',
      url: '/folder/ClubHouse',
      icon: 'barbell'
    },
    {
      title: 'Visitor Pass',
      url: '/folder/VistorPass',
      icon: 'finger-print'
    },
    {
      title: 'Parking',
      url: '/folder/Parking',
      icon: 'car'
    },
    {
      title: 'Raise Complaint',
      url: '/folder/RaiseComplaint',
      icon: 'warning'
    },
    {
      title: 'Nearby Services',
      url: '/folder/NearbyServices',
      icon: 'paper-plane'
    },
    {
      title: 'Food Delivery',
      url: '/folder/FoodDelivery',
      icon: 'fast-food'
    },
    {
      title: 'Temple',
      url: '/folder/Temple',
      icon: 'golf'
    },
    {
      title: 'Society Map',
      url: '/folder/Map',
      icon: 'map'
    },
    {
      title: 'Gallery of Events',
      url: '/folder/Gallery',
      icon: 'images'
    },
    {
      title: 'About App',
      url: '/folder/About',
      icon: 'information-circle'
    }
  ];

  constructor(public actionSheetController: ActionSheetController, private route: Router) { }

  /*   This will open an action-sheet for meet related options */
  async onMeetClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Meet',
      buttons: [{
        text: 'Attend meeting',
        handler: () => {
          // this.route.navigate(['/temple']);
        }
      }, {
        text: 'Call security',
        handler: () => {
          // this.route.navigate(['/temple']);
        }
      }, {
        text: 'Call maintenance',
        handler: () => {
          // this.route.navigate(['/temple']);
        }
      }, {
        text: 'Call neighbour',
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

  /*   This will open an action-sheet for visitor pass related options */
  async onVisitorPassClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Visitor Pass',
      buttons: [{
        text: 'Single day',
        handler: () => {
          this.route.navigate(['/visitor-pass']);
        }
      }, {
        text: 'Weekly',
        handler: () => {
          this.route.navigate(['/visitor-pass']);
        }
      }, {
        text: 'Monthly',
        handler: () => {
          this.route.navigate(['/visitor-pass']);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  /* This will open an action-sheet for temple related options */
  async onTempleClick() {
    const actionSheet = await this.actionSheetController.create({
      header: 'Temple',
      buttons: [{
        text: 'Live darshan',
        handler: () => {
          this.route.navigate(['/temple']);
        }
      }, {
        text: 'Digital aarti',
        handler: () => {
          this.route.navigate(['/temple']);
        }
      }, {
        text: 'Dakshina',
        handler: () => {
          this.route.navigate(['/temple']);
        }
      }, {
        text: 'Cancel',
        role: 'cancel'
      }]
    });
    await actionSheet.present();
  }

  onMaintenanceClick(): void {
    this.route.navigate(['/maintenance']);
  }

  onClubhouseClick(): void {
    this.route.navigate(['/clubhouse']);
  }

  onParkingClick(): void {
    this.route.navigate(['/parking']);
  }

  onRaiseComplaintClick(): void {
    this.route.navigate(['/raise-complaint']);
  }

  onNearbyServicesClick(): void {
    this.route.navigate(['/nearby-services']);
  }

  onFoodDeliveryClick(): void {
    this.route.navigate(['/food-delivery']);
  }

  onMapClick(): void {
    this.route.navigate(['/map']);
  }

  onGalleryClick(): void {
    this.route.navigate(['/gallery']);
  }

  onAboutAppClick(): void {
    this.route.navigate(['/about-app']);
  }

}
