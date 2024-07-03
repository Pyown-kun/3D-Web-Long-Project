import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/20/solid";
import React from "react";

import { NavLink } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

const Dropdown = () => {
  return (
    <Menu as="div" className="relative inline-block text-left ">
      <NavLink
        to="/project"
        className={({ isActive }) =>
          isActive ? "text-orange-400" : "text-white"
        }
      >
        <MenuButton>Project</MenuButton>
      </NavLink>

      <MenuItems
        transition
        className="absolute right-0 z-100 mt-2 w-56 origin-top-right rounded-md ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem className="text-white">
            <NavLink
              to="/project"
              className={
                (({ isActive }) =>
                  isActive ? "text-orange-400" : "text-white",
                "block px-4 py-2")
              }
            >
              Account settings
            </NavLink>
          </MenuItem>
          <MenuItem className="text-white">
            <NavLink
              to="/project"
              className={
                (({ isActive }) => (isActive ? "text-white" : "text-white"),
                "block px-4 py-2")
              }
            >
              Support
            </NavLink>
          </MenuItem>
          <MenuItem className="text-white">
            <NavLink
              to="/project"
              className={
                (({ isActive }) =>
                  isActive ? "text-orange-400" : "text-white",
                "block px-4 py-2")
              }
            >
              License
            </NavLink>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export default Dropdown;
