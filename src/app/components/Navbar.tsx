"use client";
import { Popover } from "@headlessui/react";
import { getMovies } from "../utils/request";

export const Navbar = () => {
  const navList = [
    { name: "Movies", href: "movies" },
    { name: "TV Shows", href: "movies" },
    { name: "People", href: "movies" },
    { name: "More", href: "movies" },
  ];
  return (
    <Popover
      as="header"
      className=" bg-teal-700/90 backdrop-blur w-full top-0 sticky z-10 "
    >
      {({ open }: { open: boolean }) => (
        <>
          <nav className=" flex justify-between items-center max-w-screen-xl mx-auto min-h-[60px] px-6 ">
            <h1>Movie-Stack</h1>

            <ul className=" hidden md:flex list-none gap-6">
              {navList.map((item) => (
                <li key={item.name}>
                  {" "}
                  <a href={item.href}> {item.name} </a>{" "}
                </li>
              ))}
            </ul>
            <Popover.Button as="span" className="md:hidden cursor-pointer">
              {open ? <span> &#10006; </span> : <span> &#9776; </span>}
            </Popover.Button>
          </nav>
          <Popover.Panel
            as="div"
            className="absolute top-[60px] bg-teal-700 w-full py-6 "
          >
            <ul className=" space-y-6 px-6 ">
              {navList.map((item) => (
                <li key={item.name} className="">
                  <a href={item.href}>{item.name}</a>
                </li>
              ))}
            </ul>
          </Popover.Panel>
        </>
      )}
    </Popover>
  );
};
