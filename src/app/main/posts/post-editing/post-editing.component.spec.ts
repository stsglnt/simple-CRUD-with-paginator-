import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostEditingComponent } from './post-editing.component';

describe('PostEditingComponent', () => {
  let component: PostEditingComponent;
  let fixture: ComponentFixture<PostEditingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostEditingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostEditingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
