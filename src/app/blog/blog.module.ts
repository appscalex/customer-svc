import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from "@angular/router";
import {  XaminModule } from "../xamin/xamin.module";
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogOneColumnComponent } from './blog-one-column/blog-one-column.component';
import { BlogTwoColumnComponent } from './blog-two-column/blog-two-column.component';
import { BlogThreeColumnComponent } from './blog-three-column/blog-three-column.component';
import { BlogRightOneGridComponent } from './blog-right-one-grid/blog-right-one-grid.component';
import { BlogRightTwoGridComponent } from './blog-right-two-grid/blog-right-two-grid.component';
import { BlogLeftTwoGridComponent } from './blog-left-two-grid/blog-left-two-grid.component';
import { BlogLeftOneGridComponent } from './blog-left-one-grid/blog-left-one-grid.component';
import { BlogDetailsComponent } from './blog-details/blog-details.component';

const routes: Routes = [
  {
    path: '',
    component: BlogListComponent,
  },
  {
    path: 'blog-one-column-grid',
    component: BlogOneColumnComponent,
  },
  {
    path: 'blog-two-column-grid',
    component: BlogTwoColumnComponent,
  },
  {
    path: 'blog-three-column-grid',
    component: BlogThreeColumnComponent,
  },
  {
    path: 'blog-right-sidebar-grid-one',
    component: BlogRightOneGridComponent,
  },
  {
    path: 'blog-right-sidebar-grid-two',
    component: BlogRightTwoGridComponent,
  },
  {
    path: 'blog-left-sidebar-grid-one',
    component: BlogLeftOneGridComponent,
  },
  {
    path: 'blog-left-sidebar-grid-two',
    component: BlogLeftTwoGridComponent,
  },
  {
    path: 'blog-details',
    component: BlogDetailsComponent,
  },
];


@NgModule({
  declarations: [BlogListComponent, BlogOneColumnComponent, BlogTwoColumnComponent, BlogThreeColumnComponent, BlogRightOneGridComponent, BlogRightTwoGridComponent, BlogLeftTwoGridComponent, BlogLeftOneGridComponent, BlogDetailsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    XaminModule
  ]
})
export class BlogModule { }
