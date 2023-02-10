import React from "react";

export default function ScssAssessment() {
  return (
    <div className="grid grid-cols-1 divide-y divide-none text-left">
      <h3 className="font-medium leading-tight text-3xl m-2 text-blue-600 w-fit">
        1. Styling
      </h3>
      <p className="subpixel-antialiased w-fit m-2">
        In this first test we will try out your skills in styling elements.
      </p>
      <p className="subpixel-antialiased w-fit m-2">
        Your goal is to reproduce the checkerboard presented in the picture
        below with HTML elements, and SCSS or Tailwind styling.{" "}
        <span className="font-bold">
          Before starting your work, please refer to the README for more
          detailed directions!
        </span>
      </p>
      <img src="/images/styling-test.png" alt="styling-test" />
      <div className="box">
        <div className="top-box">
          <div className="top-box1">john</div>
          <div className="top-box2">
            <p>doe</p>
          </div>
          <div className="top-box3">john</div>
        </div>
        <div className="bottom-box">
          <div className="bottom-1">doe</div>
          <div className="bottom-right">
            <div className="bottom-2">doe</div>
            <div className="bottom-3">john</div>
          </div>
        </div>
      </div>
    </div>
  );
}
