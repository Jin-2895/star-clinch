// import React, { useEffect, useRef, useState } from 'react';
// import 'tailwindcss/tailwind.css';
// import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaPauseCircle, FaPlayCircle } from 'react-icons/fa';
// import Frame from "./frame.svg"
// import Image from 'next/image';

// interface Slide {
//   src: any;
//   title: string;
//   description: string;
// }

// const Squad = () => {
//   const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
//   const [autoplayIsActive, setAutoplayIsActive] = useState(true);
//   const slidesHolderRef = useRef(null);
//   const autoplayRef = useRef(null);

//   const slides: Slide[] = [
//     { src: "", title: 'Slide 1', description: 'Desc 1' },
//     { src: "", title: 'Slide 2', description: 'Desc 2' },
//     { src: "", title: 'Slide 3', description: 'Desc 3' },
//     { src: "", title: 'Slide 4', description: 'Desc 4' },
//     { src: "", title: 'Slide 5', description: 'Desc 5' },
//     { src: "", title: 'Slide 6', description: 'Desc 6' },
//   ];

//   useEffect(() => {
//     setSliderSize();
//     window.addEventListener('resize', setSliderSize);
//     autoplayStart();

//     return () => {
//       window.removeEventListener('resize', setSliderSize);
//       autoplayStop();
//     };
//   }, []);

//   useEffect(() => {
//     if (autoplayIsActive) {
//       autoplayStart();
//     } else {
//       autoplayStop();
//     }
//   }, [autoplayIsActive]);

//   const setSliderSize = () => {
//     if (slidesHolderRef.current) {
//       const sliderSize = slidesHolderRef?.current?.clientWidth * 0.9;
//       slidesHolderRef?.current?.style?.width = `${sliderSize}px`;
//       slidesHolderRef?.current?.style?.height = `${sliderSize}px`;

//       const slideSize = sliderSize * 0.2;
//       slidesHolderRef.current.querySelectorAll<HTMLDivElement>('.slide').forEach(slide => {
//         slide.style.width = `${slideSize}px`;
//         slide.style.height = `${slideSize}px`;
//       });

//       setSlidesPositions();
//     }
//   };

//   const setSlidesPositions = () => {
//     if (slidesHolderRef.current) {
//       const slides = slidesHolderRef.current.querySelectorAll<HTMLDivElement>('.slide');
//       const angleStep = (2 * Math.PI) / slides.length;
//       const radius = slidesHolderRef.current.clientWidth / 2 - slides[0].clientWidth / 2;
//       let angle = 0;

//       slides.forEach(slide => {
//         const x = Math.round(slidesHolderRef.current.clientWidth / 2 + radius * Math.cos(angle) - slide.clientWidth / 2);
//         const y = Math.round(slidesHolderRef.current.clientHeight / 2 + radius * Math.sin(angle) - slide.clientHeight / 2);
//         slide.style.left = `${x}px`;
//         slide.style.top = `${y}px`;
//         angle += angleStep;
//       });
//     }
//   };

//   const rotateSlides = (direction: number) => {
//     setCurrentSlideIndex(prevIndex => {
//       const newIndex = (prevIndex + direction + slides.length) % slides.length;
//       setSlidesHolderTransform(newIndex);
//       return newIndex;
//     });
//   };

//   const setSlidesHolderTransform = (index: number) => {
//     if (slidesHolderRef.current) {
//       const angle = index * (2 * Math.PI / slides.length) * -1;
//       slidesHolderRef.current.style.transition = '0.6s';
//       slidesHolderRef.current.style.transform = `rotate(${angle}rad)`;

//       slidesHolderRef.current.querySelectorAll<HTMLDivElement>('.slide').forEach(slide => {
//         slide.style.transition = '0.6s';
//         slide.style.transform = `rotate(${-angle}rad)`;
//       });
//     }
//   };

//   const toggleAutoplay = () => {
//     setAutoplayIsActive(!autoplayIsActive);
//   };

//   const autoplayStart = () => {
//     autoplayRef.current = setInterval(() => {
//       rotateSlides(1);
//     }, 5000);
//   };

//   const autoplayStop = () => {
//     if (autoplayRef.current) {
//       clearInterval(autoplayRef.current);
//     }
//   };

//   return (
//     <div className="w-full h-[1024px] flex justify-center items-end bg-black p-5">
//       <div className="relative flex justify-center items-center w-full max-w-5xl">
//         <div className="absolute top-0 left-1/4 transform -translate-y-1/2 text-blue-400 hover:text-blue-500 cursor-pointer" onClick={() => rotateSlides(-1)}>
//           <FaArrowAltCircleLeft size={30} />
//         </div>
//         <div className="absolute top-0 right-1/4 transform -translate-y-1/2 text-blue-400 hover:text-blue-500 cursor-pointer" onClick={() => rotateSlides(1)}>
//           <FaArrowAltCircleRight size={30} />
//         </div>
//         <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 text-blue-400 hover:text-blue-500 cursor-pointer" onClick={toggleAutoplay}>
//           {autoplayIsActive ? <FaPauseCircle size={30} /> : <FaPlayCircle size={30} />}
//         </div>
//         <div ref={slidesHolderRef} className="relative rounded-full flex justify-center items-center">
//           {slides.map((slide, index) => (
//             <div
//               key={index}
//               className={`absolute top-0 rounded-full border-2 border-blue-300 slide ${index === currentSlideIndex ? 'brightness-100' : 'brightness-75'}`}
//               style={{ filter: index === currentSlideIndex ? 'brightness(100%)' : 'brightness(70%)' }}
//             >
//               <Image width={800} height={800} src={Frame} alt={slide.title} className="min-w-[30rem] min-h-[25rem] rounded-full" />
//             </div>
//           ))}
//         </div>
//         <div className="absolute bottom-0 w-full text-center text-white">
//           <h1 className="text-2xl">{slides && slides[currentSlideIndex]?.title}</h1>
//           <p>{slides && slides[currentSlideIndex]?.description}</p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export { Squad };
