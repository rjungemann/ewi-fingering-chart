var notes = {
  21: 'A0',
  22: 'A#0',
  23: 'B0',
  24: 'C1',
  25: 'C#1',
  26: 'D1',
  27: 'D#1',
  28: 'E1',
  29: 'F1',
  30: 'F#1',
  31: 'G1',
  32: 'G#1',
  33: 'A1',
  34: 'A#1',
  35: 'B1',
  36: 'C2',
  37: 'C#2',
  38: 'D2',
  39: 'D#2',
  40: 'E2',
  41: 'F2',
  42: 'F#2',
  43: 'G2',
  44: 'G#2',
  45: 'A2',
  46: 'A#2',
  47: 'B2',
  48: 'C3',
  49: 'C#3',
  50: 'D3',
  51: 'D#3',
  52: 'E3',
  53: 'F3',
  54: 'F#3',
  55: 'G3',
  56: 'G#3',
  57: 'A3',
  58: 'A#3',
  59: 'B3',
  60: 'C4',
  61: 'C#4',
  62: 'D4',
  63: 'D#4',
  64: 'E4',
  65: 'F4',
  66: 'F#4',
  67: 'G4',
  68: 'G#4',
  69: 'A4',
  70: 'A#4',
  71: 'B4',
  72: 'C5',
  73: 'C#5',
  74: 'D5',
  75: 'D#5',
  76: 'E5',
  77: 'F5',
  78: 'F#5',
  79: 'G5',
  80: 'G#5',
  81: 'A5',
  82: 'A#5',
  83: 'B5',
  84: 'C6',
  85: 'C#6',
  86: 'D6',
  87: 'D#6',
  88: 'E6',
  89: 'F6',
  90: 'F#6',
  91: 'G6',
  92: 'G#6',
  93: 'A6',
  94: 'A#6',
  95: 'B6',
  96: 'C7',
  97: 'C#7',
  98: 'D7',
  99: 'D#7',
  100: 'E7',
  101: 'F7',
  102: 'F#7',
  103: 'G7',
  104: 'G#7',
  105: 'A7',
  106: 'A#7',
  107: 'B7',
  108: 'C8',
}

function moveNote (offsetY, isSharp, countStavesAbove, countStavesBelow) {
  var regex = /[\d\-\.]+/g;
  var transform = $('#high-c').attr('transform');
  var match = transform.match(regex);
  var x = parseFloat(match[0]);
  var y = 159 + offsetY;
  var newTransform = 'translate(' + x + ', ' + y + ') rotate(-25.000000) translate(-89.000000, -159.000000) ';

  $('#high-c').attr('transform', newTransform);
  $('#high-c-sharp').attr('transform', 'translate(0, ' + offsetY + ')');
  $('#high-c-sharp').css('opacity', isSharp ? 1 : 0);

  for (var i = 0; i < 8; i++) {
    $('#high-staff-' + (i + 1).toString()).css('display', 'none');
  }

  if (!isNaN(countStavesAbove) && countStavesAbove <= 8) {
    for (var i = 0; i < countStavesAbove; i++) {
      $('#high-staff-' + (i + 1).toString()).css('display', 'inline');
    }
  }

  for (var i = 0; i < 9; i++) {
    $('#low-staff-' + (i + 1).toString()).css('display', 'none');
  }

  if (!isNaN(countStavesBelow) && countStavesBelow <= 9) {
    for (var i = 0; i < countStavesBelow; i++) {
      $('#low-staff-' + (i + 1).toString()).css('display', 'inline');
    }
  }
}

  // 21: 'A0',
  // 22: 'A#0',
  // 23: 'B0',
  // 24: 'C1',
  // 25: 'C#1',
  // 26: 'D1',
  // 27: 'D#1',
  // 28: 'E1',
  // 29: 'F1',
  // 30: 'F#1',
  // 31: 'G1',
  // 32: 'G#1',
  // 33: 'A1',
  // 34: 'A#1',
  // 35: 'B1',
  // 36: 'C2',
  // 37: 'C#2',
  // 38: 'D2',
  // 39: 'D#2',
  // 40: 'E2',
  // 41: 'F2',
  // 42: 'F#2',
  // 43: 'G2',
  // 44: 'G#2',
  // 45: 'A2',
  // 46: 'A#2',
  // 47: 'B2',
  // 48: 'C3',
  // 49: 'C#3',
  // 50: 'D3',
  // 51: 'D#3',
  // 52: 'E3',
  // 53: 'F3',
  // 54: 'F#3',
  // 55: 'G3',
  // 56: 'G#3',
  // 57: 'A3',
  // 58: 'A#3',
  // 59: 'B3',
  // 60: 'C4',
  // 61: 'C#4',
var staffNotes = {
  31: function () {
    moveNote(189, false, 0, 10);
  },
  32: function () {
    moveNote(189, true, 0, 10);
  },
  33: function () {
    moveNote(181, false, 0, 10);
  },
  34: function () {
    moveNote(181, true, 0, 9);
  },
  35: function () {
    moveNote(173, false, 0, 9);
  },
  36: function () {
    moveNote(165, false, 0, 8);
  },
  37: function () {
    moveNote(165, true, 0, 8);
  },
  38: function () {
    moveNote(158, false, 0, 8);
  },
  39: function () {
    moveNote(158, true, 0, 8);
  },
  40: function () {
    moveNote(150, false, 0, 7);
  },
  41: function () {
    moveNote(143, false, 0, 7);
  },
  42: function () {
    moveNote(143, true, 0, 7);
  },

  43: function () {
    moveNote(135, false, 0, 6);
  },
  44: function () {
    moveNote(135, true, 0, 6);
  },
  45: function () {
    moveNote(127, false, 0, 6);
  },
  46: function () {
    moveNote(127, true, 0, 6);
  },
  47: function () {
    moveNote(119, false, 0, 5);
  },
  48: function () {
    moveNote(112, false, -1, 5);
  },
  48: function () {
    moveNote(103, false, 0, 4);
  },
  49: function () {
    moveNote(103, true, 0, 4);
  },
  50: function () {
    moveNote(97, false, 0, 4);
  },
  51: function () {
    moveNote(97, true, 0, 4);
  },
  52: function () {
    moveNote(89, false, 0, 3);
  },
  53: function () {
    moveNote(82, false, 0, 3);
  },
  54: function () {
    moveNote(82, true, 0, 3);
  },
  55: function () {
    moveNote(74, false, 0, 2);
  },
  56: function () {
    moveNote(74, true, 0, 2);
  },
  57: function () {
    moveNote(66, false, 0, 2);
  },
  58: function () {
    moveNote(66, true, 0, 2);
  },
  59: function () {
    moveNote(58, false, 0, 1);
  },
  60: function () {
    moveNote(51, false, 0, 1);
  },
  61: function () {
    moveNote(51, true, 0, 1);
  },
  62: function () {
    moveNote(44, false, 0, 0);
  },
  63: function () {
    moveNote(44, false, 0, 0);
  },
  64: function () {
    moveNote(37, false, 0, 0);
  },
  65: function () {
    moveNote(28.5, false, 0, 0);
  },
  66: function () {
    moveNote(28.5, true, 0, 0);
  },
  67: function () {
    moveNote(21.5, false, 0, 0);
  },
  68: function () {
    moveNote(21.5, true, 0, 0);
  },
  69: function () {
    moveNote(14.5, false, 0, 0);
  },
  70: function () {
    moveNote(14.5, true, 0, 0);
  },
  71: function () {
    moveNote(7, false, 0, 0);
  },
  72: function () {
    moveNote(0, false, 0, 0);
  },
  73: function () {
    moveNote(0, true, 0, 0);
  },
  74: function () {
    moveNote(-7.5, false, 0, 0);
  },
  75: function () {
    moveNote(-7.5, true, 0, 0);
  },
  76: function () {
    moveNote(-15, false, 0, 0);
  },
  77: function () {
    moveNote(-22.5, false, 0, 0);
  },
  78: function () {
    moveNote(-22.5, true, 0, 0);
  },
  79: function () {
    moveNote(-29, false, 0, 0);
  },
  80: function () {
    moveNote(-29, true, 0, 0);
  },
  81: function () {
    moveNote(-36.5, false, 1, 0);
  },
  82: function () {
    moveNote(-36.5, true, 1, 0);
  },
  83: function () {
    moveNote(-44, false, 1, 0);
  },
  84: function () {
    moveNote(-44, true, 1, 0);
  },
  85: function () {
    moveNote(-52, false, 2, 0);
  },
  86: function () {
    moveNote(-52, true, 2, 0);
  },
  87: function () {
    moveNote(-59.5, false, 2, 0);
  },
  88: function () {
    moveNote(-67.5, false, 3, 0);
  },
  89: function () {
    moveNote(-74.5, false, 3, 0);
  },
  90: function () {
    moveNote(-74.5, true, 3, 0);
  },
  91: function () {
    moveNote(-82, false, 4, 0);
  },
  92: function () {
    moveNote(-82, true, 4, 0);
  },
  93: function () {
    moveNote(-89.5, false, 4, 0);
  },
};

window.moveNote = moveNote;
window.staffNotes = staffNotes;

function FingeringError(message) {
  this.message = message;
  this.stack = Error().stack;
}

FingeringError.prototype = Object.create(Error.prototype);
FingeringError.prototype.name = "FingeringError";

$.fn.svgFunctions = {
  addClass: function (className) {
    $(this).attr('class', function(index, classNames) {
      if (classNames === null || classNames === undefined) {
        return className;
      }

      return classNames + ' ' + className;
    });
  },

  removeClass: function (className) {
    $(this).attr('class', function(index, classNames) {
      if (classNames === null || classNames === undefined) {
        return '';
      }

      return classNames.replace(className, '');
    });
  },

  hasClass: function (className) {
    return $(this).attr('class').indexOf(className) !== -1;
  },

  toggleClass: function (className, condition) {
    if (condition !== undefined && condition !== null) {
      if (condition) {
        $(this).svg('addClass', className);
      } else {
        $(this).svg('removeClass', className);
      }

      return;
    }

    if ($(this).svg('hasClass', className)) {
      $(this).svg('removeClass', className);
    } else {
      $(this).svg('addClass', className);
    }
  }
};

$.fn.svg = function () {
  var args = Array.prototype.slice.call(arguments);
  var method = args[0];
  var otherArgs = args.slice(1, arguments.length);

  return $.fn.svgFunctions[method].apply(this, otherArgs);
};

function verifyOctaves(ids) {
  var octIds = _.intersection(ids, 'oct5 oct6 oct7 oct8'.split(' '));

  if (octIds.length === 0) {
    throw new FingeringError('At least one octave button must be pressed.');
  }

  if (octIds.length > 2) {
    throw new FingeringError('At most two octave buttons can be pressed.');
  }

  if (
    (octIds[0] === 'oct5' && octIds[1] === 'oct7') ||
    (octIds[0] === 'oct5' && octIds[1] === 'oct8') ||
    (octIds[0] === 'oct6' && octIds[1] === 'oct8')
  ) {
    throw new FingeringError('Pressed octave buttons must be adjacent');
  }

  if (
    octIds.length === 1 && octIds[0] === 'oct6' ||
    octIds.length === 1 && octIds[0] === 'oct7'
  ) {
    throw new FingeringError('Middle octave buttons cannot be pressed on their own');
  }
}

function fetchOctaveOffset(ids) {
  var octIds = _.intersection(ids, 'oct5 oct6 oct7 oct8'.split(' '));

  if (octIds.length === 1 && octIds[0] === 'oct5') {
    return -2;
  }

  if (octIds[0] === 'oct5' && octIds[1] === 'oct6') {
    return -1;
  }

  if (octIds[0] === 'oct6' && octIds[1] === 'oct7') {
    return 0;
  }

  if (octIds[0] === 'oct7' && octIds[1] === 'oct8') {
    return 1;
  }

  if (octIds[0] === 'oct8') {
    return 2;
  }
}

function calculateNoteWithoutOctave(baseNote, ids) {
  var newBaseNote = baseNote;

  if (_.contains(ids, 'l1')) {
    newBaseNote += -2;
  }

  if (_.contains(ids, 'bis')) {
    if (_.contains(ids, 'l1') && _.contains(ids, 'l2')) {
      // Do nothing...
    } else {
      newBaseNote += -1;
    }
  }

  if (_.contains(ids, 'l2')) {
    if (_.contains(ids, 'l1')) {
      newBaseNote += -2;
    } else {
      newBaseNote += -1;
    }
  }

  if (_.contains(ids, 'l3')) {
    newBaseNote += -2;
  }

  if (_.contains(ids, 'lpinky1')) {
    newBaseNote += 1;
  }

  if (_.contains(ids, 'lpinky2')) {
    newBaseNote += -1;
  }

  if (_.contains(ids, 'rside')) {
    if (_.contains(ids, 'lpinky1')) {
      // Do nothing...
    } else {
      newBaseNote += 1;
    }
  }

  if (_.contains(ids, 'r1')) {
    if (_.contains(ids, 'l3')) {
      newBaseNote += -2;
    } else {
      newBaseNote += -1;
    }
  }

  if (_.contains(ids, 'r2')) {
    newBaseNote += -1;
  }

  if (_.contains(ids, 'r3')) {
    newBaseNote += -2;
  }

  if (_.contains(ids, 'rpinky1')) {
    newBaseNote += 1;
  }

  if (_.contains(ids, 'rpinky2')) {
    newBaseNote += -1;
  }

  if (_.contains(ids, 'rpinky3')) {
    newBaseNote += -2;
  }

  return newBaseNote;
}

function update () {
  var ids = _.chain($('.selected'))
    .map(function (el) {
      return $(el).attr('id');
    })
    .sort()
    .value();

  var baseNote = 73; // C#5, or C# above middle C
  var newBaseNote = baseNote;
  var octaveOffset = 0;
  var newNote = 0;
  var stringNote = 'C#5';

  try {
    verifyOctaves(ids);

    octaveOffset = fetchOctaveOffset(ids);
    newBaseNote = calculateNoteWithoutOctave(baseNote, ids);
    newNote = newBaseNote + octaveOffset * 12;
    console.log(newNote);
    stringNote = notes[newNote];

    if (staffNotes[newNote]) {
      staffNotes[newNote]();
    }

    $('#note').text(stringNote);
    $('#error').text('');
    $('#info').removeClass('error');

  } catch (e) {
    if (e instanceof FingeringError) {
      console.log(e.message);
    }

    $('#note').text('?');
    $('#error').text(e.message);
    $('#info').addClass('error');
  }
}

function setup () {
  $('circle, rect').attr('class', '');

  $('#oct6, #oct7').svg('addClass', 'selected');

  update();

  $('circle, rect').on('click', function () {
    $(this).svg('toggleClass', 'selected');

    update();
  });
}

setup();
