import React, { useState } from "react";
import styles from "./StarRating.module.css";

export default function StarRating({ value, onChange, max = 5 }) {
    const [hovered, setHovered] = useState(null);

    return (
        <div>
            {[...Array(max)].map((_, i) => {
                const isFilled = hovered !== null ? i < hovered : i < value;
                const isSelected = value > 0 && i === value - 1 && hovered === null;
                    return (
                    <span
                        key={i}
                        className={[
                        styles.star,
                        isFilled ? styles.filled : "",
                        isSelected ? styles.selected : ""
                        ].join(" ")}
                        onClick={() => onChange(i + 1)}
                        onMouseEnter={() => setHovered(i + 1)}
                        onMouseLeave={() => setHovered(null)}
                    >
                        &#x2605;
                    </span>
                    );
            })}
    
        </div>
    );
}