// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import { Component, OnInit, AfterViewInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
//
import { PostService } from '../../services/posts/post.service';
import { GetPostTestService } from '../../services/posts/poststests/post.service';
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
  // Posts info
  postList?: Post[];
  postListLength?: String;
  postsTitlesArray?: String[];
  // Main card info
  authorInfo = 'Franklin Siqueira';
  mainCardTitle = 'Your Last Posts...';
  mainCardSubtitle?: String;

  @ViewChild(MatSort) sort?: MatSort;
  @ViewChild(MatPaginator) paginator?: MatPaginator;

  constructor(private listPostService: PostService, private testListPostService: GetPostTestService) {}

  // MatPaginator related properties
  pgIndex = 2;
  firstLastButtons = true;
  pnDisabled = true;
  hdPageSize = true;
  postsPerPage?: number;
  pageNumber?: number;
  totalPosts?: number;

  onPageChange(pageEvent: PageEvent){
    //
    this.postsPerPage = +pageEvent.pageSize;
    this.pageNumber = +pageEvent.pageIndex + 1;
    this.testListPostService.getAllPosts(this.postsPerPage, this.pageNumber);
  }

  ngOnInit(): void {
    this.getPostsFromUser();
  }

  ngAfterViewInit() {
    // this.postList.sort = this.sort;
  }

  getPostsFromUser() {
    this.listPostService.getPosts().subscribe((postsData: Post[]) => {
      this.postList = postsData.sort();
      this.mainCardSubtitle = `You have ${postsData.length} published posts`;
      this.postsTitlesArray = postsData.map(Post => Post.postTitle);
      this.postListLength = postsData.length.toString();
      // console.log("titles:\n %s \n", this.postsTitlesArray.map(title => title));
      this.postsTitlesArray.map(title => console.log(title.substr(0, 11)));
    });
  }
}
// [length]="totalPosts"
// [pageSize]="postsPerPage"
// [pageSizeOptions]="[5, 10, 25, 50]"
// showFirstLastButtons="firstLastButtons"
// aria-label="Select page"
// (page)="onPageChange($event)"
