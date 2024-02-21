import React from 'react';
import Image from 'next/image';

const About = () => {
  return (
    <section className="w-full maw-x-full flex-start flex-col">
            <Image
        src="/assets/images/fwrdec.png"
        width={50}
        height={50}
        alt="Picture of the Organization"
      />
      <h1 className="head_text text-left">
        <span className='green_gradient'>Vision, Mission and Functions</span>
      </h1>
      <p className='desc text-left max-w-md'>
        The Ecosystems Research and  Development Bureau (ERDB) is the principal research and development (R & D) unit of the Department of Environment and Natural Resources (DENR). Its R & D and extension activities are focused on the five major ecosystems of the Philippines which include forests, upland farms, grassland and degraded areas, coastal zone and freshwater, and urban areas.
        The ERDB was created in June 1987 under Executive Order (EO) 192 that merged the function of the former Forest Research Institute (FORI) and the National Mangrove Committee. Its headquarters is located at the University of the Philippines Los Baños, College of Forestry and Natural Resources (UPLB-CFNR) campus in the municipality of Los Baños, province of Laguna, Philippines about 65 kms south of Manila.
      </p>
      
    </section>
  )
}

export default About