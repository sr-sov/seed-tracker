import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sdm = () => {
  const presence_absence = [
    {
      link: "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Agathis philippinensis Presence Absence.png",
      image:
        "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Agathis philippinensis Presence Absence.png",
      comment: `Mindanao Agathis philippinensis`,
    },
    {
      link: "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Cinnamomum mercadoi Presence Absence.png",
      image:
        "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Cinnamomum mercadoi Presence Absence.png",
      comment: `Mindanao Cinnamomum mercadoi`,
    },
    {
      link: "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Eucalyptus deglupta Presence Absence.png",
      image:
        "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Eucalyptus deglupta Presence Absence.png",
      comment: `Mindanao Eucalyptus deglupta`,
    },
    {
      link: "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Pterocarpus indicus Presence Absence.png",
      image:
        "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Pterocarpus indicus Presence Absence.png",
      comment: `Mindanao Pterocarpus indicus`,
    },
    {
      link: "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Shorea contorta Presence Absence.png",
      image:
        "/assets/images/PRESENCE-ABSENCE MAPS/Mindanao Shorea contorta Presence Absence.png",
      comment: `Mindanao Shorea contorta`,
    },
  ];

  const seed_zone = [
    {
      link: "/assets/images/SEED ZONE MAPS/Mindanao Agathis philippinensis Seed Zone.png",
      image:
        "/assets/images/SEED ZONE MAPS/Mindanao Agathis philippinensis Seed Zone.png",
      comment: `Mindanao Agathis philippinensis`,
    },
    {
      link: "/assets/images/SEED ZONE MAPS/Mindanao Cinnamomum mercadoi Seed Zone.png",
      image:
        "/assets/images/SEED ZONE MAPS/Mindanao Cinnamomum mercadoi Seed Zone.png",
      comment: `Mindanao Cinnamomum mercadoi`,
    },
    {
      link: "/assets/images/SEED ZONE MAPS/Mindanao Eucalyptus deglupta Seed Zone.png",
      image:
        "/assets/images/SEED ZONE MAPS/Mindanao Eucalyptus deglupta Seed Zone.png",
      comment: `Mindanao Eucalyptus deglupta`,
    },
    {
      link: "/assets/images/SEED ZONE MAPS/Mindanao Pterocarpus indicus Seed Zone.png",
      image:
        "/assets/images/SEED ZONE MAPS/Mindanao Pterocarpus indicus Seed Zone.png",
      comment: `Mindanao Pterocarpus indicus`,
    },
    {
      link: "/assets/images/SEED ZONE MAPS/Mindanao Shorea contorta Seed Zone.png",
      image:
        "/assets/images/SEED ZONE MAPS/Mindanao Shorea contorta Seed Zone.png",
      comment: `Mindanao Shorea contorta Seed Zone`,
    },
  ];
  return (
    <>
      <div className="">
        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">Presence-Absence Maps</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {presence_absence.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <Link
                      href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      <Link
                        className="flex justify-center items-center bg-purple-500 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </Link>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-purple-500 transition-colors duration-200"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>

        <div className="p-6 container mx-auto">
          <div className="py-2">
            <h1 className="text-center text-4xl">Seed Zone</h1>
          </div>
          <div className="md:grid md:gap-6 md:grid-cols-2 lg:grid-cols-3 mb-12">
            {seed_zone.map((x) => {
              return (
                <>
                  <article
                    key={x.comment}
                    className="p-6 mb-6  transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer"
                  >
                    <Link
                      href={x.link}
                      className="absolute opacity-0 top-0 right-0 left-0 bottom-0"
                    />
                    <div className="relative mb-4 rounded-2xl">
                      <Image
                        width={400}
                        height={400}
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src={x.image}
                        alt=""
                      />
                      <Link
                        className="flex justify-center items-center bg-purple-500 bg-opacity-80  absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={x.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        View Image
                      </Link>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <Link
                        href="https://animeflyx.vercel.app/"
                        className="block relative group-hover:text-purple-500 transition-colors duration-200"
                      >
                        <span dangerouslySetInnerHTML={{ __html: x.comment }} />
                      </Link>
                    </h3>
                  </article>
                </>
              );
            })}
          </div>
        </div>

        
      </div>
    </>
  );
};

export default Sdm;