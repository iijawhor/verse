import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    { placeholder, onClick, value, label, className, onChange, required },
    ref
  ) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        className={`${className} w-full border-0 m-0 p-0 text-center text-base tracking-tight text-black box-border `}
      />
    );
  }
);

export default Input;
