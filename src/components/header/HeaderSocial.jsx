import React from "react";
import { header__social } from "../../constants";
import { motion } from "framer-motion";
import { HeaderSocialVariant } from "../../motion/index";

const HeaderSocial = () => {
  return (
    <div className="header__socials">
      {header__social.map(({ href, icon }, index) => {
        return (
          <motion.a
            href={href}
            target="_blank"
            variants={HeaderSocialVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            custom={index}
          >
            {icon}
          </motion.a>
        );
      })}
    </div>
  );
};

export default HeaderSocial;
