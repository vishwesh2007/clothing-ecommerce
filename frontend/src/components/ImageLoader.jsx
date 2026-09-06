import { Skeleton } from "@/components/ui/skeleton";
import { useState } from "react";

function ImageLoader({ src, alt, className = "", skeletonClassName = "" }) {
  const [loaded, setLoaded] = useState(false);

  return (
    <div className={`relative ${className}`}>
      {!loaded && (
        <Skeleton
          className={`absolute inset-0 h-full w-full ${skeletonClassName}`}
        />
      )}

      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        onLoad={() => setLoaded(true)}
        className={`h-full w-full transition-opacity duration-300 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}

export default ImageLoader;
