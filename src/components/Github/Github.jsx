import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
//   const [data, setData] = useState([]);
//   useEffect(() => {
//     fetch("https://api.github.com/users/AniketShankhwar").then((response) => response.json()).then((data) => {
//       console.log(data);
//       setData(data);
//     });
//   }, [])

  const data = useLoaderData();

  return (
    <div className="text-center m-4 bg-gray-600 text-white p-4 text-3xl">
      My Github ID Number:{data.id}
      <img className="mx-auto block mt-4" src={data.avatar_url} alt="Git ProfilePic" width={400}/>
    </div>
  );
}

export default Github;
