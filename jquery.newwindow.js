/*
 * newWindow: a jQuery plugin
 *
 * newWindow is a super-simple jQuery plugin for opening new browser windows
 * when an anchor is clicked.
 *
 * For usage and examples, visit:
 * http://github.com/alexrabarts/jquery-newwindow
 *
 * Licensed under the MIT:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright (c) 2008 Stateless Systems (http://statelesssystems.com)
 *
 * @author   Alex Rabarts (alexrabarts -at- gmail -dawt- com)
 * @requires jQuery v1.2 or later
 * @version  0.1
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