import { delay } from '@/constants/mock-api';
import { AreaGraph } from '@/components/dashboard/overview/area-graph';

export default async function AreaStats() {
  await await delay(2000);
  return <AreaGraph />;
}
