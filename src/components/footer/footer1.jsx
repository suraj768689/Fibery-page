import React from "react";

const ImageCard = () => {
  const imageDetailsArray = [
    {
      imageUrl: "https://fibery.io/_next/image?url=%2Fimg%2Fsp%2Fwow1.webp&w=256&q=75",
      heading: "Signup for free",
      description: "Start using AI space creation and / or templates to test the waters.",
    },
    {
      imageUrl: "https://fibery.io/_next/image?url=%2Fimg%2Fsp%2Fwow2.webp&w=256&q=75",
      heading: "Build your workspace",
      description: "Start integrating any data from existing tools and map your company's processes.",
    },
    {
      imageUrl: "https://fibery.io/_next/image?url=%2Fimg%2Fsp%2Fwow3.webp&w=256&q=75",
      heading: "Share it with your team",
      description: "Don't keep Fibery to yourself. Be the hero your company needs and not the one they deserve!",
    },
    {
      imageUrl: "https://fibery.io/img/sp/wow4.webp",
      heading: "Enjoy the moment that you dared to be different",
      description: "Humans are pack animals - conformity is in our DNA. But you dared to be different by not choosing an Atlassian product. Well done!",
    },
  ];

  return (
    <div className="max-w-5xl mx-auto py-10 px-4 mt-12 ">
      <h2 className="text-4xl font-bold mb-8">How you can make it happen</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {imageDetailsArray.map((imageDetails, index) => (
          <div key={index} className="max-w-xs mx-auto rounded overflow-hidden shadow-lg">
            <img className="w-20 h-20" src={imageDetails.imageUrl} alt={imageDetails.heading} />
            <div className="px-6 py-4">
              <div className="font-bold text-xl mb-2">{imageDetails.heading}</div>
              <p className="text-gray-700 text-base">{imageDetails.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageCard;
