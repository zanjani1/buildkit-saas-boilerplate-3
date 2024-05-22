import Waitlist from './Waitlist';

const colorScheme = {
  bg: '#031614',
  input: '#051A17',
  button: '#26AB75',
  border: '#51DCA3',
  dark: true,
};

export default async function Waitlist1() {
  return (
    <div>
      <Waitlist colorScheme={colorScheme} />
    </div>
  );
}
