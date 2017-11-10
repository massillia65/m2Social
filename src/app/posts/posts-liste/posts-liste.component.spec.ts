import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsListeComponent } from './posts-liste.component';

describe('PostsListeComponent', () => {
  let component: PostsListeComponent;
  let fixture: ComponentFixture<PostsListeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostsListeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostsListeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
