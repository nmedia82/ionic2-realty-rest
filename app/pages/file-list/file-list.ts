import {OnInit} from 'angular2/core';
import {Page, NavController, NavParams} from 'ionic-framework/ionic';
import {PropertyDetailsPage} from '../property-details/property-details';
import {FilesService} from '../../services/property-service';

@Page({
    templateUrl: 'build/pages/file-list/file-list.html'
})
export class FileListPage {

    static get parameters() {
        return [[NavController], [NavParams], [FileService]];
    }

    constructor(nav, navParams, fileService) {
        this.nav = nav;
        this.fileService = fileService;
        this.selectedItem = navParams.get('item');
    }

    ngOnInit() {
        this.fileService.findAll().subscribe(
            data => this.files = data.all
        );
    }

    itemTapped(event, file) {
        this.nav.push(fileDetailsPage, {
            file: file
        });
    }

}