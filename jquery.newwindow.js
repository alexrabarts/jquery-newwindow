/*
 * newWindow: a jQuery plugin
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 */

(function ($) {
  $.extend($.fn, {
    newWindow: function (options) {
      var defaults = {open: function () {}};
      options = $.extend(defaults, options || {});

      return this.each(function () {
        $(this).click(function (e) {
          e.preventDefault();
          var newWindow = open(this.href);
          options.open.call(newWindow, e);
        });
      });
    }
  });
})(jQuery);