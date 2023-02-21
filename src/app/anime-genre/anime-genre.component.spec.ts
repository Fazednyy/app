import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimeGenreComponent } from './anime-genre.component';

describe('AnimeGenreComponent', () => {
  let component: AnimeGenreComponent;
  let fixture: ComponentFixture<AnimeGenreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnimeGenreComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnimeGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
