import React from "react";
import Image from "next/image";

const ButtonRounded = () => {
  return (
    <div className="w-40 flex justify-between items-center rounded-full bg-theme-bg">
      <span className="block pl-4 text-theme">Bike Delivery</span>
      <span className="block w-8 h-8 m-1 rounded-full overflow-hidden">
        <Image src="/bike.jpeg" alt="" width={100} height={100} />
      </span>
    </div>
  );
};

export default ButtonRounded;
