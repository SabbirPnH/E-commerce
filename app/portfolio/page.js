// pages/portfolio.jsx (or any appropriate file in your pages directory)

import Image from 'next/image';

const Portfolio = () => {
  return (
    <div className="md:max-w-2xl md:mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
       
        <div className="space-y-2">
          <Image
            src="/img/about-bg.jpg"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
          <Image
            src="/img/about-bg.jpg"
            alt="Image Description"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
          <Image
            src="/img/about-bg.jpg"
            alt="Image Description"
            width={300}
            height={200}
            layout="responsive"
            objectFit="cover"
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
