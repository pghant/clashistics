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
        <input
          type="text"
          className="w-full my-8 p-3 rounded-lg border focus:border-teal-600 focus:outline-none dark:bg-neutral-600 dark:border-neutral-600 dark:focus:border-teal-400"
        />
      </section>
      <section>
        <h2 className="text-2xl my-4">Player details</h2>
      </section>
    </>
  );
}
