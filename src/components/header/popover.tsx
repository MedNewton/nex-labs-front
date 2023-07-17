import { useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { createPopper, Instance as PopperInstance } from "@popperjs/core";

interface PopoverProps {
  referenceElement: HTMLDivElement | null;
  isOpen: boolean;
  children: React.ReactNode;
}

const Popover: React.FC<PopoverProps> = ({ referenceElement, isOpen, children }) => {
  const popperInstanceRef = useRef<PopperInstance | null>(null);

  useEffect(() => {
    if (referenceElement && isOpen) {
      const popoverElement = document.getElementById('popover');
      if (popoverElement) {
        popperInstanceRef.current = createPopper(referenceElement, popoverElement, {
          placement: 'top',
        });
      }
    }

    return () => {
      if (popperInstanceRef.current) {
        popperInstanceRef.current.destroy();
        popperInstanceRef.current = null;
      }
    };
  }, [referenceElement, isOpen]);

  if (!isOpen) {
    return null;
  }

  return (
    <div id="popover" className="popover">
      {children}
    </div>
  );
};

export default Popover;
