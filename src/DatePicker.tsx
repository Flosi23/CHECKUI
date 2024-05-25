import React, {
  DetailedHTMLProps,
  forwardRef,
  HTMLInputTypeAttribute,
  InputHTMLAttributes,
  ReactNode,
  useId,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Spinner } from "@lib/Spinner";
import { Cancel, HelptextOutline } from "@lib/icons";
import { cn } from "@lib/utils";

export interface DatePickerProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    "size" | "placeholder"
  > {
  /**
   * The label of the input.
   */
  label: ReactNode;
  /**
   * The error message to display if the input is invalid. If the input is valid, this should be undefined.
   */
  error?: string;
  /**
   * If true, a spinner will be shown the right side of the input. If an Icon is set, it will be replaced by this spinner.
   */
  loading?: boolean;
  /**
   * An event handler that is called when the user clicks on the help icon displayed on the right side of the input.
   * This help icon is only displayed if the `helpOverlayContent` prop is set.
   *
   * This help icon will replace a right aligned icon if existent.
   */
  onClickHelpIcon?: React.MouseEventHandler<HTMLButtonElement>;
}

// @see https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
const datepickerTypesSupportingSetSelectionRange: readonly string[] = [
  "text",
] satisfies HTMLInputTypeAttribute[];

/**
 * DatePicker is a component that renders a datepicker input field. It is used to collect user date input.
 */
const DatePicker = forwardRef<HTMLInputElement, DatePickerProps>(
  (
    {
      label,
      error,
      loading,
      disabled,
      onClickHelpIcon,
      className,
      onFocus,
      onInput,
      onBlur,
      value,
      defaultValue,
      id,
      ...inputProps
    },
    ref,
  ) => {
    const generatedId = useId();
    const usedId = id || generatedId;

    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(ref, () => inputRef.current as HTMLInputElement);

    const [focused, setFocused] = useState(false);

    // if either defaultValue or value is set, the input has content
    const [hasContent, setHasContent] = useState(!!(defaultValue || value));

    const handleClear = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!inputRef.current) return;

      e.preventDefault();

      if (!focused) {
        inputRef.current.focus();
        return;
      }

      // we need to clear the input value and trigger an input event
      imitateInputEvent(inputRef.current, "");
    };

    const handleOnFocus = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onFocus) {
        onFocus(event);
      }
      setFocused(true);

      // set the caret position to the end of the input
      const input = event.currentTarget;
      if (!datepickerTypesSupportingSetSelectionRange.includes(input.type)) {
        return;
      }

      setTimeout(() => {
        const caretPosition = input.value.length;
        input.setSelectionRange(caretPosition, caretPosition);
      }, 0);
    };

    const handleOnBlur = (event: React.FocusEvent<HTMLInputElement>) => {
      if (onBlur) {
        onBlur(event);
      }
      setFocused(false);
    };

    const handleOnInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      if (onInput) {
        onInput(event);
      }
      setHasContent(event.currentTarget.value !== "");
    };

    const hasIcon = loading || onClickHelpIcon;

    return (
      <div className={"flex flex-col gap-1"}>
        <div className={"relative"}>
          <input
            id={usedId}
            ref={inputRef}
            className={cn(
              `placeholder-shown:py-4.25 peer w-full rounded-[5px] border pb-2.5 pl-4 pt-6 text-lg font-normal
              leading-none text-on-surface caret-primary shadow-none
              outline-none focus:pb-2.5 focus:pt-6
              disabled:bg-surface-container disabled:text-on-surface-light`,
              !!error && "border-error",
              !error && "border-outline-variant focus:border-primary",
              hasIcon && "pr-20 disabled:pr-10",
              !hasIcon && "pr-10 disabled:pr-4",
              className,
            )}
            disabled={disabled}
            placeholder={" "}
            onFocus={handleOnFocus}
            onBlur={handleOnBlur}
            onInput={handleOnInput}
            value={value}
            defaultValue={defaultValue}
            aria-invalid={!!error}
            aria-errormessage={error ? `${usedId}-error` : undefined}
            autoCorrect={"off"}
            {...inputProps}
          />
          <span className="absolute right-4 top-1/2 flex -translate-y-1/2 gap-4">
            <button
              tabIndex={-1}
              type="button"
              className={cn(
                "flex transform items-center justify-center duration-200",
                hasContent && focused ? "opacity-100" : "cursor-text opacity-0",
              )}
              onMouseDown={handleClear}>
              <Cancel className="h-4 w-4 fill-on-surface-very-light" />
            </button>
            {onClickHelpIcon && !loading && (
              <button
                tabIndex={-1}
                type="button"
                onMouseDown={onClickHelpIcon}
                aria-description={"Delete content inside input"}>
                <HelptextOutline className="h-5 w-5" />
              </button>
            )}
            {loading && <Spinner color="primary" className="h-5 w-5" />}
          </span>
          <label
            htmlFor={usedId}
            className={cn(
              `pointer-events-none absolute left-4 top-4 origin-[0] -translate-y-4 scale-[72%] transform text-lg font-light text-on-surface-very-light duration-300
                 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-4 peer-focus:scale-[72%]`,
              !error && "peer-focus:text-primary",
            )}>
            {label}
          </label>
        </div>
        {error && (
          <span id={`${usedId}-error`} className="w-fit text-sm leading-4 text-error">
            {error}
          </span>
        )}
      </div>
    );
  },
);

DatePicker.displayName = "DatePicker";

function imitateInputEvent(input: HTMLInputElement, value: string) {
  const nativeInputValueSetter = Object.getOwnPropertyDescriptor(
    window.HTMLInputElement.prototype,
    "value",
  )?.set;
  nativeInputValueSetter!.call(input, value);
  input.dispatchEvent(new Event("input", { bubbles: true }));
}

export { DatePicker };
