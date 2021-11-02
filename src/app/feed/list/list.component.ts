// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
//
import { PostService } from '../../services/posts/post.service';
import { GetPostTestService } from '../../services/posts/poststests/post.service';
import { NotificationService } from '../../services/notifications/notification.service';
//
import { Post } from '../../interfaces/models/post.model';

/**
 * @title Card with data cards
 */
@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit, AfterViewInit {
  //
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  //
  panelOpenState = false;
  MatAccordionDisplayMode = 'flat';
  //
  // Posts info
  postList?: Post[];
  postListDate?: Post[][];
  postListLength?: String;
  postsTitlesArray?: String[];
  // Main card info
  authorInfo = 'Franklin Siqueira';
  mainCardTitle = 'Your Last Posts...';
  mainCardSubtitle?: String;

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(
    private listPostService: PostService,
    private testListPostService: GetPostTestService,
    private notifyNewPost: NotificationService
  ) {}

  // MatPaginator related properties
  pgIndex = 2;
  firstLastButtons = true;
  pnDisabled = true;
  hdPageSize = true;
  postsPerPage = 5;
  pageNumber = 1;
  totalPosts?: number;

  loading = false;
  pageNumberStr = '1';
  sortOn = 'postTitle';
  errorMessage = '';

  onPageChange(pageEvent: PageEvent) {
    //
    this.loading = true;
    this.postsPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.testListPostService.getAllPosts(this.postsPerPage, this.pageNumber);
    this.loading = false;
  }

  ngOnInit(): void {
    this.getPostsFromUser();
    this.notifyNewPost.postAddedObservable.subscribe(res => this.getPostsFromUser());
  }

  ngAfterViewInit() {
    // this.postList.sort = this.sort;
  }

  getPostsFromUser() {
    this.loading = true;
    this.listPostService.getPosts(this.pageNumberStr, this.sortOn, this.postsPerPage.toString()).subscribe((postsData) => {
      // this.postList = postsData.map((post) => post).sort((a: Post, b: Post) => { });
      this.postList = postsData;
      this.mainCardSubtitle = `You have ${postsData.length} published posts`;
      this.postsTitlesArray = postsData.map((Post) => Post.postTitle).sort();
      this.postListLength = postsData.length.toString();
      this.totalPosts = postsData.length;
      // console.log("titles:\n %s \n", this.postsTitlesArray.map(title => title));
      // this.postList.map((post) => console.log("Post: %s\n", post.id.$oid));
      // this.postsTitlesArray.map((title) => console.log("Title: %s\n", title.substr(0, 11)));
    },
    (error) => {
      this.errorMessage = error.message;
      this.loading = false;
    },
    () => {
      this.loading = false;
    }
    );
  }
}
// [length]="totalPosts"
// [pageSize]="postsPerPage"
// [pageSizeOptions]="[5, 10, 25, 50]"
// showFirstLastButtons="firstLastButtons"
// aria-label="Select page"
// (page)="onPageChange($event)"
