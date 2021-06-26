//Import Images
import vgdbupcoming from "./img/vgdbupcoming.PNG";
import colorizerhome from "./img/colorizerhome.PNG";
import frequenciplaying from "./img/frequenciplaying.PNG";
import vgdbdetails from "./img/vgdbdetails.PNG";
import frequencilibrary from "./img/frequencilibrary.PNG";
import colorizerpalettes from "./img/colorizerpalettes.PNG";

export const MovieState = () => {
  return [
    {
      title: "V G D B",
      mainImg: vgdbupcoming,
      secondaryImg: vgdbdetails,
      url: "/work/the-athlete",
      awards: [
        {
          title: "Axios",
          description:
            "Fetches data from the Rawg.io API using Axios and Redux-Thunk to manage state asynchrously.",
        },
        {
          title: "Framer Motion",
          description:
            "Utilizes Framer-Motion library for animations/visual effects",
        },
        {
          title: "React Router",
          description:
            "React-Router is used to redirect to individual game details pages",
        },
      ],
    },
    {
      title: "Frequenci",
      mainImg: frequenciplaying,
      url: "/work/good-times",
      secondaryImg: frequencilibrary,
      awards: [
        {
          title: "Sass",
          description:
            "Styling is done via Sass to organize global styles & partials and to nest classes.",
        },
        {
          title: "Mobile Responsive",
          description:
            "App is responsive across all device sizes using media-queries.",
        },
        {
          title: "Add Music",
          description:
            "Media info is stored in separate util.js file to allow adding and removing songs easily.",
        },
      ],
    },
    {
      title: "Colorizer",
      mainImg: colorizerhome,
      url: "/work/the-racer",
      secondaryImg: colorizerpalettes,
      awards: [
        {
          title: "Chroma.js Library",
          description:
            "Utilizes Chroma.js library to easily implement color-spectrum data.",
        },
        {
          title: "Vanilla JS",
          description:
            "App is done in using vanilla JS (no frameworks used).",
        },
        {
          title: "Local Storage",
          description:
            "Color palettes are saved to local storage with ability to access later",
        },
      ],
    },
  ];
};
