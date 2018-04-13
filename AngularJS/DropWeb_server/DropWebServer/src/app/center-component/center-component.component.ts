import {Component, ElementRef, EventEmitter, Input, Output, ViewChild, HostListener, OnInit} from '@angular/core';
import { HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';
import { DropzoneComponent , DropzoneDirective,
  DropzoneConfigInterface } from 'ngx-dropzone-wrapper';
// import {FileService} from '../file.service';




@Component({
  selector: 'app-center-component',
  templateUrl: './center-component.component.html',
  styleUrls: ['./center-component.component.css']
})


export class CenterComponentComponent implements OnInit {
  public type: string = 'component';

  public disabled: boolean = false;

  public config: DropzoneConfigInterface = {
    clickable: true,
    maxFiles: 1,
    autoReset: null,
    errorReset: null,
    cancelReset: null
  };

  @ViewChild(DropzoneComponent) componentRef: DropzoneComponent;
  @ViewChild(DropzoneDirective) directiveRef: DropzoneDirective;
  getImg = null;
  getImg2 = null;
  imgOut = null;
  imageTest = 'http://178.62.39.172:3333/uploads/2018-03-27T16:02:24.558Zrodrigo-capuski-238342.jpg';
  qrname = '';
  fname = '';
  success = 0;
  menuopen = true;
  infoOpen = true;
  helpOpen = true;
  faqOpen = true;
  decodedData = null;
  @ViewChild('img') img: ElementRef;
  constructor(private httpClient: HttpClient ) { }
  selectedFile: File = null;
  ngOnInit() { }
  onFileSelected(event) {
    this.selectedFile = <File>event.target.files[0];
    console.log(event);
    console.log(this.selectedFile);
  }
  // onSubmit() {
  //   const formData = new FormData();
  //   const date = new Date().toISOString();
  //   this.fname = date + this.img.nativeElement.files[0].name;
  //   console.log(this.img.nativeElement.files[0]);
  //   formData.append('name', this.img.nativeElement.files[0].name);
  //   formData.append('size', 'size');
  //   formData.append('imageFile',
  //     this.img.nativeElement.files[0], this.fname
  //     );
  //
  //   const headers = new HttpHeaders();
  //   headers.append('Content-Type', 'multipart/form-data');
  //   headers.append('Accept', 'application/json');
  //   this.httpClient.post('http://178.62.39.172:3030/images', formData, {headers: headers})
  //     .subscribe(
  //       (response) => {
  //         console.log(response);
  //         this.qrname = this.fname;
  //         this.success = 1;
  //       },
  //       (error) => {
  //         console.log(this.img.nativeElement.files[0].name + 'failed to upload, error:' + error);
  //       }
  //     );
  // }

  onSubmit(args: any) {
    const formData = new FormData();
    const date = new Date().toISOString();
    this.fname = date + args.name;
    formData.append('name', args.name);
    formData.append('size', 'size');
    formData.append('imageFile',
      args, this.fname
    );

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.httpClient.post('http://178.62.39.172:3333/images', formData, {headers: headers})
      .subscribe(
        (response) => {
          console.log(response);
          this.qrname = this.fname;
          this.success = 1;
        },
        (error) => {
          console.log(args.name + 'failed to upload, error:' + error);
        }
      );
  }
  public onUploadSuccess(args: any): void {
    const Idate = new Date().toISOString();
    console.log('onUploadSuccess:', args);
    console.log(args[1].files.file);
    const imgname = Idate+args[0].name;
    console.log(imgname);

    const headers = new HttpHeaders();
    headers.append('Content-Type', 'multipart/form-data');
    headers.append('Accept', 'application/json');
    this.httpClient.post('http://178.62.39.172:3333/images',
      {name: imgname,
            image: args[1].files.file},
      {headers: headers})
      .subscribe(
        (response) => {
          console.log(response);
          this.qrname = imgname;
          this.success = 1;
        },
        (error) => {
          console.log(args.name + 'failed to upload, error:' + error);
        }
      );
  }

  public onUploadError(args: any): void {
    console.log('onUploadError:', args);
  }
  getImage() {
    this.httpClient.get('http://178.62.39.172:3333/images/2018-04-03T11:47:15.114Zdrop_pres_logo2.png')
      .subscribe(data => {
        this.getImg = data;
        this.imgOut = this.getImg.image;
        console.log(this.getImg.image);

      });
  }
  menu() {
    this.menuopen = false;
  }
  menuclose() {
    this.menuopen = true;
  }
  menuclose2() {
    this.menuopen = true;
    this.infoOpen = true;
    this.helpOpen = true;
    this.faqOpen = true;
  }
  infoPop() {
    this.infoOpen = false;
  }
  infoClose() {
    this.infoOpen = true;
  }
  helpPop() {
    this.helpOpen = false;
  }
  helpClose() {
    this.helpOpen = true;
  }
  faqPop() {
    this.faqOpen = false;
  }
  faqClose() {
    this.faqOpen = true;
  }

reset() {
  window.location.reload(false);
}


  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleAutoReset(): void {
    this.config.autoReset = this.config.autoReset ? null : 5000;
    this.config.errorReset = this.config.errorReset ? null : 5000;
    this.config.cancelReset = this.config.cancelReset ? null : 5000;
  }

  public toggleMultiUpload(): void {
    this.config.maxFiles = this.config.maxFiles ? null : 1;
  }

  public toggleClickAction(): void {
    this.config.clickable = !this.config.clickable;
  }

  public resetDropzoneUploads(): void {
    if (this.type === 'directive') {
      this.directiveRef.reset();
    } else {
      this.componentRef.directiveRef.reset();
    }
  }
  // handleDrop(fileList: FileList) {
  //   const filesIndex =.range(fileList.length)
  //     .each
  // }

  // ---------------
  // onFileChange(event){
  //   let files = event.target.files;
  //   this.saveFiles(files);
  // }
  //
  // @HostListener('dragover', ['$event']) onDragOver(event) {
  //   this.dragAreaClass = "droparea";
  //   event.preventDefault();
  // }
  //
  // @HostListener('dragenter', ['$event']) onDragEnter(event) {
  //   this.dragAreaClass = "droparea";
  //   event.preventDefault();
  // }
  //
  // @HostListener('dragend', ['$event']) onDragEnd(event) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  // }
  //
  // @HostListener('dragleave', ['$event']) onDragLeave(event) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  // }
  // @HostListener('drop', ['$event']) onDrop(event) {
  //   this.dragAreaClass = "dragarea";
  //   event.preventDefault();
  //   event.stopPropagation();
  //   var files = event.dataTransfer.files;
  //   this.saveFiles(files);
  // }
  //
  //
  // saveFiles(files){
  //   this.errors = []; // Clear error
  //   // Validate file size and allowed extensions
  //   if (files.length > 0 && (!this.isValidFiles(files))) {
  //     this.uploadStatus.emit(false);
  //     return;
  //   }
  //
  //   if (files.length > 0) {
  //     let formData: FormData = new FormData();
  //     for (var j = 0; j < files.length; j++) {
  //       formData.append("file[]", files[j], files[j].name);
  //     }
  //     var parameters = {
  //       projectId: this.projectId,
  //       sectionId: this.sectionId
  //     }
  //     this.fileService.upload(formData, parameters)
  //       .subscribe(
  //         success => {
  //           this.uploadStatus.emit(true);
  //           console.log(success)
  //         },
  //         error => {
  //           this.uploadStatus.emit(true);
  //           this.errors.push(error.ExceptionMessage);
  //         })
  //   }
  // }
  //
  //
  // private isValidFiles(files){
  //   // Check Number of files
  //   if (files.length > this.maxFiles) {
  //     this.errors.push("Error: At a time you can upload only " + this.maxFiles + " files");
  //     return;
  //   }
  //   this.isValidFileExtension(files);
  //   return this.errors.length === 0;
  // }
  //
  // private isValidFileExtension(files){
  //   // Make array of file extensions
  //   var extensions = (this.fileExt.split(','))
  //     .map(function (x) { return x.toLocaleUpperCase().trim() });
  //
  //   for (var i = 0; i < files.length; i++) {
  //     // Get file extension
  //     var ext = files[i].name.toUpperCase().split('.').pop() || files[i].name;
  //     // Check the extension exists
  //     var exists = extensions.includes(ext);
  //     if (!exists) {
  //       this.errors.push("Error (Extension): " + files[i].name);
  //     }
  //     // Check file size
  //     this.isValidFileSize(files[i]);
  //   }
  // }
  //
  //
  // private isValidFileSize(file) {
  //   var fileSizeinMB = file.size / (1024 * 1000);
  //   var size = Math.round(fileSizeinMB * 100) / 100; // convert upto 2 decimal place
  //   if (size > this.maxSize)
  //     this.errors.push("Error (File Size): " + file.name + ": exceed file size limit of " + this.maxSize + "MB ( " + size + "MB )");
  // }
}

