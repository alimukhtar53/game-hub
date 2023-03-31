import { useBreakpointValue } from "@chakra-ui/react";

type BreakpointValue = "base" | "sm" | "md" | "lg" | "xl" | undefined;
type Skeletons = number[];

function useSkeleton(): { skeletons: Skeletons } {
  const breakpoint: BreakpointValue = useBreakpointValue({
    base: "sm",
    sm: "sm",
    md: "md",
    lg: "lg",
    xl: "xl",
  });

  const getSkeletons = (breakpoint: BreakpointValue): Skeletons => {
    switch (breakpoint) {
      case "sm":
        return [1];
      case "md":
        return [1, 2];
      case "lg":
        return [1, 2, 3];
      case "xl":
      default:
        return [1, 2, 3, 4, 5];
    }
  };

  const skeletons: Skeletons = getSkeletons(breakpoint);

  return { skeletons };
}

export default useSkeleton;
