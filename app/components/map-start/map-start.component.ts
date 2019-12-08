import { Component, OnInit, ViewChild } from '@angular/core';
import { PagesService } from '../../services/pages.service';
import { CommonModule } from '@angular/common';

import { MapContentComponent } from '../map-content/map-content.component';

@Component({
  selector: 'app-map-start',
  templateUrl: './map-start.component.html',
  styleUrls: ['./map-start.component.css']
})
export class MapStartComponent implements OnInit {
  hiddenStart = false;
  pageData;
  linkNameList = [];

	constructor(private pagesService: PagesService) {
    this.pagesService.getPages().subscribe(data=>{
          this.pageData = data;

          this.linkNameList.push(this.pageData);
      });

	}


	ngOnInit() {

    }

  hideMapStart() {
    this.hiddenStart = true;
  }

  hideAllButClicked() {
    this.hiddenStart = true;
  }

  @ViewChild(MapContentComponent) child:MapContentComponent;
    setPageContent(contentName, index) {
      this.pagesService.setSelectedPageContent(contentName, index);
      this.child.getSelectedPageContentFromService();


      this.pagesService.setSelectedSubContent("", undefined);
      this.child.getSelectedSubContentFromService();
  }
}
