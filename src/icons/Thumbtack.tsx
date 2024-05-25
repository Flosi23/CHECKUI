import * as React from "react";
import type { SVGProps } from "react";
const SvgThumbtack = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    overflow="visible"
    preserveAspectRatio="none"
    viewBox="0 0 16 21"
    {...props}>
    <path
      d="M5.61 2.12 5.158 7.9a1.95 1.95 0 0 1-.871 1.476A4.9 4.9 0 0 0 2.24 12.26l-.054.209h4.815v-3.61a.99.99 0 0 1 1-.984.99.99 0 0 1 1 .984v3.61h4.815l-.054-.21a4.9 4.9 0 0 0-2.047-2.879 1.96 1.96 0 0 1-.87-1.476l-.451-5.783q-.005-.077-.004-.152H5.618q.001.075-.005.152zm1.392 12.318h-5.67c-.413 0-.8-.185-1.05-.505a1.3 1.3 0 0 1-.242-1.128l.258-1.025a6.88 6.88 0 0 1 2.864-4.032l.3-3.81.155-1.97H2.333a.99.99 0 0 1-1-.984.99.99 0 0 1 1-.984h11.339a.99.99 0 0 1 1 .984.99.99 0 0 1-1 .985h-1.284l.154 1.969.296 3.81a6.9 6.9 0 0 1 2.864 4.032l.258 1.025c.1.394.009.808-.242 1.128-.25.32-.642.505-1.05.505H9.003v5.578A.99.99 0 0 1 8.002 21a.99.99 0 0 1-1-.984z"
      style={{
        strokeLinecap: "butt",
        strokeLinejoin: "miter",
      }}
      vectorEffect="non-scaling-stroke"
    />
  </svg>
);
export default SvgThumbtack;
