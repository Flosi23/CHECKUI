import * as React from "react";
import type { SVGProps } from "react";
const SvgCrossCircle = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" xmlSpace="preserve" viewBox="0 0 100 100" {...props}>
    <path
      fill="#E30513"
      d="M50 0C22.386 0 0 22.386 0 50s22.386 50 50 50 50-22.386 50-50S77.614 0 50 0m20.52 62.54a2.42 2.42 0 0 1 .008 3.422l-.008.008L66 70.52a2.42 2.42 0 0 1-3.422.008l-.008-.008L50 58 37.46 70.52a2.42 2.42 0 0 1-3.422.008l-.008-.008L29.48 66a2.42 2.42 0 0 1-.008-3.422l.008-.008L42 50 29.48 37.46a2.42 2.42 0 0 1-.008-3.422l.008-.008L34 29.48a2.42 2.42 0 0 1 3.422-.008l.008.008L50 42l12.54-12.52a2.42 2.42 0 0 1 3.422-.008l.008.008L70.52 34a2.42 2.42 0 0 1 .008 3.422l-.008.008v.03L58 50z"
    />
  </svg>
);
export default SvgCrossCircle;
