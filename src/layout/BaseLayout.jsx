import React from "react";
import {
  ArrowPathIcon,
  CloudArrowUpIcon,
  FingerPrintIcon,
  LockClosedIcon,
} from "@heroicons/react/24/outline";


export const BaseLayout = ({ children }) => {
  return (
    <>
      <div className="bg-white py-12 sm:py-24">
        <div className="mx-auto max-w-7xl px-2 lg:px-2">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">
              Test
            </h2>
            <p className="mt-2 text-pretty text-4xl font-semibold tracking-tight text-gray-900 sm:text-5xl lg:text-balance">
              Prueba fullstack
            </p>
            {/* <p className="mt-6 text-lg leading-8 text-gray-600">
            Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
            pulvinar et feugiat blandit at. In mi viverra elit nunc.
          </p> */}
          </div>
          <div className="mx-auto mt-8 max-w-2xl sm:mt-12 lg:mt-6 lg:max-w-4xl">
            {children}
          </div>
        </div>
      </div>
    </>
  );
};
