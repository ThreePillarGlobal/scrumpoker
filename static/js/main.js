(function () {
  'use strict';

  window.nj = nunjucks;
  nj.configure("/static/views", { autoescape: true });
})();