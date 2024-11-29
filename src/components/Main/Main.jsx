import Cards from "../../components/Cards/Cards";
import posts from "../../data/posts";

export default function () {
  return (
    <main>
      <section>
        <div className="container">
          <div className="row">
            {posts.map((post) => (
              <Cards
                key={post.id}
                title={post.title}
                image={post.image}
                content={post.content}
                tags={post.tags}
                published={post.published}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
