import { forwardRef } from "react";
import "../../css/components-css/ui/Input.css";


export const Input = forwardRef((props, ref) => (
  <input
    {...props}
    ref={ref}
    className="input"
  />
));
