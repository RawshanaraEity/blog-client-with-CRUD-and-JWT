import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Loading = () => {
  return (
    <div>
      <SkeletonTheme
        baseColor="#2000"
        highlightColor="#444"
        duration={1.5}
        enableAnimation={true}
        direction="ltr"
      >
        <p>
          <Skeleton count={3} />
        </p>
      </SkeletonTheme>
    </div>
  );
};

export default Loading;
