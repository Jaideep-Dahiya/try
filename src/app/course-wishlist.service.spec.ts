import { TestBed } from '@angular/core/testing';

import { CourseWishlistService } from './course-wishlist.service';

describe('CourseWishlistService', () => {
  let service: CourseWishlistService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CourseWishlistService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
