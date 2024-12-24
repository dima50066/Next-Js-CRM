import StatusLabel, { Status } from './components/status-label';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <StatusLabel status={Status.Active}>Active</StatusLabel>
      <StatusLabel status={Status.NotActive}>Not Active</StatusLabel>
      <StatusLabel status={Status.Pending}>Pending</StatusLabel>
      <StatusLabel status={Status.Suspended}>Suspended</StatusLabel>
    </div>
  );
}
