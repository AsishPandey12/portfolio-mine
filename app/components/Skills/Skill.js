"use client";

import React, { useEffect, useRef } from "react";
import PropTypes from "prop-types";
import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import Reveal from "../Reveal";

const Skill = ({ name, icon }) => {
  const ref = useRef(null);
  const xDistance = useMotionValue(0);
  const yDistance = useMotionValue(0);

  const mask = useMotionTemplate`radial-gradient(100px 100px at ${xDistance}px ${yDistance}px, #000, transparent)`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    xDistance.set(e.clientX - rect.left);
    yDistance.set(e.clientY - rect.top);
  };

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    element.addEventListener("mousemove", handleMouseMove);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <Reveal duration={1.5}>
      <div
        ref={ref}
        className="relative flex gap-2 p-2 border-primary border rounded-lg h-[46px] overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 border-2 border-purple-500 dark:border-purple-300 rounded-lg"
          style={{
            maskImage: mask,
            WebkitMaskImage: mask,
          }}
        ></motion.div>
        <img src={icon} alt={`${name} icon`} className="z-10" />
        <p className="text-lg z-10">{name}</p>
      </div>
    </Reveal>
  );
};

Skill.propTypes = {
  name: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};

export default Skill;
