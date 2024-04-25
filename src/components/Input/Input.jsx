import React, { forwardRef } from "react";

const Input = forwardRef(
  (
    {
      placeholder,
      onClick,
      value,
      label,
      className,
      onChange,
      required,
      onKeyUp
    },
    ref
  ) => {
    return (
      <input
        type="text"
        placeholder={placeholder}
        onChange={onChange}
        required={required}
        value={value}
        onKeyUp={onKeyUp}
        ref={ref}
        className={`${className} w-full text-base tracking-tight text-black box-border outline-none`}
      />
    );
  }
);

export default Input;
