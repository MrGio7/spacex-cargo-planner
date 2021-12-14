import React from "react";

export default function Loading() {
  return (
    <div className="loading">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        role="img"
        width="20vw"
        height="20vw"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 24 24"
        style={{
          color:'#FFFFFF',
          position: 'absolute',
          left:'40vw',
          top:'calc(50vh - 10vw)',
        }}
      >
        <circle cx="12" cy="2" r="0" fill="currentColor">
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(45 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.125s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(90 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.25s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(135 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.375s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(180 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.5s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(225 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.625s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(270 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.75s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
        <circle
          transform="rotate(315 12 12)"
          cx="12"
          cy="2"
          r="0"
          fill="currentColor"
        >
          <animate
            attributeName="r"
            values="0;2;0;0"
            dur="1s"
            repeatCount="indefinite"
            begin="0.875s"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8"
            calcMode="spline"
          ></animate>
        </circle>
      </svg>
    </div>
  );
}
