import React from "react";
import { useParams } from "react-router-dom";

export default function User() {
  const { userId } = useParams();
  return (
    <div className="text-center text-2xl bg-gray-600 py-4 m-4">
      User-Id is : {userId}
    </div>
  );
}
