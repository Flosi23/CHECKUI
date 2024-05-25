import { ComponentPropsWithoutRef, forwardRef, useId } from "react";
import { cn } from "@lib/utils";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Cancel } from "@lib/icons";

export interface InputNoteProps extends ComponentPropsWithoutRef<"div"> {
  /**
   * Event handler that is called when the user clicks on the close icon displayed on the right side of the note.
   * If this prop is not set, the close icon will not be displayed.
   */
  onClickClose?: () => void;
  asChild?: boolean;
}

const InputNote = forwardRef<HTMLDivElement, InputNoteProps>(
  ({ onClickClose, asChild, children, className, id, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    const generatedId = useId();
    const usedId = id || generatedId;

    return (
      <Comp
        id={usedId}
        className={cn("shadow-box relative rounded-[5px] border border-primary bg-surface p-4", className)}
        {...props}>
        <Slottable>{children}</Slottable>
        {onClickClose && (
          <button
            aria-controls={usedId}
            className={cn("absolute right-2.5 top-2.5 rounded-full text-surface")}
            onClick={onClickClose}
            aria-description={"Close note"}>
            <Cancel className={"h-3.5 w-3.5 fill-on-surface-very-light"} />
          </button>
        )}

        <div className="absolute left-1/2 top-0 -z-10 mt-[4px] h-4 w-4 -translate-x-1/2 -translate-y-1/2 rotate-45 -scale-x-100 -scale-y-100 transform border-b border-r border-primary bg-surface" />
        <div
          className="absolute left-1/2 top-0 mt-[4px] h-[14px] w-[14px] -translate-x-1/2 -translate-y-1/2 rotate-45 -scale-x-100 -scale-y-100
         transform bg-surface"
        />
      </Comp>
    );
  },
);
InputNote.displayName = "InputNote";

export interface InputNoteTitleProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const InputNoteTitle = forwardRef<HTMLDivElement, InputNoteTitleProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp ref={ref} className={cn("mb-1.5 font-bold text-on-surface", className)} {...props}>
        {children}
      </Comp>
    );
  },
);
InputNoteTitle.displayName = "InputNoteTitle";

export interface InputNoteContentProps extends ComponentPropsWithoutRef<"div"> {
  asChild?: boolean;
}

const InputNoteContent = forwardRef<HTMLDivElement, InputNoteContentProps>(
  ({ className, children, asChild, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";

    return (
      <Comp ref={ref} className={cn("text-on-surface", className)} {...props}>
        {children}
      </Comp>
    );
  },
);
InputNoteContent.displayName = "InputNoteContent";

export { InputNote, InputNoteTitle, InputNoteContent };
