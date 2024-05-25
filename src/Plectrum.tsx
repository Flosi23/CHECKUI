import React, { ComponentPropsWithoutRef, forwardRef } from "react";
import { Plektrum } from "@lib/icons";
import { cn } from "@lib/utils";

export interface PlectrumProps extends ComponentPropsWithoutRef<"div"> {
  textClassName?: string;
}

const Plectrum = forwardRef<HTMLDivElement, PlectrumProps>(({ children, className, textClassName, ...props }, ref) => {
  return (
    <div ref={ref} className={cn("grid", className)} {...props}>
      <Plektrum className="col-start-1 row-start-1" />
      <div
        className={cn(
          "col-start-1 row-start-1 ml-5.5 my-3 mr-4 flex flex-col justify-center items-center text-center text-white",
          textClassName,
        )}>
        {children}
      </div>
    </div>
  );
});
Plectrum.displayName = "Plectrum";

export { Plectrum };
