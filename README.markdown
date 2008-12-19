# newWindow: a jQuery plugin

newWindow is a super-simple jQuery plugin for opening new browser windows
when an anchor is clicked.

## Usage

Open all links with a <code>rel</code> attribute of <code>external</code>
in a new window:

  <pre>
    $('a[rel~=external]').newWindow();
  </pre>

Add a callback when a new window is opened:

  <pre>
    $('#myLink').newWindow({
      open: function (newWindow, e) {
        console.log('Window opened', newWindow, e);
      }
    });
  </pre>

# Licensing

Licensed under the MIT:
http://www.opensource.org/licenses/mit-license.php

Copyright (c) 2008 Stateless Systems (http://statelesssystems.com)
