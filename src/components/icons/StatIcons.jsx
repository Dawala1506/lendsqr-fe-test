// src/components/icons/StatsIcons.jsx

import React from "react";

export const UsersIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient1)" />
    <path
      d="M20 18C21.6569 18 23 16.6569 23 15C23 13.3431 21.6569 12 20 12C18.3431 12 17 13.3431 17 15C17 16.6569 18.3431 18 20 18Z"
      fill="white"
    />
    <path
      d="M20 20C16.6863 20 14 22.6863 14 26V28H26V26C26 22.6863 23.3137 20 20 20Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient1"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#DF18FF" />
        <stop offset="1" stopColor="#9718FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const ActiveUsersIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient2)" />
    <path
      d="M16 18C17.6569 18 19 16.6569 19 15C19 13.3431 17.6569 12 16 12C14.3431 12 13 13.3431 13 15C13 16.6569 14.3431 18 16 18Z"
      fill="white"
    />
    <path
      d="M24 18C25.6569 18 27 16.6569 27 15C27 13.3431 25.6569 12 24 12C22.3431 12 21 13.3431 21 15C21 16.6569 22.3431 18 24 18Z"
      fill="white"
    />
    <path
      d="M16 20C12.6863 20 10 22.6863 10 26V28H22V26C22 22.6863 19.3137 20 16 20Z"
      fill="white"
    />
    <path
      d="M24 20C23.1 20 22.25 20.15 21.45 20.4C22.45 21.6 23 23.2 23 25V28H30V26C30 22.6863 27.3137 20 24 20Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient2"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#5718FF" />
        <stop offset="1" stopColor="#9718FF" />
      </linearGradient>
    </defs>
  </svg>
);

export const LoansIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient3)" />
    <path
      d="M26 14H14C13.45 14 13 14.45 13 15V25C13 25.55 13.45 26 14 26H26C26.55 26 27 25.55 27 25V15C27 14.45 26.55 14 26 14ZM26 24H14V16H26V24Z"
      fill="white"
    />
    <path
      d="M20 18C18.9 18 18 18.9 18 20C18 21.1 18.9 22 20 22C21.1 22 22 21.1 22 20C22 18.9 21.1 18 20 18Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient3"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F55F44" />
        <stop offset="1" stopColor="#FF8C73" />
      </linearGradient>
    </defs>
  </svg>
);

export const SavingsIcon = ({ className = "" }) => (
  <svg
    className={className}
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient4)" />
    <path
      d="M24 16H16C14.9 16 14 16.9 14 18V26C14 27.1 14.9 28 16 28H24C25.1 28 26 27.1 26 26V18C26 16.9 25.1 16 24 16ZM24 26H16V18H24V26Z"
      fill="white"
    />
    <path
      d="M20 12C18.34 12 17 13.34 17 15H19C19 14.45 19.45 14 20 14C20.55 14 21 14.45 21 15C21 15.55 20.55 16 20 16H19V18H20C21.66 18 23 16.66 23 15C23 13.34 21.66 12 20 12Z"
      fill="white"
    />
    <defs>
      <linearGradient
        id="gradient4"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#FF3366" />
        <stop offset="1" stopColor="#FF6B94" />
      </linearGradient>
    </defs>
  </svg>
);
