import BREAK_POINTS from "./queries";
import useMediaQuery from "./useMediaQuery";

function useMediaQueries() {
  const desktopQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.DESKTOP}px)`);
  const laptopQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.LAPTOP}px)`);
  const tabletQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.TABLET}px)`);
  const mobileQuery = useMediaQuery(`(min-width: ${BREAK_POINTS.MOBILE}px)`);

  const result = {
    desktop: desktopQuery,
    laptop: laptopQuery,
    tablet: tabletQuery,
    mobile: mobileQuery,
  };

  if (result.tablet) result.mobile = false;
  if (result.laptop) {result.mobile = false; result.tablet = false;}
  if (result.desktop) {result.mobile = false; result.tablet = false; result.laptop = false}


  return result;
}

export default useMediaQueries;
