import { Injectable, NgZone, ChangeDetectorRef, ApplicationRef } from '@angular/core';

import { BehaviorSubject, Observable } from 'rxjs';

import { ISassJs, ISassJsCompileCallbackResult } from './sassjs.interface';

const Sass = require('sass.js/dist/sass');

Sass.setWorkerUrl('assets/dist/sass.worker.js');

const sass: ISassJs = new Sass();

var files = [
  'custom.scss',
  'scss/mixins/_alert.scss',
  'scss/mixins/_background-variant.scss',
  'scss/mixins/_badge.scss',
  'scss/mixins/_border-radius.scss',
  'scss/mixins/_box-shadow.scss',
  'scss/mixins/_breakpoints.scss',
  'scss/mixins/_buttons.scss',
  'scss/mixins/_caret.scss',
  'scss/mixins/_clearfix.scss',
  'scss/mixins/_float.scss',
  'scss/mixins/_forms.scss',
  'scss/mixins/_gradients.scss',
  'scss/mixins/_grid-framework.scss',
  'scss/mixins/_grid.scss',
  'scss/mixins/_hover.scss',
  'scss/mixins/_image.scss',
  'scss/mixins/_list-group.scss',
  'scss/mixins/_lists.scss',
  'scss/mixins/_nav-divider.scss',
  'scss/mixins/_navbar-align.scss',
  'scss/mixins/_pagination.scss',
  'scss/mixins/_reset-text.scss',
  'scss/mixins/_resize.scss',
  'scss/mixins/_screen-reader.scss',
  'scss/mixins/_size.scss',
  'scss/mixins/_table-row.scss',
  'scss/mixins/_text-emphasis.scss',
  'scss/mixins/_text-hide.scss',
  'scss/mixins/_text-truncate.scss',
  'scss/mixins/_transition.scss',
  'scss/mixins/_visibility.scss',
  'scss/utilities/_visibility.scss',
  'scss/utilities/_align.scss',
  'scss/utilities/_background.scss',
  'scss/utilities/_borders.scss',
  'scss/utilities/_clearfix.scss',
  'scss/utilities/_display.scss',
  'scss/utilities/_embed.scss',
  'scss/utilities/_flex.scss',
  'scss/utilities/_float.scss',
  'scss/utilities/_position.scss',
  'scss/utilities/_screenreaders.scss',
  'scss/utilities/_sizing.scss',
  'scss/utilities/_spacing.scss',
  'scss/utilities/_text.scss',
  'scss/utilities/_visibility.scss',
  'scss/_alert.scss',
  'scss/_badge.scss',
  'scss/_breadcrumb.scss',
  'scss/_button-group.scss',
  'scss/_buttons.scss',
  'scss/_card.scss',
  'scss/_carousel.scss',
  'scss/_close.scss',
  'scss/_code.scss',
  'scss/_custom-forms.scss',
  'scss/_dropdown.scss',
  'scss/_forms.scss',
  'scss/_functions.scss',
  'scss/_grid.scss',
  'scss/_images.scss',
  'scss/_input-group.scss',
  'scss/_jumbotron.scss',
  'scss/_list-group.scss',
  'scss/_media.scss',
  'scss/_mixins.scss',
  'scss/_modal.scss',
  'scss/_nav.scss',
  'scss/_navbar.scss',
  'scss/_pagination.scss',
  'scss/_popover.scss',
  'scss/_print.scss',
  'scss/_progress.scss',
  'scss/_reboot.scss',
  'scss/_root.scss',
  'scss/_tables.scss',
  'scss/_tooltip.scss',
  'scss/_transitions.scss',
  'scss/_type.scss',
  'scss/_utilities.scss',
  'scss/_variables.scss',
  'scss/bootstrap-grid.scss',
  'scss/bootstrap-reboot.scss',
  'scss/bootstrap.scss'
];

var base = '../../assets/bootstrap';
// equals 'http://medialize.github.io/sass.js/scss/'

// the directory files should be made available in
var directory = '';


@Injectable({
  providedIn: 'root'
})
export class SassService {
  public compilation$: BehaviorSubject<string> = new BehaviorSubject<string>('');
  public compilationWaitingSubject$: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public compilationWaiting$: Observable<boolean>;

  constructor(private ref: ApplicationRef) {
    this.compilationWaiting$ = this.compilationWaitingSubject$.asObservable();
  }

  public compile(scssToCompile: string): void {
    this.compilationWaitingSubject$.next(true);

    sass.preloadFiles(base, directory, files, () => {
      sass.compile(scssToCompile, (result2: ISassJsCompileCallbackResult) => {
        this.compilation$.next(result2.text);
        this.compilationWaitingSubject$.next(false);

        this.ref.tick();
      });
    });
  }
}
