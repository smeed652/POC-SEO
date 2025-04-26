import React from "react";

export interface OrderButtonProps {
  onClick: () => void;
  className?: string;
  children?: React.ReactNode;
}

/**
 * OrderButton atom — styled order button with trailing arrow SVG.
 */
export const OrderButton: React.FC<OrderButtonProps> = ({ onClick, className = "", children }) => (
  <button
    onClick={onClick}
    className={`flex items-center gap-2 px-3 py-2 bg-white rounded outline outline-1 outline-indigo-700 hover:bg-indigo-50 ${className}`}
  >
    <span className="text-indigo-700 text-sm font-medium">{children || "Order"}</span>
    <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M13.5833 9.99992L6.63881 14.1666L6.63881 5.83325L13.5833 9.99992Z" fill="#4338CA"/>
    </svg>
  </button>
);

export default OrderButton;
