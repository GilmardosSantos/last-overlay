import React from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UserHooks from './hooks/user.hook';

export function App() {
  const [user, setUser] = React.useState('gsr11_');

  const friends = UserHooks.useFriends({ user });

  React.useEffect(() => {
    console.log(friends.data);
  }, [friends.data]);

  return (
    <main className="w-dvw h-dvh flex items-center justify-center bg-zinc-900">
      <button
        // onClick={getRecentTracks}
        className="p-2 rounded-md shadow-md outline-[0.5px] bg-amber-400 hover:bg-amber-200 hover:text-amber-400 text-amber-100 outline-amber-300 transition-all"
      >
        Call API
      </button>
    </main>
  );
}

const queryClient = new QueryClient();

function InnerApp() {
  return (
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  );
}

export default InnerApp;
