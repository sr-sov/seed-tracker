import Link from 'next/link';
import dotenv from 'dotenv';

const Form = ({
  type, post, setPost, submitting, handleSubmit
}) => {
  return (
    <section className="w-full maw-x-full flex-start flex-col">
      <h1 className="head_text text-left">
        <span className='green_gradient'>Contact Us</span>
      </h1>
      <p className='desc text-left max-w-md'>
        Please feel free to contact us!
      </p>
      <p>
      Phone Number: {process.env.CONTACT_NUMBER}
      </p>
      <p>
      Email Address: {process.env.EMAIL_ADDRESS}
      </p>
      <p>
        {process.env.MYSQL_HOST}
      </p>

      <form
        onSubmit={handleSubmit}
        className='mt-10 w-full max-w-2xl flex flex-col gap-7 glassmorphism'
      >
        <label>
          <span className='font-satoshi font-semibold text-base text-gray-700'>
            Your message here:
          </span>

          <textarea
            value=""
            placeholder='Write your message here...'
            required
            className='form_textarea'
          >

          </textarea>
        </label>

        <div className='flex-end mx-3 mb-5 gap-4'>

          <button
            type="submit"
            disabled={submitting}
            className='px-5 py-1.5 text-sm bg-green-600 rounded-full text-green-200'
          >
            Send
          </button>
        </div>

      </form>
    </section>
  )
}

export default Form