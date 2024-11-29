import "../../css/components-css/ui/Label.css";

export function Label({ htmlFor, children }) {
  return (
    <label htmlFor={htmlFor} className="label">
      {children}
    </label>
  );
}
