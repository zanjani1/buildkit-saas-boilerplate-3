import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#1A1423',
  primary: '#241735',
  secondary: '#774C60E5',
  dark: true,
};

export default async function Waitlist2() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
