// // import type { FC } from "react";

// // export interface HeaderProps {
// //   title: string;
// //   subtitle?: string;
// //   image: string;
// // }

// // const Header: FC<HeaderProps> = ({
// //   title,
// //   subtitle,
// //   image,
// // }) => {
// //   return (
// //     <section className="relative h-[500px] overflow-hidden bg-slate-950">

// //       {/* Background Image */}
// //       <img
// //         src={image}
// //         alt={title}
// //         className="absolute inset-0 h-full w-full object-cover"
// //       />

// //       {/* Dark Overlay */}
// //       <div className="absolute inset-0 bg-slate-950/60" />

// //       {/* Gradient Overlay */}
// //       <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/50 to-transparent" />

// //       {/* Header Content */}
// //       <div className="relative mx-auto flex h-full max-w-7xl items-center px-6 lg:px-8">
// //         <div className="max-w-3xl">

// //           <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-emerald-400">
// //             EnerGrid
// //           </p>

// //           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
// //             {title}
// //           </h1>

// //           {subtitle && (
// //             <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-200 sm:text-xl">
// //               {subtitle}
// //             </p>
// //           )}

// //         </div>
// //       </div>

// //       {/* Bottom Fade */}
// //       <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />

// //     </section>
// //   );
// // };

// // export default Header;


// "use client";

// import { motion } from "framer-motion";

// type HeaderProps = {
//   title: string;
//   subtitle: string;
//   image?: string;
// };

// export default function Header({
//   title,
//   subtitle,
//   image,
// }: HeaderProps) {
//   return (
//     <section
//       className="relative min-h-[640px] overflow-hidden bg-slate-950"
//       style={{
//         backgroundImage: image ? `url(${image})` : undefined,
//         backgroundSize: "cover",
//         backgroundPosition: "center",
//       }}
//     >
//       {/* Dark overlay */}
//       <div className="absolute inset-0 bg-slate-950/60" />

//       {/* Gradient overlay */}
//       <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/60 to-slate-950/20" />

//       {/* Content */}
//       <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 lg:px-8">
//         <motion.div
//           initial={{ opacity: 0, y: 30 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.7 }}
//         >
//           <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
//             EnerGrid
//           </p>

//           <h1 className="text-5xl font-semibold tracking-tight text-white sm:text-6xl lg:text-7xl">
//             {title}
//           </h1>

//           <p className="mt-6 text-lg text-slate-200 sm:text-xl">
//             {subtitle}
//           </p>
//         </motion.div>
//       </div>
//     </section>
//   );
// }



"use client";

import { motion } from "framer-motion";

type HeaderProps = {
  title: string;
  subtitle?: string;
  image?: string;
};

export default function Header({
  title,
  subtitle,
  image,
}: HeaderProps) {
  return (
    <section
      className="relative min-h-[640px] overflow-hidden bg-slate-950"
      style={{
        backgroundImage: image ? `url("${image}")` : undefined,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* Content */}
      <div className="relative z-10 mx-auto flex min-h-[640px] max-w-7xl items-center px-6 lg:px-8">
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.7,
            ease: "easeOut",
          }}
          className="max-w-3xl"
        >
          {/* Small heading */}
          <p className="mb-5 text-sm font-semibold uppercase tracking-[0.3em] text-emerald-400">
            EnerGrid
          </p>

          {/* Main heading */}
          <h1 className="text-5xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl">
            {title}
          </h1>

          {/* Subtitle */}
          {subtitle && (
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white sm:text-xl">
              {subtitle}
            </p>
          )}
        </motion.div>
      </div>
    </section>
  );
}