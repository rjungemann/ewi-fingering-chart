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

function FingeringError(message) {
  this.message = message;
  this.stack = Error().stack;
}

FingeringError.prototype = Object.create(Error.prototype);
FingeringError.prototype.name = "FingeringError";

$.fn.svgFunctions = {
  addClass: function (className) {
    $(this).attr('class', function(index, classNames) {
      return classNames + ' ' + className;
    });
  },

  removeClass: function (className) {
    $(this).attr('class', function(index, classNames) {
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
    stringNote = notes[newNote];

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
