import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#031614',
  primary: '#051A17',
  secondary: '#26AB75',
  dark: true,
};

export default async function Waitlist1() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
