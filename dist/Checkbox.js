import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from "react";
import { useId } from "react";
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { cn } from "@lib/utils";
import CheckboxCheckmark from "@lib/icons/CheckboxCheckmark";
import * as Label from "@radix-ui/react-label";
const Checkbox = React.forwardRef(({ className, label, error, id, ...props }, ref) => {
    const generatedId = useId();
    const usedId = id || generatedId;
    return (_jsxs("div", { className: "flex flex-col gap-1", children: [_jsxs("div", { className: "flex items-center gap-3", children: [_jsx(CheckboxPrimitive.Root, { id: usedId, ref: ref, className: cn(`peer flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[3px]
         border border-outline
         disabled:cursor-not-allowed disabled:bg-surface-container
         data-[state=checked]:bg-primary`, className), "aria-invalid": !!error, "aria-errormessage": `${usedId}-error`, ...props, children: _jsx(CheckboxPrimitive.Indicator, { children: _jsx(CheckboxCheckmark, { className: "w-[13px] fill-on-primary" }) }) }), label && (_jsx(Label.Root, { className: "text-lg leading-none text-on-surface peer-disabled:cursor-not-allowed", htmlFor: usedId, children: label }))] }), error && (_jsx("span", { id: `${usedId}-error`, className: "text-sm leading-4 text-error", children: error }))] }));
});
Checkbox.displayName = CheckboxPrimitive.Root.displayName;
export { Checkbox };
