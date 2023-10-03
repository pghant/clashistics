'use client';

export default function Search() {
  function handleSearch(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    console.log(formData);
  }

  return (
    <form onSubmit={handleSearch}>
      <input
        name="search"
        type="text"
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
