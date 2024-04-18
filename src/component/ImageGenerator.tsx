import axios from "axios";
import React, { useState } from "react";

type Props = {};

const ImageGenerator: React.FC<Props> = () => {
  const [input, setInput] = useState<string>("");
  const [img, setImg] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);

  const imageGenerator = async () => {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/image/generation",
      headers: {
        authorization: `Bearer ${import.meta.env.VITE_OPENAI_API_KEY}`,
      },
      data: {
        providers: "replicate",
        text: input,
        resolution: "512x512",
        fallback_providers: "",
      },
    };

    axios
      .request(options)
      .then((response) => {
        setLoading(true);
        if (response.data) {
          setImg(response?.data?.replicate?.items[0]?.image_resource_url);
          setLoading(false);
          setInput("");
        }
      })
      .catch((error) => {
        setLoading(false);
        console.error(error);
      });
  };

  return (
    <div className="content flex flex-col lg:flex-row  items-center p-3 ">
      <div className=" flex-1 p-3 flex flex-col gap-6">
        <h2 className="text-teal-400 text-2xl md:text-4xl font-jersey tracking-wider">
          AI Image Generator
        </h2>
        <p className="text-gray-200 tracking-wider text-lg">
          You can create original, realistic images and art from a text
          description. It can combine concepts, attributes, and styles.
        </p>
        <p className="text-gray-400">Its a limited verion</p>
        <div className="bg-teal-800/45 p-4 rounded-lg backdrop-blur flex">
          <input
            onChange={(e) => setInput(e.target.value)}
            className="bg-transparent w-full outline-none border-none text-gray-200 p-2"
            type="text"
            placeholder="Write text description of image"
          />
          <button
            onClick={() => imageGenerator()}
            className={`bg-teal-400 py-2 px-3 rounded-full text-teal-900 hover:bg-emerald-500 ${
              loading ? "animate-pulse" : ""
            }`}
          >
            {loading ? "Loading.." : "Generate"}
          </button>
        </div>
      </div>
      <div className="flex-1">
        <img
          src={img || "/image-1.png"}
          className={`w-[280px] h-[270px] desktop:w-[512px] desktop:h-[512px] md:w-[412px] md:h-[412px] rounded object-cover ${
            loading ? "hidden" : "visible"
          }`}
        />
        {loading ? (
          <div className="bg-gradient-to-tr from-teal-600 to-fuchsia-600 animate-pulse w-[280px] h-[270px] desktop:w-[512px] desktop:h-[512px] md:w-[412px] md:h-[412px]   rounded-md shadow shadow-white/60"></div>
        ) : img === "" ? (
          ""
        ) : (
          <img
            src={img}
            className={`w-[280px] h-[270px] desktop:w-[512px] desktop:h-[512px] md:w-[412px] md:h-[412px] rounded object-cover 
         `}
          />
        )}
      </div>
    </div>
  );
};

export default ImageGenerator;
