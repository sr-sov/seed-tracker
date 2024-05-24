import Feed from "@components/Feed"

const SeedBrochure = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <span className="green_gradient text-center">Seed Tracking System</span>
        </h1>
        <p className="desc text-center">
            This website utilizes MFTSC's Seed Tracking System to display the available seed collection
        </p>
        <Feed />

    </section>
  )
}

export default SeedBrochure