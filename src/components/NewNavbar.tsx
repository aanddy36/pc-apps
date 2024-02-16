import { useState } from "react";
import { Sidebar } from "./Sidebar";
import type { Service } from "../modals";
import { ToggleBar } from "./myIcons/ToggleBar";

export const NewNavbar = ({
  children,
  link,
  allServices,
}: {
  children: any;
  link: string;
  allServices: Service[];
}) => {
  const [openSidebar, setOpenSidebar] = useState(false);

  return (
    <>
      <nav className="border w-full flex py-5 px-10 items-center justify-between">
        {children}
        <button
          className="laptop:hidden transition-transform duration-200 hover:rotate-90"
          onClick={() => setOpenSidebar((prev) => !prev)}
        >
          <ToggleBar />
        </button>
      </nav>
      <Sidebar
        openSidebar={openSidebar}
        setOpenSidebar={setOpenSidebar}
        link={link}
        allServices={allServices}
      />
    </>
  );
};
