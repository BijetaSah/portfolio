import { TbBrandGithubFilled } from "react-icons/tb";
import { FaLinkedin } from "react-icons/fa";

import { navLinks, socialLinks } from "../../contants/data";
import { IoMdMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

import { motion } from "motion/react";

import { useState } from "react";

function Navbar() {
  const [navOpen, setNavOpen] = useState(false);

  function handleToggleNav() {
    setNavOpen((prev) => !prev);
  }
  return (
    <>
      <header className="flex justify-between px-5 md:px-10 lg:px-25 items-center py-5 relative">
        <motion.h1
          className="text-blue-500 text-2xl font-semibold"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 20 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 25,
            duration: 300,
          }}
        >
          Bijeta
        </motion.h1>

        {/* section links */}
        <nav className="text-slate-400 hidden md:block">
          <ul className="flex items-center  gap-4 ">
            {navLinks.map((item, index) => (
              <li key={item.id}>
                <motion.a
                  href={`#${item.id}`}
                  className="relative group hover:text-blue-500 transition-colors duration-300 "
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 20 }}
                  transition={{
                    type: "spring",
                    stiffness: 100,
                    damping: 20,
                    delay: 0.5 + index * 0.2,
                  }}
                >
                  {item.title}
                  <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
                </motion.a>
              </li>
            ))}
          </ul>
        </nav>

        {/* social links */}
        <ul className="md:flex gap-4 hidden ">
          {socialLinks.map(({ icon: Icon, url }, index) => (
            <li key={index}>
              <motion.a
                initial={{
                  opacity: 0,
                  y: -20,
                }}
                animate={{
                  opacity: 1,
                  y: 1.5,
                }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 25,
                  delay: 0.2 + index * 0.2,
                }}
                className="text-slate-100 hover:text-blue-500 text-2xl transition-colors duration-300"
                href={url}
                target="_blank"
              >
                <Icon />
              </motion.a>
            </li>
          ))}
        </ul>

        {/* mobile nav button */}
        <motion.button
          className="text-2xl text-slate-400 md:hidden cursor-pointer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          onClick={handleToggleNav}
          transition={{
            stiffness: 100,
            damping: 25,
            duration: 0.2,
          }}
        >
          {navOpen ? <IoClose /> : <IoMdMenu />}
        </motion.button>
      </header>
      {navOpen && <MobileNav onToggleNav={handleToggleNav} />}
    </>
  );
}

function MobileNav({ onToggleNav }) {
  return (
    <nav
      className="text-slate-400 md:hidden w-full bg-inherit absolute left-0"
      initial={{ opacity: 0, x: -100 }}
      animate={{ opacity: 1, y: 100 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 20,
      }}
    >
      <ul className="flex items-center flex-col gap-4 ">
        {navLinks.map((item, index) => (
          <li key={item.id}>
            <motion.a
              href={`#${item.id}`}
              className="relative group hover:text-blue-500 transition-colors duration-300 "
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 20 }}
              transition={{
                type: "spring",
                stiffness: 100,
                damping: 20,
                delay: 0.05 + index * 0.1,
              }}
              onClick={onToggleNav}
            >
              {item.title}
              <span className="absolute left-0 -bottom-0.5 h-0.5 w-0 group-hover:w-full bg-blue-500 transition-all duration-300"></span>
            </motion.a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navbar;
