import { motion } from "motion/react";
// import { motion } from "motion/react";

function Button({
  link,
  icon: Icon,
  children,
  bgColor = "bg-slate-800/90",
  textColor = "text-slate-50",
  filePath,
  allowDownLoad = false,
  styles = "",
  shadowColor,
}) {
  const baseStyles = `flex items-center px-4 py-3 hover:shadow-lg hover:shadow-${shadowColor} rounded-lg flex gap-2 items-center transition-colors text-center duration-300 cursor-pointer hover:${bgColor.replace(
    "800",
    "900"
  )}`;

  if (allowDownLoad && filePath)
    return (
      <motion.a
        download
        href={filePath}
        className={`${baseStyles} ${styles} ${bgColor} ${textColor}`}
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          stiffness: 100,
          damping: 25,
          duration: 0.2,
        }}
      >
        <Icon className={`text-xl ${textColor}`} />
        <span>{children}</span>
      </motion.a>
    );

  if (link)
    return (
      <motion.a
        href={link}
        className={`${baseStyles} ${styles} ${bgColor} ${textColor}`}
        whileHover={{
          scale: 1.05,
        }}
        transition={{
          stiffness: 100,
          damping: 25,
          duration: 0.2,
        }}
      >
        <Icon className={`text-xl ${textColor}`} />

        <span>{children}</span>
      </motion.a>
    );
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
      }}
      transition={{
        stiffness: 100,
        damping: 25,
        duration: 0.2,
      }}
      className={`${baseStyles} ${styles} ${bgColor} ${textColor}`}
    >
      <Icon className={`text-xl ${textColor}`} />
      <span>{children}</span>
    </motion.button>
  );
}

export default Button;
