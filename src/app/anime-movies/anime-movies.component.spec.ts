import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeMoviesComponent } from './anime-movies.component';

describe('AnimeMoviesComponent', () => {
  let component: AnimeMoviesComponent;
  let fixture: ComponentFixture<AnimeMoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeMoviesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeMoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
