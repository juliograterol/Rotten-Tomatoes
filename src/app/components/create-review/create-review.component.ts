import { Component, OnInit, Input } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import FetchApi from 'src/app/services/fetchapi.service';
import { AlertController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'create-review',
  templateUrl: './create-review.component.html',
  styleUrls: ['./create-review.component.scss'],
})
export class CreateReviewComponent implements OnInit {
  @Input() mediaId: any;
  @Input() mediaType: any;
  review: { userId: any; mediaId: any; content: string; rating: any } = {
    userId: '',
    mediaId: '',
    content: '',
    rating: '',
  };
  constructor(
    private storage: Storage,
    private fetchApi: FetchApi,
    private alertController: AlertController,
    private router: Router
  ) {}

  ngOnInit() {
    this.review.mediaId = this.mediaId;
  }

  confirmReview() {
    this.presentAlert(
      'Are you sure to share this review?',
      'This review cannot be changed.',
      [
        {
          text: 'CANCEL',
          role: 'cancel',
          handler: () => {
            console.log('Alert canceled');
          },
        },
        {
          text: 'SHARE',
          role: 'confirm',
          handler: () => {
            this.addReview();
            this.presentAlert(
              'Reviewd Shared!',
              'Now you can continue to share your opinions with other media!',
              [
                {
                  text: 'OK',
                  role: 'confirm',
                  handler: () => {
                    console.log('Alert canceled');
                    this.router.navigate(['tabs/discover']);
                  },
                },
              ]
            );
          },
        },
      ]
    );
  }

  async addReview() {
    this.review.userId = await this.storage.get('userId');
    if (this.review.content && this.review.rating) {
      try {
        const token = await this.storage.get('token');
        const review = await this.fetchApi.request(
          'POST',
          this.review,
          `/review/`,
          token
        );
      } catch (error) {
        console.log('Error', error);
      }
    } else {
      this.presentAlert(
        'Error',
        'To make a review, it needs content and rating.',
        [
          {
            text: 'OK',
            role: 'cancel',
          },
        ]
      );
    }
  }
  onReviewChange(event: any) {
    this.review.content = event;
  }
  handleChange(ev: any) {
    this.review.rating = ev.target.value;
  }
  async presentAlert(header: string, message: string, buttons: any[]) {
    const alert = await this.alertController.create({
      header: header,
      message: message,
      buttons: buttons,
    });

    await alert.present();
  }
}
