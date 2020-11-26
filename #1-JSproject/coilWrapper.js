//26 gauge kanthal is 3.31 Ohms per foot
//4mm inner diameter (tool is this dimention)
// FOR Data: 6wrap is .88 ohms
// want to know how many x wraps will be in ohm resistance
// 1 ft == 304.8 mm
/*
const ohmsPerMM = 3.31 / 304.8; //calcs the ohms per foot in mm
const legLengthError = 0.5; //length in mm outside of number of coils in coil length
const totalWraps =
  Number(prompt('How many wraps do you want to see the resistance for: ')) +
  legLengthError; // total number of wraps (for test value)

function calcWraps(dia, oPMM) {
  const radius = dia / 2;
  const wrapDimention = radius * Math.PI * 2; //distance around tool
  const ohmsPerWrap = oPMM * wrapDimention;
  return ohmsPerWrap;
}
/*
console.log(
  'One Wrap: ' +
    calcWraps(
      Number(prompt('Whats the diameter of the tool used to wrap (in mm): ')),
      ohmsPerMM
    )
); // one wrap resist
*/
/*
console.log(
  'Specified Wraps (adjusted): ' +
    calcWraps(
      Number(prompt('Whats the diameter of the tool used to wrap (in mm): ')),
      ohmsPerMM
    ) *
      totalWraps
);
*/
