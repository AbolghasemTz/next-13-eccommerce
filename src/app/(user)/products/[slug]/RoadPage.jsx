import React from "react";

function RoadPage({product}) {
  return (
    <div className="flex md:hidden items-center gap-x-2 px-4 text-sm mt-6 mb-8">
      <span className="text-orange-500">{product.category.title}</span>
      <span>
        <svg
          width="7"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.34 1.34 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01a.75.75 0 0 1-.66.424H5.48a.983.983 0 0 1-.155-.031 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.486 5.486 0 0 1-.084-.09 2.22 2.22 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478l.074-.081.039-.044c.058-.065.125-.138.188-.202Z"
            stroke="#222F5D"
          />
        </svg>
      </span>
      <span className="text-orange-500 ">{product.brand}</span>
      <span>
        <svg
          width="7"
          height="10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="m.945 4.2.006-.006.006-.007c.369-.406 1.067-.973 1.831-1.502.763-.53 1.537-.984 2.042-1.187l.01-.004c.067-.029.2-.079.341-.123a1.72 1.72 0 0 1 .3-.071c.13.002.253.031.375.092a.812.812 0 0 1 .33.377c.02.056.057.198.093.363a11.189 11.189 0 0 1 .054.253l.006.034c.1.558.161 1.502.161 2.575 0 1-.057 1.899-.14 2.48a1.34 1.34 0 0 0-.007.034l-.018.087v.002c-.013.07-.031.159-.052.254a4.92 4.92 0 0 1-.099.382.671.671 0 0 1-.012.033l-.004.01a.75.75 0 0 1-.66.424H5.48a.983.983 0 0 1-.155-.031 3.398 3.398 0 0 1-.36-.12l-.226-.095c-.482-.206-1.233-.646-1.978-1.16-.746-.516-1.436-1.07-1.814-1.491L.94 5.794l-.008-.008-.001-.001-.007-.007L.9 5.752a5.486 5.486 0 0 1-.084-.09 2.22 2.22 0 0 1-.164-.195l-.006-.008L.64 5.45a.749.749 0 0 1-.14-.446c0-.185.053-.348.144-.478l.074-.081.039-.044c.058-.065.125-.138.188-.202Z"
            stroke="#222F5D"
          />
        </svg>
      </span>
      <span className="text-gray-500 ">{product.title}</span>
    </div>
  );
}

export default RoadPage;
