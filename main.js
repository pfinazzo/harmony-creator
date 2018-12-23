require('./server');

const notes = ['C2', 'C#2', 'D2', 'D#2', 'E2', 'F2', 'F#2', 'G2', 'G#2', 'A2', 'A#2', 'B2', 'C3', 'C#3', 'D3', 'D#3', 'E3', 'F3', 'F#3', 'G3', 'G#3', 'A3', 'A#3', 'B3', 'C4', 'C#4', 'D4', 'D#4', 'E4', 'F4', 'F#4', 'G4', 'G#4', 'A4', 'A#4', 'B4'];





function createChords(base, type) {

  var midpoint = notes.indexOf(base);
  const majorSeven = [notes[midpoint], notes[midpoint + 4], notes[midpoint + 7], notes[midpoint + 11]];
  const majorSevenFirstInversion = [notes[midpoint + -8], notes[midpoint], notes[midpoint + 7], notes[midpoint + 11]];
  const majorSevenFirstInversionTwo = [notes[midpoint + -8], notes[midpoint + -1], notes[midpoint], notes[midpoint + 7]];
  const majorSevenSecondInversion = [notes[midpoint + -5], notes[midpoint], notes[midpoint + 4], notes[midpoint + 11]];
  const majorSevenSecondInversionTwo = [notes[midpoint + -5], notes[midpoint + -1], notes[midpoint], notes[midpoint + 4]];

  const minorSeven = [notes[midpoint], notes[midpoint + 3], notes[midpoint + 7], notes[midpoint + 10]];
  const minorSevenFirstInversion = [notes[midpoint + -9], notes[midpoint], notes[midpoint + 7], notes[midpoint + 10]];
  const minorSevenFirstInversionTwo = [notes[midpoint + -9], notes[midpoint + -2], notes[midpoint], notes[midpoint + 7]];
  const minorSevenSecondInversion = [notes[midpoint + -5], notes[midpoint], notes[midpoint + 3], notes[midpoint + 10]];
  const minorSevenSecondInversionTwo = [notes[midpoint + -5], notes[midpoint + -2], notes[midpoint], notes[midpoint + 3]];

  const dominantSeven = [notes[midpoint], notes[midpoint + 4], notes[midpoint + 7], notes[midpoint + 10]];
  const dominantSevenFirstInversion = [notes[midpoint + -8], notes[midpoint], notes[midpoint + 7], notes[midpoint + 10]];
  const dominantSevenFirstInversionTwo = [notes[midpoint + -8], notes[midpoint + -2], notes[midpoint], notes[midpoint + 7]];
  const dominantSevenSecondInversion = [notes[midpoint + -5], notes[midpoint], notes[midpoint + 4], notes[midpoint + 10]];
  const dominantSevenSecondInversionTwo = [notes[midpoint + -5], notes[midpoint + -2], notes[midpoint], notes[midpoint + 4]];

  const minorSevenFlatFive = [notes[midpoint], notes[midpoint + 3], notes[midpoint + 6], notes[midpoint + 10]];
  const minorSevenFlatFiveFirstInversion = [notes[midpoint + -9], notes[midpoint], notes[midpoint + 6], notes[midpoint + 10]];
  const minorSevenFlatFiveFirstInversionTwo = [notes[midpoint + -9], notes[midpoint + -2], notes[midpoint], notes[midpoint + 6]];
  const minorSevenFlatFiveSecondInversion = [notes[midpoint + -6], notes[midpoint], notes[midpoint + 3], notes[midpoint + 10]];
  const minorSevenFlatFiveSecondInversionTwo = [notes[midpoint + -6], notes[midpoint + -2], notes[midpoint], notes[midpoint + 3]];

  const majorSevens = [majorSeven, majorSevenFirstInversion, majorSevenFirstInversionTwo, majorSevenSecondInversion, majorSevenSecondInversionTwo, majorSevenSecondInversionTwo];
  const minorSevens = [minorSeven, minorSevenFirstInversion, minorSevenFirstInversionTwo, minorSevenSecondInversion, minorSevenSecondInversionTwo]
  const dominantSevens = [dominantSeven, dominantSevenFirstInversion, dominantSevenFirstInversionTwo, dominantSevenSecondInversion, dominantSevenSecondInversionTwo];
  const minorSevenFlatFives = [minorSevenFlatFive, minorSevenFlatFiveFirstInversion, minorSevenFlatFiveFirstInversionTwo, minorSevenFlatFiveSecondInversion, minorSevenFlatFiveSecondInversionTwo];

  const chordTypes = {
    majorSevens,
    minorSevens,
    dominantSevens,
    minorSevenFlatFives
  }
  return chordTypes[type];
}

function createChordStructure(base) {
  console.log(base)
  console.log(notes[notes.indexOf(base)])
  return {
    one: createChords(base, 'majorSevens'),
    two: createChords(notes[notes.indexOf(base) + 2], 'minorSevens'),
    three: createChords(notes[notes.indexOf(base) + 4], 'minorSevens'),
    four: createChords(notes[notes.indexOf(base) + 5], 'majorSevens'),
    five: createChords(notes[notes.indexOf(base) + 7], 'dominantSevens'),
    six: createChords(notes[notes.indexOf(base) - 3], 'minorSevens'),
    seven: createChords(notes[notes.indexOf(base) - 1], 'minorSevenFlatFives')
  }

}

console.log(createChordStructure('D3'));
