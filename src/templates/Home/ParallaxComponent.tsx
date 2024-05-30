// import { Section8Image } from "@/types/types";
// import Image from "next/image";
// import React, { useRef, useEffect, useState } from "react";

// type ParallaxComponentProps = {
//   images?: Section8Image[] | null;
// };

// const ParallaxComponent = ({ images }: ParallaxComponentProps) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const ref = useRef(null);

//   useEffect(() => {
//     const options = {
//       root: null,
//       rootMargin: "0px",
//       threshold: 0.5, // When 50% of the component is in view
//     };

//     const observer = new IntersectionObserver(([entry]) => {
//       if (entry?.isIntersecting) {
//         setCurrentIndex((prevIndex) => {
//           const nextIndex = prevIndex + 1;
//           if (images && nextIndex < images?.length) {
//             return nextIndex;
//           } else {
//             // All images have been shown, remove observer or handle component exit
//             observer.unobserve(ref?.current);
//             return prevIndex;
//           }
//         });
//       }
//     }, options);

//     if (ref.current) {
//       observer.observe(ref.current);
//     }

//     return () => {
//       if (ref.current) {
//         observer.unobserve(ref.current);
//       }
//     };
//   }, [images]);



//   return (
//     <div ref={ref} className="overflow-hidden" id="wrapper-container">
//       {images?.map((image: Section8Image, index: number) => {
//         if (index !== 0) {
//           return (
//             <Image
//               width={800}
//               height={800}
//               className="absolute w-[700px] h-[700px] rounded-full"
//               key={index}
//               src={image.value}
//               alt={`Parallax Image ${index}`}
//               style={{
//                 top: `${index * 100}%`,
//                 left: 0,
//                 transition: "opacity 0.5s ease-in-out",
//                 opacity: index === currentIndex ? 1 : 0,
//               }}
//             />
//           );
//         } else {
//           return null
//         }
//       })}
//     </div>
//   );
// };

// export default ParallaxComponent;
