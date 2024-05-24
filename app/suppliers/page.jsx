import SupplierFeed from "@components/SupplierFeed"

const Suppliers = () => {
  return (
    <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
            <span className="green_gradient text-center">Seed Suppliers</span>
        </h1>
        <p className="desc text-center">
            This service allows you to search for third-party supplier of seeds. Use the Search Bar below to find the seed species you are looking for.
        </p>
        <SupplierFeed />

    </section>
  )
}

export default Suppliers