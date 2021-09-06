import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import ImageList from "@material-ui/core/ImageList";
import ImageListItem from "@material-ui/core/ImageListItem";
import ImageListItemBar from "@material-ui/core/ImageListItemBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
// import itemData from "./itemData";

// /Users/csnieves/DK-PubLIC/public/restaurant1.jpeg

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     width: 500,
//     height: 450,
//   },
// }));

// const itemData = [
//   {
//     img: "/restaurant1.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "/restaurant2.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "/restaurant3.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "/restaurant4.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "/restaurant5.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
//   {
//     img: "/restaurant6.jpeg",
//     title: "Image",
//     author: "author",
//     cols: 2,
//   },
// ];

export default function ImageList1() {
  //   const classes = useStyles();

  return (
    <div
      id="carouselExampleIndicators"
      className="carousel slide"
      data-ride="carousel"
    >
      <ol className="carousel-indicators">
        <li
          data-target="#carouselExampleIndicators"
          data-slide-to="0"
          className="active"
        ></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
      </ol>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            className="d-block w-100 img"
            src="/restaurant1.jpg"
            alt="First slide"
          />
        </div>
        <div className="carousel-item img">
          <img
            className="d-block w-100"
            src="/restaurant2.jpeg"
            alt="Second slide"
          />
        </div>
        <div className="carousel-item img">
          <img
            className="d-block w-100"
            src="/restaurant3.jpg"
            alt="Third slide"
          />
        </div>
      </div>
      <a
        className="carousel-control-prev"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="sr-only">Previous</span>
      </a>
      <a
        className="carousel-control-next"
        href="#carouselExampleIndicators"
        role="button"
        data-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="sr-only">Next</span>
      </a>
    </div>
  );
}

// const useStyles = makeStyles((theme) => ({
//   root: {
//     display: "flex",
//     flexWrap: "wrap",
//     justifyContent: "space-around",
//     overflow: "hidden",
//     backgroundColor: theme.palette.background.paper,
//   },
//   imageList: {
//     flexWrap: "nowrap",
//     // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
//     transform: "translateZ(0)",
//   },
//   title: {
//     color: theme.palette.primary.light,
//   },
//   titleBar: {
//     background:
//       "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
//   },
// }));

// export default function ImageList1() {
//   const classes = useStyles();

//   return (
//     <div className={classes.root}>
//       <ImageList className={classes.imageList} cols={2.5}>
//         {itemData.map((item) => (
//           <ImageListItem key={item.img}>
//             <img src={item.img} alt={item.title} />
//             <ImageListItemBar
//               title={item.title}
//               classes={{
//                 root: classes.titleBar,
//                 title: classes.title,
//               }}
//               actionIcon={
//                 <IconButton aria-label={`star ${item.title}`}>
//                   <StarBorderIcon className={classes.title} />
//                 </IconButton>
//               }
//             />
//           </ImageListItem>
//         ))}
//       </ImageList>
//     </div>
//   );
// }
