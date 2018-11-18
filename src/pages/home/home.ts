import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { normalizeURL } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  imageData: any;

  constructor(public navCtrl: NavController,
    private camera: Camera) {

  }

  takePictureFromCamera() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 1,
      cameraDirection: this.camera.Direction.BACK
    }

    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData: ', imageData);
      this.imageData = normalizeURL(imageData);
      console.log('normaliza imageData: ', this.imageData);
    }, (err) => {
      console.log('error: ', err);
    });
  }

  takeASefie() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 1,
      cameraDirection: this.camera.Direction.FRONT
    }

    this.camera.Direction.FRONT;
    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData: ', imageData);
      this.imageData = normalizeURL(imageData);
      console.log('normaliza imageData: ', this.imageData);
    }, (err) => {
      console.log('error: ', err);
    });
  }

  takePictureFromAlbum() {
    let options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      sourceType: 0
    }
    this.camera.getPicture(options).then((imageData) => {
      console.log('imageData: ', imageData);
      this.imageData = normalizeURL(imageData);
      console.log('normaliza imageData: ', this.imageData);
    }, (err) => {
      console.log('error: ', err);
    });
  }
}
