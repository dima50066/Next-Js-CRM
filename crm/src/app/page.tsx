import AddCompanyButton from './components/add-company-button';
import ClientComponent from './components/client-component';
import ServerComponent from './components/server-component';
import ServerComponentCopy from './components/server-component copy';

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl">Home</h1>
      <AddCompanyButton />
      <ServerComponent />
      <ClientComponent>
        <ServerComponentCopy />
      </ClientComponent>
    </div>
  );
}
