import Link from "next/link"

const Form = ({
  type,
  post,
  setPost,
  submitting,
  handleSubmit
}) => {
  return (
    <section className="w-full max-w-full flex-start flex-col">
      <h1 className="head_text text-left">
        {type} Post
      </h1>
    </section>
  )
}

export default Form