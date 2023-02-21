import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResentEpisodesComponent } from './resent-episodes.component';

describe('ResentEpisodesComponent', () => {
  let component: ResentEpisodesComponent;
  let fixture: ComponentFixture<ResentEpisodesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResentEpisodesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResentEpisodesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
