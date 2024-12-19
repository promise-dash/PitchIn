import SearchForm from "@/components/SearchForm";
import StartupCard from "@/components/StartupCard";

export default async function Home({
  searchParams,
}: {
  searchParams: Promise<{ query?: string }>;
}) {
  const query = (await searchParams).query;

  const posts = [
    {
      _id: "12345",
      title: "Exploring TypeScript for Modern Development",
      _createdAt: new Date(),
      author: {
        _id: "67890",
        name: "John Doe",
        image: "https://via.placeholder.com/150",
        bio: "A passionate developer and writer who loves sharing knowledge about modern technologies.",
      },
      views: 1234,
      description:
        "This article dives into the key features and benefits of TypeScript for modern web development.",
      category: "Technology",
      image: "https://via.placeholder.com/600",
    },
    {
      _id: "01234",
      title: "New Blog",
      _createdAt: new Date(),
      author: {
        _id: "67890",
        name: "Kevin Eleven",
        image: "https://via.placeholder.com/150",
        bio: "A passionate developer and writer who loves sharing knowledge about modern technologies.",
      },
      views: 1234,
      description:
        "This article dives into the key features and benefits of TypeScript for modern web development.",
      category: "Technology",
      image: "https://via.placeholder.com/600",
    }
  ];

  return (
    <>
      <section className="orange_container">
        <p className="tag">Pitch, Vote and Grow</p>
        <h1 className="heading">
          Pitch Your Startup, <br />
          Connect With Entrepreneurs
        </h1>

        <p className="sub-heading !max-w-3xl">
          Submit Ideas, Vote on Pitches, and Get Noticed in Virtual
          Competitions.
        </p>

        <SearchForm query={query} />
      </section>

      <section className="section_container">
        <p className="text-2xl font-semibold">
          {query ? `Search results for "${query}"` : "All Startups"}
        </p>

        <ul className="mt-7 card_grid">
          {posts?.length > 0 ? (
            posts.map((post: any) => (
              <StartupCard key={post?._id} post={post} />
            ))
          ) : (
            <p className="no-results">No startups found</p>
          )}
        </ul>
      </section>
    </>
  );
}
