import { useBreakpointValue } from "@chakra-ui/react";

function useSkeleton() {
  const breakpoint = useBreakpointValue(
    { base: "sm", md: "md", lg: "lg", xl: "xl" },
    { ssr: false }
  );
  const skeletons =
    breakpoint === "sm"
      ? [1]
      : breakpoint === "md"
      ? [1, 2]
      : breakpoint === "lg"
      ? [1, 2, 3]
      : [1, 2, 3, 4, 5];

  return { skeletons };
}

export default useSkeleton;
