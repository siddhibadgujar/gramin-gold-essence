import React from "react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-6 px-4">
      <div className="max-w-6xl mx-auto text-center text-gray-600 text-sm space-y-2">

        <p>
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold text-green-700">
            Gramin Gold Essence
          </span>
          . All Rights Reserved.
        </p>

        <p>
          Developed & Managed By{" "}
          <span className="font-medium text-gray-800">
            Siddhi Badgujar
          </span>
        </p>

      </div>
    </footer>
  );
}