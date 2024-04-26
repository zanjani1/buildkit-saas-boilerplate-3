import { TableType } from '@/components/dashboard/sample-dashboard/table/Column';
import { addDays, format } from 'date-fns';

type TypeStatus = 'success' | 'pending' | 'failed';

// Function to select a random status
function randomStatus(): string {
  const statuses = ['success', 'pending', 'failed'];
  return statuses[Math.floor(Math.random() * statuses.length)];
}

// Function to generate random dates within a range using date-fns
function randomDate(start: Date, end: Date): string {
  const diff = end.getTime() - start.getTime();
  const newDate = addDays(start, Math.floor(Math.random() * (diff / (1000 * 3600 * 24))));
  return format(newDate, 'yyyy-MM-dd');
}

// Function to generate a random name and email
function randomNameEmail(): { name: string; email: string } {
  const firstNames = ['John', 'Jane', 'Sam', 'Alice', 'Bob'];
  const lastNames = ['Doe', 'Smith', 'Johnson', 'Lee', 'Brown'];
  const firstName = firstNames[Math.floor(Math.random() * firstNames.length)];
  const lastName = lastNames[Math.floor(Math.random() * lastNames.length)];
  const name = `${firstName} ${lastName}`;
  const email = `${firstName.toLowerCase()}.${lastName.toLowerCase()}@example.com`;
  return { name, email };
}

export const sampleTableData: TableType[] = Array.from({ length: 12 }, (_, i) => {
  const { name, email } = randomNameEmail();
  return {
    id: `728ed52f-${i}`, // Adding an index to make each ID unique
    status: randomStatus() as TypeStatus,
    email,
    name,
    date: randomDate(new Date(2021, 0, 1), new Date(2022, 11, 31)),
    message: 'Payment for the month of October',
  };
});
