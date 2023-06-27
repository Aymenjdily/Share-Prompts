import Feed from "@components/Feed"
import Image from "next/image"

const page = () => {
  return (
    <section className="w-full flex-center flex-col">
      <div className="w-full h-64 relative">
        <Image
          src="/assets/images/Image.jpg" alt="Logo" layout="fill" className="object-cover rounded-xl"
        />
      </div>
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