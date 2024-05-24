// This is a completly modular waitlist component that can be used in any theme just by chainging the color scheme below.
// We have three color schemes available for the waitlist component as example.
// Select among following color scheems to try different waitlist themes
// You can add any color scheme of your choice to try different themes

import WaitlistComponent from '@/components/Waitlist';

// HOW TO USE:
// -----------
// 1. Uncomment the color scheme you want to use and comment the rest of the color schemes.
// 2. Pass the color scheme to the WaitlistComponent as a prop.

// const greenTheme = {
//   bg: '#031614',
//   input: '#051A17',
//   button: '#26AB75',
//   border: '#51DCA3',
//   dark: true,
// };

// const purpleTheme = {
//   bg: '#1A1423',
//   input: '#241735',
//   button: '#774C60E5',
//   border: '#856D78',
//   dark: true,
// };

const whiteTheme = {
  bg: '#FFFFFF',
  input: '#F7F7F7',
  button: '#0F6FFF',
  dark: false,
};

export default function Waitlist() {
  return (
    <>
      <WaitlistComponent colorScheme={whiteTheme} />
    </>
  );
}
