import * as React from "react";
import { CanvasPosition, Position } from "../core/foundation";
import CanvasStore from "../state/CanvasStore";
import { memo } from "react";

// interface TextBlockProps extends CanvasPosition {
//   text: string;
//   color: string;
//   width: number;
//   height: number;
// }

interface ImageBlockProps extends CanvasPosition {
  img: any;
  width: number;
  height: number;
}

// const TextBlock = ({
//   text,
//   color,
//   left,
//   top,
//   width,
//   height,
// }: TextBlockProps) => {
//   return (
//     <Position left={left} top={top} width={width} height={height}>
//       <div
//         className="flex items-center justify-center"
//         style={{
//           width: `${width}px`,
//           height: `${height}px`,
//           background: color,
//         }}
//       >
//         {text}
//       </div>
//     </Position>
//   );
// };

const ImageBlock = ({ img, left, top, width, height }: ImageBlockProps) => {
  return (
    <Position left={left} top={top} width={width} height={height}>
      <img src={img.src} />
    </Position>
  );
};

function loadImage(src: string) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.src = src;
    img.onload = () => resolve({ img, width: img.width, height: img.height });
    img.onerror = (err) => reject(err);
  });
}

const InfiniteCanvas = ({ frame }: { frame: string }) => {
  // const texts = [
  //   "Infinite",
  //   "Canvases",
  //   "Are",
  //   "Easy",
  //   "When",
  //   "You",
  //   "Know",
  //   "The",
  //   "Fundamentals",
  // ];

  // const colors = [
  //   "#f1f7ed",
  //   "#61c9a8",
  //   "#7ca982",
  //   "#e0eec6",
  //   "#c2a83e",
  //   "#ff99c8",
  //   "#fcf6bd",
  //   "#9c92a3",
  //   "#c6b9cd",
  // ];
  const scale = CanvasStore.scale;

  const images = React.useMemo(
    () =>
      Array.from(Array(5).keys()).map(
        () =>
          `https://picsum.photos/seed/${parseInt(
            Math.random() * 300000000000000 + ""
          )}/200/300`
      ),
    []
  );

  const [loadedImages, setImages] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const loadedImages = await Promise.all(
        images.map((src) => loadImage(src))
      );
      setImages(loadedImages);
    })();
  }, [images]);

  return (
    <div
      className="w-full h-full"
      style={{
        transform: `scale(${(scale.x, scale.y)})`,
        transformOrigin: "top left",
      }}
    >
      {loadedImages.map((imageInfo, index) => (
        <ImageBlock
          key={index}
          img={imageInfo.img}
          left={(index % 3) * (imageInfo.width + 100)}
          top={Math.floor(index / 3) * (imageInfo.height + 100)}
          width={imageInfo.width}
          height={imageInfo.height}
        />
      ))}
    </div>
  );
};

export default memo(InfiniteCanvas);
