import React from "react";
import { useState, useEffect } from "react";
import { useLoaderData } from "react-router-dom";

export default function Github() {
  //   const [data, setData] = useState(0);
  //   useEffect(() => {
  //     const URL = "https://api.github.com/users/SahBikash7";
  //     fetch(URL)
  //       .then((res) => res.json())
  //       .then((data) => setData(data));
  //   }, []);

  const data = useLoaderData();

  return (
    <div className=" bg-gray-600 text-white text-center text-2xl m-4 py-4">
      Github Followers :{data.followers}
      <img
        src={data.avatar_url}
        alt="Github PP"
        width={300}
        className="mx-10"
      />
    </div>
  );
}

export const gitHubInfoLoader = async () => {
  const URL = "https://api.github.com/users/SahBikash7";
  const response = await fetch(URL);
  return response.json();
};
