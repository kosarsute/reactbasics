import * as React from "react";
import "./styles.css";

export const RadioGroup = ({ onChange, selected, children }) => {
    const RadioOptions = React.Children.map(children, (child, index) => {
        return React.cloneElement(child, {
            selected: child.props.value === selected,
            onChange: () => onChange(child.props.value),
        })
    })
    return <div className="RadioGroup">{RadioOptions}</div>;
};

export const RadioOption = ({ value, checked, onChange, children }) => {
      return( 
         <div className="RadioOption">
            <input
             id={value} 
             type="radio"
              name={value}
            checked = {checked}
            onChange = {(e) => {
                onChange(e.target.value)
            }}
             />
            <label htmlFor={value}>{children}</label>
        </div>
    );
};
