import { Component, OnInit } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { map, finalize } from "rxjs/operators";
import { from, Observable } from "rxjs";
import { AuthService } from "src/app/core/services/auth/auth.service";
import { UserService } from "../../users/services/user.service";
import { User } from "@angular/fire/auth";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})

export class ProfileComponent implements OnInit {

  profileForm: any;
  url: any;
  maxDate = new Date();
  uid: string | undefined;
  user$: Observable<User>;

  constructor(private fb: FormBuilder, private readonly auth: AuthService, private userService: UserService) {

    this.profileForm = this.fb.group({
      id: [''],
      image: ['assets/images/default-user.png'],
      firstName: ['', Validators.required],
      lastName: [''],
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', Validators.pattern(/^((\+)33|0)[1-9](\d{2}){4}$/)],
      birthdate: [''],
      address: ['']
    });


  }
  ngOnInit(): void {
    this.auth.currentUser().subscribe((user: any) => {
      this.profileForm.patchValue(user[0]);
    });
  }

  get imageF() {
    return this.profileForm.get('image');
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    const storage = getStorage();
    const storageRef = ref(storage, `users/${file}`);

    const task = uploadBytesResumable(storageRef, file);

    task.on('state_changed',
      (snapshot) => {
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
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
          this.imageF.setValue(downloadURL);
        });
      }
    );
  }

  onSubmit() {
    const form = this.profileForm.value;
    const birthdate = form.birthdate;
    form.birthdate = typeof birthdate === 'string'? birthdate :  form.birthdate?.toISOString().toString();
    this.userService.update(form);
  }
}