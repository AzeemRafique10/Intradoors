import { Component, OnInit } from "@angular/core";
import * as Rellax from "rellax";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs";
// import { readdirSync } from 'fs';
// import { WorkspaceProject, WorkspaceSchema } from '@angular-devkit/core/src/workspace';
// import { BuilderContext, BuilderContextOptions } from '@angular-devkit/architect';

@Component({
  selector: "app-pasting-doors-component",
  templateUrl: "./pasting-doors-component.html",
  styleUrls: ["./pasting-doors-component.scss"],
})
export class PastingDoorsComponent implements OnInit {
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
    { url: "assets/img/Pasting Doors/pd (1).jpg" },
    { url: "assets/img/Pasting Doors/pd (2).jpg" },
    { url: "assets/img/Pasting Doors/pd (3).jpg" },
    { url: "assets/img/Pasting Doors/pd (4).jpg" },
    { url: "assets/img/Pasting Doors/pd (5).jpg" },
    { url: "assets/img/Pasting Doors/pd (6).jpg" },
    { url: "assets/img/Pasting Doors/pd (7).jpg" },
    { url: "assets/img/Pasting Doors/pd (8).jpg" },
    { url: "assets/img/Pasting Doors/pd (9).jpg" },
    { url: "assets/img/Pasting Doors/pd (10).jpg" },
    { url: "assets/img/Pasting Doors/pd (11).jpg" },
    { url: "assets/img/Pasting Doors/pd (12).jpg" },
    { url: "assets/img/Pasting Doors/pd (13).jpg" },
    { url: "assets/img/Pasting Doors/pd (14).jpg" },
    { url: "assets/img/Pasting Doors/pd (15).jpg" },
    { url: "assets/img/Pasting Doors/pd (16).jpg" },
    { url: "assets/img/Pasting Doors/pd (17).jpg" },
    { url: "assets/img/Pasting Doors/pd (18).jpg" },
    { url: "assets/img/Pasting Doors/pd (19).jpg" },
    { url: "assets/img/Pasting Doors/pd (20).jpg" },
    { url: "assets/img/Pasting Doors/pd (21).jpg" },
    { url: "assets/img/Pasting Doors/pd (22).jpg" },
    { url: "assets/img/Pasting Doors/pd (23).jpg" },
    { url: "assets/img/Pasting Doors/pd (24).jpg" },
    { url: "assets/img/Pasting Doors/pd (25).jpg" },
    { url: "assets/img/Pasting Doors/pd (26).jpg" },
    { url: "assets/img/Pasting Doors/pd (27).jpg" },
    { url: "assets/img/Pasting Doors/pd (28).jpg" },
    { url: "assets/img/Pasting Doors/pd (29).jpg" },
    { url: "assets/img/Pasting Doors/pd (30).jpg" },
    { url: "assets/img/Pasting Doors/pd (31).jpg" },
    { url: "assets/img/Pasting Doors/pd (32).jpg" },
    { url: "assets/img/Pasting Doors/pd (33).jpg" },
    { url: "assets/img/Pasting Doors/pd (34).jpg" },
    { url: "assets/img/Pasting Doors/pd (35).jpg" },
    { url: "assets/img/Pasting Doors/pd (36).jpg" },
    { url: "assets/img/Pasting Doors/pd (37).jpg" },
    { url: "assets/img/Pasting Doors/pd (38).jpg" },
    { url: "assets/img/Pasting Doors/pd (39).jpg" },
    { url: "assets/img/Pasting Doors/pd (40).jpg" },
    { url: "assets/img/Pasting Doors/pd (41).jpg" },
    { url: "assets/img/Pasting Doors/pd (42).jpg" },
    { url: "assets/img/Pasting Doors/pd (43).jpg" },
    { url: "assets/img/Pasting Doors/pd (44).jpg" },
    { url: "assets/img/Pasting Doors/pd (45).jpg" },
    { url: "assets/img/Pasting Doors/pd (46).jpg" },
    { url: "assets/img/Pasting Doors/pd (47).jpg" },
    { url: "assets/img/Pasting Doors/pd (48).jpg" },
    { url: "assets/img/Pasting Doors/pd (49).jpg" },
    { url: "assets/img/Pasting Doors/pd (50).jpg" },
    { url: "assets/img/Pasting Doors/pd (51).jpg" },
    { url: "assets/img/Pasting Doors/pd (52).jpg" },
    { url: "assets/img/Pasting Doors/pd (53).jpg" },
    { url: "assets/img/Pasting Doors/pd (54).jpg" },
    { url: "assets/img/Pasting Doors/pd (55).jpg" },
    { url: "assets/img/Pasting Doors/pd (56).jpg" },
    { url: "assets/img/Pasting Doors/pd (57).jpg" },
    { url: "assets/img/Pasting Doors/pd (58).jpg" },
    { url: "assets/img/Pasting Doors/pd (59).jpg" },
    { url: "assets/img/Pasting Doors/pd (60).jpg" },
    { url: "assets/img/Pasting Doors/pd (61).jpg" },
    { url: "assets/img/Pasting Doors/pd (62).jpg" },
    { url: "assets/img/Pasting Doors/pd (63).jpg" },
    { url: "assets/img/Pasting Doors/pd (64).jpg" },
    { url: "assets/img/Pasting Doors/pd (65).jpg" },
    { url: "assets/img/Pasting Doors/pd (66).jpg" },
    { url: "assets/img/Pasting Doors/pd (67).jpg" },
    { url: "assets/img/Pasting Doors/pd (68).jpg" },
    { url: "assets/img/Pasting Doors/pd (69).jpg" },
    { url: "assets/img/Pasting Doors/pd (70).jpg" },
    { url: "assets/img/Pasting Doors/pd (71).jpg" },
    { url: "assets/img/Pasting Doors/pd (72).jpg" },
    { url: "assets/img/Pasting Doors/pd (73).jpg" },
    { url: "assets/img/Pasting Doors/pd (74).jpg" },
    { url: "assets/img/Pasting Doors/pd (75).jpg" },
    { url: "assets/img/Pasting Doors/pd (76).jpg" },
    { url: "assets/img/Pasting Doors/pd (77).jpg" },
    { url: "assets/img/Pasting Doors/pd (78).jpg" },
    { url: "assets/img/Pasting Doors/pd (79).jpg" },
    { url: "assets/img/Pasting Doors/pd (80).jpg" },
    { url: "assets/img/Pasting Doors/pd (81).jpg" },
    { url: "assets/img/Pasting Doors/pd (82).jpg" },
    { url: "assets/img/Pasting Doors/pd (83).jpg" },
    { url: "assets/img/Pasting Doors/pd (84).jpg" },
    { url: "assets/img/Pasting Doors/pd (85).jpg" },
    { url: "assets/img/Pasting Doors/pd (86).jpg" },
    { url: "assets/img/Pasting Doors/pd (87).jpg" },
    { url: "assets/img/Pasting Doors/pd (88).jpg" },
    { url: "assets/img/Pasting Doors/pd (89).jpg" },
    { url: "assets/img/Pasting Doors/pd (90).jpg" },
    { url: "assets/img/Pasting Doors/pd (91).jpg" },
    { url: "assets/img/Pasting Doors/pd (92).jpg" },
    { url: "assets/img/Pasting Doors/pd (93).jpg" },
    { url: "assets/img/Pasting Doors/pd (94).jpg" },
    { url: "assets/img/Pasting Doors/pd (95).jpg" },
    { url: "assets/img/Pasting Doors/pd (96).jpg" },
    { url: "assets/img/Pasting Doors/pd (97).jpg" },
    { url: "assets/img/Pasting Doors/pd (98).jpg" },
    { url: "assets/img/Pasting Doors/pd (99).jpg" },
    { url: "assets/img/Pasting Doors/pd (100).jpg" },
    { url: "assets/img/Pasting Doors/pd (101).jpg" },
    { url: "assets/img/Pasting Doors/pd (102).jpg" },
    { url: "assets/img/Pasting Doors/pd (103).jpg" },
    { url: "assets/img/Pasting Doors/pd (104).jpg" },
    { url: "assets/img/Pasting Doors/pd (105).jpg" },
    { url: "assets/img/Pasting Doors/pd (106).jpg" },
    { url: "assets/img/Pasting Doors/pd (107).jpg" },
    { url: "assets/img/Pasting Doors/pd (108).jpg" },
    { url: "assets/img/Pasting Doors/pd (109).jpg" },
    { url: "assets/img/Pasting Doors/pd (110).jpg" },
    { url: "assets/img/Pasting Doors/pd (111).jpg" },
    { url: "assets/img/Pasting Doors/pd (112).jpg" },
    { url: "assets/img/Pasting Doors/pd (113).jpg" },
    { url: "assets/img/Pasting Doors/pd (114).jpg" },
    { url: "assets/img/Pasting Doors/pd (115).jpg" },
    { url: "assets/img/Pasting Doors/pd (116).jpg" },
    { url: "assets/img/Pasting Doors/pd (117).jpg" },
    { url: "assets/img/Pasting Doors/pd (118).jpg" },
    { url: "assets/img/Pasting Doors/pd (119).jpg" },
    { url: "assets/img/Pasting Doors/pd (120).jpg" },
    { url: "assets/img/Pasting Doors/pd (121).jpg" },
    { url: "assets/img/Pasting Doors/pd (122).jpg" },
    { url: "assets/img/Pasting Doors/pd (123).jpg" },
    { url: "assets/img/Pasting Doors/pd (124).jpg" },
    { url: "assets/img/Pasting Doors/pd (125).jpg" },
    { url: "assets/img/Pasting Doors/pd (126).jpg" },
    { url: "assets/img/Pasting Doors/pd (127).jpg" },
    { url: "assets/img/Pasting Doors/pd (128).jpg" },
    { url: "assets/img/Pasting Doors/pd (129).jpg" },
    { url: "assets/img/Pasting Doors/pd (130).jpg" },
    { url: "assets/img/Pasting Doors/pd (131).jpg" },
    { url: "assets/img/Pasting Doors/pd (1).png" },
    { url: "assets/img/Pasting Doors/pd (2).png" },
    { url: "assets/img/Pasting Doors/pd (3).png" },
    { url: "assets/img/Pasting Doors/pd (4).png" },
    { url: "assets/img/Pasting Doors/pd (5).png" },
    { url: "assets/img/Pasting Doors/pd (6).png" },
    { url: "assets/img/Pasting Doors/pd (7).png" },
    { url: "assets/img/Pasting Doors/pd (8).png" },
    { url: "assets/img/Pasting Doors/pd (9).png" },
    { url: "assets/img/Pasting Doors/pd (10).png" },
    { url: "assets/img/Pasting Doors/pd (11).png" },
    { url: "assets/img/Pasting Doors/pd (12).png" },
    { url: "assets/img/Pasting Doors/pd (13).png" },
    { url: "assets/img/Pasting Doors/pd (14).png" },
    { url: "assets/img/Pasting Doors/pd (15).png" },
    { url: "assets/img/Pasting Doors/pd (17).png" },
    { url: "assets/img/Pasting Doors/pd (16).png" },
    { url: "assets/img/Pasting Doors/pd (18).png" },
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
