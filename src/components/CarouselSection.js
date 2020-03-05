// import React from "react";

// // reactstrap components
// import {
//   Container,
//   Row,
//   Col,
//   Carousel,
//   CarouselItem,
//   CarouselIndicators,
//   CardLink
// } from "reactstrap";

// // core components

// const items = [
//   {
//     src: require("assets/img/header.jpg"),
//     altText: "Rust Server - Rustopia 2x/Just Wiped/Max Clan 4",
//     caption: "Rust Server - Rustopia 2x/Just Wiped/Max Clan 4"
//   },
//   {
//     src: require("assets/img/header.jpg"),
//     altText: "More Servers Coming Soon",
//     caption: "More Servers Coming Soon"
//   }
// ];

// function CarouselSection() {
//   const [activeIndex, setActiveIndex] = React.useState(0);
//   const [animating, setAnimating] = React.useState(false);
//   const onExiting = () => {
//     setAnimating(true);
//   };
//   const onExited = () => {
//     setAnimating(false);
//   };
//   const next = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
//     setActiveIndex(nextIndex);
//   };
//   const previous = () => {
//     if (animating) return;
//     const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
//     setActiveIndex(nextIndex);
//   };
//   const goToIndex = newIndex => {
//     if (animating) return;
//     setActiveIndex(newIndex);
//   };
//   return (
//     <>
//       <div className="section section-tabs" id="carousel">
//         <Container>
//           {/* <div className="title"> */}
//           {/* <h4>Carousel</h4> */}
//           {/* </div> */}
//           <Row className="justify-content-center">
//             <Col lg="8" md="12">
//               <Carousel
//                 activeIndex={activeIndex}
//                 next={next}
//                 previous={previous}
//               >
//                 <CarouselIndicators
//                   items={items}
//                   activeIndex={activeIndex}
//                   onClickHandler={goToIndex}
//                 />
//                 {items.map(item => {
//                   return (
//                     <CarouselItem
//                       onExiting={onExiting}
//                       onExited={onExited}
//                       key={item.src}
//                     >
//                       <img src={item.src} alt={item.altText} />
//                       <div className="carousel-caption d-none d-md-block">
//                         <CardLink onClick={() => {
//                           window.scrollTo(2500, 2500)
//                         }}>{item.caption}</CardLink>
//                       </div>
//                     </CarouselItem>
//                   );
//                 })}
//                 <a
//                   className="carousel-control-prev"
//                   data-slide="prev"
//                   href="#pablo"
//                   onClick={e => {
//                     e.preventDefault();
//                     previous();
//                   }}
//                   role="button"
//                 >
//                   <i className="now-ui-icons arrows-1_minimal-left"></i>
//                 </a>
//                 <a
//                   className="carousel-control-next"
//                   data-slide="next"
//                   href="#pablo"
//                   onClick={e => {
//                     e.preventDefault();
//                     next();
//                   }}
//                   role="button"
//                 >
//                   <i className="now-ui-icons arrows-1_minimal-right"></i>
//                 </a>
//               </Carousel>
//             </Col>
//           </Row>
//         </Container>
//       </div>
//     </>
//   );
// }

// export default CarouselSection;