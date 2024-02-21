import Feed from "@components/Feed";
import Link from 'next/link';

const Home = () => {
  return (
    <section className="w-full flex-center flex-col m-auto">
      <div class="overflow-hidden rounded-lg bg-cover bg-no-repeat" style={{backgroundImage:'url("/assets/images/bg.jpeg")'}}>
        <div className="bg-cover py-12 px-24 opacity-mask w-full">
          <h1 className="head_text text-center">
              <span className="green_gradient">Mindanao Forest Tree Seed Center</span>
          </h1>
          <p className="subtitle text-center">
              This website utilizes MFTSC's Seed Tracking System to display the available seed collections
          </p>
          <div className='flex-center mx-3 mb-5 gap-4'>

          <Link href="/seed-brochure"
            className="green_btn">
              Search for Seeds
            </Link>
        </div>
        </div>
      </div>
    </section>
  )
}

export default Home