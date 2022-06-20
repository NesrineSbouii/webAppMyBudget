import { Component } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { map, finalize } from "rxjs/operators";
import { Observable } from "rxjs";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent {

  profileForm: any;
  url: any;
  maxDate = new Date();

  constructor(private fb: FormBuilder) {

    this.profileForm = this.fb.group({
      image: [''],
      firstName: ['', Validators.required],
      lastName: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)],
      birthdate: [new Date()],
      address: ['']
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, 'images/rivers.jpg');

    const task = uploadBytesResumable(storageRef, file);

    task.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        console.log({ uploadState: snapshot.state })
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      },
      (error) => {
        console.error({ error })
      },
      () => {
        getDownloadURL(task.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
        });
      }
    );
  }

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}