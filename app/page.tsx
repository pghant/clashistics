import Search from '@components/search';

export default function Home() {
  return (
    <>
      <section>
        <h1 className="text-5xl my-8">Welcome to Clashistics</h1>
        <p className="mt-4">
          You can use this site to keep track of your progress in Clash of
          Clans. Track your own account as well as your clan&#39;s progress. Use
          the search bar below to find your player by entering the player tag.
        </p>
        <Search />
      </section>
      <section>
        <h2 className="text-2xl my-4">Player details</h2>
      </section>
    </>
  );
}
