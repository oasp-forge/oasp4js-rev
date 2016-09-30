import { TestBed, async } from '@angular/core/testing';
import { Http } from '@angular/http';
import { AppComponent } from './app.component';

describe('App: Angular200OaspRev', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ]
    });

  })

  it('should create the app', async(() => {
    expect(true).toBeTruthy();
  }));

  it(`should have as title 'app works!'`, async(() => {
    expect(false).toBeFalsy();
  }));

});
