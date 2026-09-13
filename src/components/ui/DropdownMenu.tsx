import React, { useState, useRef, useEffect } from 'react'
import { ButtonIcon } from "./ButtonIcon";
import type { ButtonIconProps } from "./ButtonIcon";

export interface DropdownMenuProps extends ButtonIconProps {
    children?: React.ReactNode;
}

export function DropdownMenu({ children, ...props }: DropdownMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const dropdownRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    return (
        <div className={`relative`} ref={dropdownRef}>
            <ButtonIcon {...props} onClick={() => setIsOpen(!isOpen)} />
            {
                isOpen && (
                    <div className="absolute right-0 mt-1 w-max max-w-48 bg-surface border border-border shadow-lg z-50 overflow-hidden shadow-lg ring-1 ring-black/5">
                        <ul className="text-sm text-ts">
                            {React.Children.map(children, (child, index) => (
                                <li
                                    key={index}
                                    className="px-3 py-1.25 text-sm text-ts hover:bg-primary-soft hover:text-primary transition-colors"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {child}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div>
    )
}