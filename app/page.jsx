import Feed from "@components/Feed"

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Discover & Share
        <br className="max-md:hidden" />
        <span className="orange_gradient text-center">
          Prompts
        </span>
      </h1>
      <p className="desc text-center">
        Ignite your creativity with our prompts web application. Share and discover a world of inspiration, connecting with like-minded creators.
      </p>
      
      <Feed />
    </section>
  )
}

export default page