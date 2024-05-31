import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
// import { readdirSync } from 'fs';
// import { WorkspaceProject, WorkspaceSchema } from '@angular-devkit/core/src/workspace';
// import { BuilderContext, BuilderContextOptions } from '@angular-devkit/architect';

@Component({
  selector: "app-wood-panel-doors-component",
  templateUrl: "./wood-panel-doors-component.html",
  styleUrls: ["./wood-panel-doors-component.scss"],
})
export class WoodPanelDoorsComponent implements OnInit {
  //   public class MyClass {
  //     public static void main(String[] args) {

  //          for(int i=1; i<=36; i++){
  //            System.out.println("{ url: 'assets/img/Wood Panel Doors/wpd ("+i+").jpg' },");
  //         }

  //          for(int i=1; i<=3; i++){
  //            System.out.println("{ url: 'assets/img/Wood Panel Doors/wpd ("+i+").png' },");
  //         }
  //     }
  // }

  zoom: number = 14;
  lat: number = 44.445248;
  lng: number = 26.099672;
  styles: any[] = [
    {
      featureType: "water",
      elementType: "geometry",
      stylers: [{ color: "#e9e9e9" }, { lightness: 17 }],
    },
    {
      featureType: "landscape",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 20 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.fill",
      stylers: [{ color: "#ffffff" }, { lightness: 17 }],
    },
    {
      featureType: "road.highway",
      elementType: "geometry.stroke",
      stylers: [{ color: "#ffffff" }, { lightness: 29 }, { weight: 0.2 }],
    },
    {
      featureType: "road.arterial",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 18 }],
    },
    {
      featureType: "road.local",
      elementType: "geometry",
      stylers: [{ color: "#ffffff" }, { lightness: 16 }],
    },
    {
      featureType: "poi",
      elementType: "geometry",
      stylers: [{ color: "#f5f5f5" }, { lightness: 21 }],
    },
    {
      featureType: "poi.park",
      elementType: "geometry",
      stylers: [{ color: "#dedede" }, { lightness: 21 }],
    },
    {
      elementType: "labels.text.stroke",
      stylers: [{ visibility: "on" }, { color: "#ffffff" }, { lightness: 16 }],
    },
    {
      elementType: "labels.text.fill",
      stylers: [{ saturation: 36 }, { color: "#333333" }, { lightness: 40 }],
    },
    { elementType: "labels.icon", stylers: [{ visibility: "off" }] },
    {
      featureType: "transit",
      elementType: "geometry",
      stylers: [{ color: "#f2f2f2" }, { lightness: 19 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.fill",
      stylers: [{ color: "#fefefe" }, { lightness: 20 }],
    },
    {
      featureType: "administrative",
      elementType: "geometry.stroke",
      stylers: [{ color: "#fefefe" }, { lightness: 17 }, { weight: 1.2 }],
    },
  ];
  data: Date = new Date();
  focus;
  focus1;
  imageUrls: any = [];
  showImages = false;
  images2 = [
    { url: "assets/img/Double Ply Doors/img (1).jpg" },
    { url: "assets/img/Double Ply Doors/img (2).jpg" },
    { url: "assets/img/Double Ply Doors/img (3).jpg" },
    { url: "assets/img/Double Ply Doors/img (4).jpg" },
    { url: "assets/img/Double Ply Doors/img (5).jpg" },
    { url: "assets/img/Double Ply Doors/img (6).jpg" },
    { url: "assets/img/Double Ply Doors/img (7).jpg" },
    { url: "assets/img/Double Ply Doors/img (8).jpg" },
    { url: "assets/img/Double Ply Doors/img (9).jpg" },
    { url: "assets/img/Double Ply Doors/img (10).jpg" },
    { url: "assets/img/Double Ply Doors/img (11).jpg" },
    { url: "assets/img/Double Ply Doors/img (12).jpg" },
    { url: "assets/img/Double Ply Doors/img (13).jpg" },
    { url: "assets/img/Double Ply Doors/img (14).jpg" },
    { url: "assets/img/Double Ply Doors/img (15).jpg" },
    { url: "assets/img/Double Ply Doors/img (16).jpg" },
    { url: "assets/img/Double Ply Doors/img (17).jpg" },
    { url: "assets/img/Double Ply Doors/img (18).jpg" },
  ];

  images = [
    { url: "assets/img/Wood Panel Doors/wpd (1).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (2).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (3).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (4).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (5).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (6).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (7).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (8).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (9).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (10).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (11).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (12).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (13).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (14).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (15).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (16).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (17).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (18).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (19).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (20).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (21).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (22).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (23).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (24).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (25).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (26).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (27).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (28).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (29).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (30).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (31).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (32).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (33).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (34).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (35).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (36).jpg" },
    { url: "assets/img/Wood Panel Doors/wpd (1).png" },
    { url: "assets/img/Wood Panel Doors/wpd (2).png" },
    { url: "assets/img/Wood Panel Doors/wpd (3).png" },
  ];

  firstArray: { url: string }[];
  secondArray: { url: string }[];
  imageNames: string[];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    var rellaxHeader = new Rellax(".rellax-header");

    var body = document.getElementsByTagName("body")[0];
    body.classList.add("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.add("navbar-transparent");

    const originalArray = [1, 2, 3, 4, 5, 6];
    const middleIndex = Math.floor(this.images.length / 2);

    this.firstArray = this.images.slice(0, middleIndex);
    this.secondArray = this.images.slice(middleIndex);

    console.log(this.firstArray); // [1, 2, 3]
    console.log(this.secondArray); // [4, 5, 6]

    this.loadImageNames();
  }

  loadImageNames() {
    this.getAllImageNames().subscribe(
      (names: string[]) => {
        this.imageNames = names;
        console.log("this.imageNames: ", this.imageNames);
      },
      (error) => {
        console.error("Failed to load image names.", error);
      }
    );
  }

  getAllImageNames() {
    return this.http.get<string[]>("assets/image-names.json");
  }

  //   <div *ngFor="let imageName of imageNames">
  //   <img [src]="getImageUrl(imageName)" alt="Image">
  //   </div>
  getImageUrl(imageName: string): string {
    return `assets/img/Double Ply Doors/${imageName}`;
  }

  getImagesFromFolder(folderPath: string) {
    // Get the list of all image files from the folder
    // const imageFiles = require.context(folderPath, false, /\.(png|jpe?g|gif|svg)$/);
    // return imageFiles.keys().map(imageFiles);
  }

  ngOnDestroy() {
    var body = document.getElementsByTagName("body")[0];
    body.classList.remove("profile-page");
    var navbar = document.getElementsByTagName("nav")[0];
    navbar.classList.remove("navbar-transparent");
  }
}
