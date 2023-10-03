'use client';

import { useRouter } from 'next/navigation';

export default function Search() {
  const router = useRouter();

  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);
    const playerTag = (formData.get('search') as string).replace('#', '');

    router.push(`/player/${playerTag}`);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="text"
        autoComplete="off"
        className="w-full my-8 p-3 rounded-lg border focus:border-teal-600 focus:outline-none dark:bg-neutral-600 dark:border-neutral-600 dark:focus:border-teal-400"
      />
      <div className="flex">
        <button
          type="submit"
          className="p-3 bg-teal-500 rounded-lg mx-auto text-xl dark:bg-teal-600"
        >
          Search
        </button>
      </div>
    </form>
  );
}
