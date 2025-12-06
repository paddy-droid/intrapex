"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

const Accordion = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { type?: string; collapsible?: boolean }
>(({ className, type, collapsible, ...props }, ref) => (
    <div ref={ref} className={cn("space-y-4", className)} {...props} />
));
Accordion.displayName = "Accordion"; // Displays in dev tools

const AccordionItem = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref={ref} className={cn("border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-orange-200 transition-colors", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
    HTMLButtonElement,
    React.ButtonHTMLAttributes<HTMLButtonElement> & {
        isOpen?: boolean;
        setIsOpen?: (value: boolean) => void;
    }
>(({ className, children, isOpen, setIsOpen, ...props }, ref) => (
    <div className="flex">
        <button
            ref={ref}
            onClick={() => setIsOpen && setIsOpen(!isOpen)}
            className={cn(
                "flex flex-1 items-center justify-between py-5 px-6 font-bold text-slate-900 transition-all hover:text-orange-600 [&[data-state=open]>svg]:rotate-180",
                className
            )}
            {...props}
        >
            {children}
            <ChevronDown className={cn("h-5 w-5 shrink-0 transition-transform duration-200 text-slate-400", isOpen && "rotate-180 text-orange-600")} />
        </button>
    </div>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
    HTMLDivElement,
    React.HTMLAttributes<HTMLDivElement> & { isOpen?: boolean }
>(({ className, children, isOpen, ...props }, ref) => (
    <AnimatePresence initial={false}>
        {isOpen && (
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
            >
                <div className={cn("pb-5 px-6 pt-0 text-slate-600 leading-relaxed", className)}>{children}</div>
            </motion.div>
        )}
    </AnimatePresence>
));
AccordionContent.displayName = "AccordionContent";

// Helper to manage state since we don't have Radix
const AccordionItemWrapper = ({ children, className, ...props }: any) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={cn("border border-slate-200 rounded-xl overflow-hidden bg-white hover:border-orange-200 transition-colors", className)}>
            {React.Children.map(children, child => {
                if (React.isValidElement(child)) {
                    return React.cloneElement(child as any, { isOpen, setIsOpen });
                }
                return child;
            })}
        </div>
    )
}

export { Accordion, AccordionItemWrapper as AccordionItem, AccordionTrigger, AccordionContent };
