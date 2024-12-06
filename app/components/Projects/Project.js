"use client";

import React from "react";
import PropTypes from "prop-types";
import Reveal from "../Reveal";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const Project = ({
  thumbnail,
  title,
  link,
  description,
  languageIcons = [],
}) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth out motion values with spring
  const xSpring = useSpring(x, { stiffness: 100, damping: 10 });
  const ySpring = useSpring(y, { stiffness: 100, damping: 10 });

  // Map motion values to rotation values for 3D effect
  const xRotation = useTransform(ySpring, [-100, 100], ["15deg", "-15deg"]);
  const yRotation = useTransform(xSpring, [-100, 100], ["-15deg", "15deg"]);

  const handleMouseMove = (e) => {
    const target = e.currentTarget;
    if (!target) return;

    const rect = target.getBoundingClientRect();
    const xPos = e.clientX - rect.left - rect.width / 2;
    const yPos = e.clientY - rect.top - rect.height / 2;

    x.set(xPos);
    y.set(yPos);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <Reveal initialX={-50} delay={0.5}>
      <motion.div
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="card flex flex-col items-stretch w-full max-w-[428.4px] p-5 md:p-[18px] gap-[30px]"
        style={{
          perspective: 1000,
          transformStyle: "preserve-3d",
          rotateX: xRotation,
          rotateY: yRotation,
        }}
      >
        <img
          src={thumbnail}
          alt={`Thumbnail for ${title}`}
          width={392}
          height={230}
          className="w-full h-[230px] object-cover"
          // style={{
          //   transform: "translateZ(100px)"
          // }}
        />
        <div className="flex flex-col gap-[11px]">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-xl md:text-[22px]">{title}</h3>
            <a
              href={link.url}
              className="flex px-[5px] py-[3px] gap-1 bg-[#b9b9b9] bg-opacity-[24%] rounded text-[14px]"
            >
              <span className="hidden md:block">{link.label}</span>
              <img
                src="link_arrow.svg"
                alt="link arrow"
                className="block dark:hidden"
              />
              <img
                src="link_arrow.svg"
                alt="link arrow"
                className="hidden dark:block"
              />
            </a>
          </div>
          <p className="line-clamp-2 text-sm md:text-base">{description}</p>
          <div className="flex flex-row gap-[11px]">
            {languageIcons.length > 0 ? (
              languageIcons.map((icon, iconId) => (
                <img src={icon} alt="Language icon" key={iconId} />
              ))
            ) : (
              <p>No language icons available</p>
            )}
          </div>
        </div>
      </motion.div>
    </Reveal>
  );
};

Project.propTypes = {
  thumbnail: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  link: PropTypes.shape({
    url: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
  }).isRequired,
  description: PropTypes.string.isRequired,
  languageIcons: PropTypes.arrayOf(PropTypes.string),
};

export default Project;
