
import Image from "next/image";
import SearchForm from "../../components/SearchForm";

export default async function Home({searchParams}: {
  searchParams: Promise<{query? : string}>
}) {
    const query = (await searchParams).query;

    const post =[{
      _createdAt: "Yesterday",
      views: 55,
      author: { _id:1},
      _id: 1,
      description: "This is a description",
      image: "https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/12/hostinger-vps-hosting.png",
      category: "Robots",
      title: "We Robots"
    }]
  return (
    <>
      <section className="pink_container">
        <h1 className="heading">Create a post<br /> Connect With Entreprenurs</h1>
        <p className="sub-heading !max-w-3xl"> Submit Ideas, Vote on Pitches, and Get Noticed in Virtual Competitions</p>
        <SearchForm query={query}/>  
      </section>
      <section className="section_container">
        <p className="text-30-semibold">
          {query ? `Search results for "${query}"` : 'All Startups'}
        </p>
        <ul className="mt-7 card_grid">
          {post?.length > 0 ? (
            post.map((post: StartupCardType, index: number)=> ( <StartupCard/>))
          ) : ( 
            <p className="no-results"> No startups found</p>
          )
          }
        </ul>
      </section>
    </>
  );
}