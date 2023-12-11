import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';

@Component({
  selector: 'app-home',
  templateUrl: './camera.component.html',
  styleUrls: ['./camera.component.scss'],
})
export class HomePage {
  public photo: string | undefined;

  async takePicture() {
    try {
      const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: false,
        resultType: CameraResultType.DataUrl,
        source: CameraSource.Camera,
      });

      this.photo = image.dataUrl;
    } catch (error) {
      console.error('Error taking photo', error);
    }
  }
}
