// src/pages/Users.jsx
import React, { useState, useEffect, useCallback } from "react";

import {
  Filter,
  MoreVertical,
  Eye,
  UserX,
  UserPlus,
  SlidersHorizontal,
  ChevronDown,
  Calendar,
} from "lucide-react";
import "./styles/Users.scss";
import { useNavigate } from "react-router-dom";
import { users as mockUsers } from "./MockApiData";

const UsersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient1)" />

    <g transform="translate(10, 10) scale(0.9)">
      <path
        d="M13.9977 9.68179C13.9977 9.81686 14.0328 10.0913 14.1178 10.382C14.2032 10.6741 14.3346 10.9667 14.5182 11.1505L14.6578 11.2902V11.4787C14.6578 12.3877 14.324 12.9833 13.8395 13.4054C13.3612 13.822 12.7391 14.0664 12.1735 14.2853C11.8334 14.4364 11.52 14.5391 11.1959 14.7189L11.109 14.7677L10.694 14.0207L10.6432 13.9289L10.736 13.882C11.1072 13.6959 11.4771 13.5482 11.8434 13.4015C12.4329 13.1618 12.8843 12.9657 13.1998 12.6984C13.5009 12.4433 13.68 12.1207 13.7203 11.6154C13.4856 11.3131 13.3318 10.94 13.233 10.6076C13.1352 10.2781 13.0886 9.98305 13.068 9.82632C12.6737 9.21067 12.4774 8.57634 12.5846 8.10269C12.4941 7.74721 12.4406 7.27889 12.5006 6.82144C12.561 6.36152 12.7373 5.902 13.1158 5.58707C13.3499 4.91212 13.8423 4.42475 14.4772 4.12613L14.4811 4.12515L14.6696 4.05289C15.5699 3.74249 16.7245 3.81043 17.7838 4.24722L18.0094 4.34683L18.0153 4.34879V4.34976L18.3453 4.5314L18.4205 4.57339L18.3903 4.65445L18.2809 4.94742L18.2799 4.94644C18.1112 5.42114 18.244 5.79222 18.4264 6.23062H18.4254C18.6452 6.74408 18.8763 7.39118 18.5455 8.18863C18.6116 8.62062 18.4547 9.24589 18.0621 9.8605C18.0416 10.0173 17.996 10.3129 17.8981 10.6427C17.7991 10.9758 17.6444 11.3499 17.4088 11.6525C17.4323 12.1563 17.6113 12.4784 17.9166 12.7336C18.2366 13.0008 18.6966 13.1971 19.2858 13.4367C19.8884 13.6742 20.595 13.9555 21.1471 14.465C21.7045 14.9795 22.1002 15.7217 22.1002 16.8664V17.3332H14.567V16.3996H21.151C21.0642 15.7553 20.8034 15.3419 20.4371 15.0373C20.044 14.7104 19.5282 14.5045 18.9567 14.2834C18.3911 14.0645 17.7689 13.8201 17.2906 13.4035C16.8063 12.9814 16.4733 12.3855 16.4733 11.4767V11.2882L16.6119 11.1496C16.7947 10.9668 16.9174 10.6754 16.9987 10.382C17.0791 10.0915 17.115 9.81316 17.1334 9.66714V9.53922L17.15 9.51382L17.2213 9.40933C17.418 9.08728 17.5244 8.81234 17.5768 8.61148C17.603 8.51108 17.6157 8.43024 17.6198 8.37222C17.6218 8.3431 17.621 8.3208 17.6198 8.30582C17.6183 8.28776 17.6163 8.28833 17.6207 8.29703V8.29605L17.5475 8.14957L17.528 8.10953L17.5446 8.06754L17.6168 7.88492L17.6217 7.87418L17.6676 7.7814C17.8711 7.32427 17.7172 6.97776 17.5426 6.48843V6.48746C17.3664 6.06557 17.1854 5.59068 17.2711 4.97964C16.4298 4.64816 15.5397 4.62589 14.8932 4.93179L14.8893 4.93375C14.4065 5.14084 14.1322 5.48232 13.9928 5.9689L13.9567 6.11343L13.9479 6.15054L13.9156 6.17203L13.8063 6.24332C13.6046 6.38325 13.4913 6.66772 13.4557 7.00601C13.4205 7.34026 13.4645 7.70187 13.5514 7.96304L13.5543 7.96988V7.97086L13.5905 8.11734L13.6002 8.15347L13.5836 8.18668L13.5143 8.32339C13.5113 8.33533 13.508 8.36767 13.5123 8.42398C13.5169 8.48306 13.5301 8.56198 13.5582 8.65933C13.6005 8.80571 13.6757 8.99198 13.8014 9.21207L13.944 9.44351L13.9508 9.45328H13.9498L13.9869 9.52652L13.9977 9.548V9.68179Z"
        fill="white"
        stroke="#DF18FF"
        strokeWidth="0.5"
      />
      <path
        d="M7.22363 4.52124C7.87989 4.52124 8.40008 4.66179 8.81445 4.90601C9.22883 5.1503 9.53199 5.49446 9.75879 5.89136C10.0967 6.48278 10.2696 7.19861 10.3965 7.88843L10.5127 8.56421V8.56519C10.6045 9.15342 10.6949 9.71383 10.8477 10.1814C11.0002 10.648 11.2096 11.0058 11.5273 11.2078L11.8555 11.3894L11.9502 11.4421L11.8906 11.532L11.6699 11.8621C11.153 12.6366 10.0063 13.3593 8.81836 13.7058C9.2264 14.8936 10.2109 15.2405 11.2891 15.6355H11.29C11.9098 15.8543 12.5973 16.0983 13.127 16.5476C13.6634 17.0027 14.0332 17.6634 14.0332 18.7V19.1667H-0.0996094V18.7C-0.0996044 17.6633 0.26994 17.0027 0.811523 16.5476C1.34566 16.0988 2.04121 15.8549 2.67969 15.6365L3.08887 15.4841C4.00038 15.1322 4.79456 14.7126 5.15039 13.7058C3.96318 13.3591 2.81656 12.6371 2.30078 11.863L2.08105 11.533L2.02051 11.4431L2.11523 11.3904L2.43945 11.2107L2.55957 11.1228C2.82242 10.9064 2.97265 10.6081 3.06152 10.2488C3.16393 9.83454 3.1826 9.34991 3.20117 8.83374C3.21952 8.17824 3.23734 7.42617 3.49707 6.77905C3.75845 6.12813 4.26233 5.58715 5.22949 5.33765C5.5379 5.032 6.14614 4.52133 7.22363 4.52124ZM7.22168 5.4519C6.41962 5.4519 6.04074 5.83108 5.78906 6.08276L5.69922 6.17261L5.67676 6.18042L5.56738 6.21655L5.55664 6.22046V6.21948C5.22817 6.29046 4.98107 6.40063 4.79395 6.5437C4.60762 6.68622 4.47571 6.86593 4.38086 7.08374C4.18848 7.52573 4.1504 8.11968 4.13184 8.87476V8.87573C4.11387 9.36866 4.09576 9.9007 3.9834 10.3972C3.87777 10.8638 3.68514 11.3036 3.3291 11.6589C3.88016 12.2061 4.87865 12.7454 5.81055 12.9177H5.81152L6.17871 12.991L6.27637 13.0105L6.25684 13.1082L6.18457 13.4753L6.18359 13.4773C5.95833 14.491 5.47697 15.1354 4.88574 15.5847C4.44573 15.919 3.9458 16.1438 3.4541 16.3357L2.96777 16.5203C2.41229 16.7242 1.92397 16.8937 1.55273 17.1589C1.21374 17.4011 0.975082 17.7232 0.887695 18.2332H13.0781C12.9907 17.7403 12.7532 17.418 12.4141 17.1716C12.1355 16.9693 11.7902 16.8182 11.4014 16.6697L10.999 16.5203C10.3608 16.283 9.65777 16.0305 9.06641 15.5847C8.4704 15.1353 7.98884 14.491 7.78223 13.4763V13.4753L7.70898 13.1082L7.68945 13.0105L7.78809 12.991L8.15527 12.9177H8.15625L8.33887 12.8796C9.21746 12.6745 10.1239 12.1682 10.6387 11.656C10.3147 11.3019 10.1061 10.8555 9.95801 10.3679C9.79984 9.84704 9.70652 9.27183 9.61523 8.70483V8.70386C9.4316 7.65571 9.25967 6.84207 8.91895 6.28882C8.75053 6.01551 8.54204 5.80856 8.27148 5.6687C7.99999 5.52837 7.65935 5.45195 7.22168 5.4519Z"
        fill="white"
        stroke="#DF18FF"
        strokeWidth="0.5"
      />
    </g>

    <defs>
      <linearGradient
        id="gradient1"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#F9D5FD" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

const ActiveUsersIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient2)" />
    <g transform="translate(9, 11) scale(1)">
      <path
        d="M16.9304 16.6199C16.5104 11.5852 10.3814 9.22526 6.77222 12.8728C5.80705 13.8488 5.17083 15.1941 5.04956 16.6199H16.9304ZM15.3523 8.42068C14.8819 9.23857 14.1922 9.91356 13.3601 10.3611C14.5211 10.7743 15.5451 11.487 16.3435 12.4041H19.9548C19.6883 10.0931 17.7194 8.34231 15.3523 8.42068ZM6.64917 8.42068C4.2826 8.34287 2.31414 10.0944 2.04761 12.4041H5.6355C6.4366 11.4818 7.4657 10.7708 8.63159 10.3562C7.80269 9.91069 7.11741 9.23553 6.64917 8.42068ZM10.988 1.98904C8.2419 1.99014 6.2784 4.87742 7.50073 7.53983C8.88154 10.5437 13.118 10.541 14.4988 7.53983C15.6823 4.96699 13.9018 2.02485 10.988 1.98904ZM17.5291 2.22049C16.5822 1.26328 15.1117 1.11123 13.9949 1.82889C15.6081 3.03682 16.3696 5.11262 15.8757 7.11502C18.1941 6.82808 19.211 3.91941 17.5291 2.22049ZM8.00757 1.82791C6.14963 0.627266 3.64057 1.96059 3.64038 4.26053C3.64038 5.71797 4.71215 6.93256 6.12378 7.11307C5.63107 5.1109 6.39435 3.03518 8.00757 1.82791ZM21.1433 12.9812C21.1433 13.3006 20.8847 13.5602 20.5642 13.5603H17.1638C17.7587 14.6096 18.1335 15.9317 18.1335 17.199C18.1335 17.5185 17.8751 17.7781 17.5544 17.7781L4.41577 17.7752H4.40894C4.24286 17.7636 4.10539 17.6931 4.0105 17.5769C3.93584 17.4855 3.89265 17.3705 3.87769 17.243H3.86792V17.1433C3.86792 15.8383 4.2144 14.6162 4.81421 13.5613H1.4353C1.26469 13.5613 1.11878 13.4982 1.01538 13.3836C0.913294 13.2704 0.859542 13.1151 0.856201 12.9402V12.7215C0.896989 10.5383 2.34591 8.51194 4.35718 7.67947C0.995609 5.57299 2.4527 0.222443 6.48218 0.222443C7.45433 0.222512 8.37691 0.578026 9.09546 1.20682C10.3072 0.707385 11.6923 0.707393 12.9041 1.20682C15.4677 -1.03815 19.518 0.795531 19.5183 4.25858C19.5183 5.6745 18.7842 6.95037 17.6394 7.67752C19.76 8.54623 21.1127 10.5777 21.1433 12.9803V12.9812Z"
        fill="white"
        stroke="#5718FF"
        strokeWidth="0.8"
      />
    </g>
    <defs>
      <linearGradient
        id="gradient2"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#E3D5FF" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

const LoansIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient3)" />
    <g transform="translate(10, 10) scale(0.9)">
      <path
        d="M1.96167 0.400011V16.4118H8.31567V15.2118H3.16167V1.60001H9.19987V5.95781H13.3155V9.65381H14.5155V4.92561L10.0881 0.399811L1.96167 0.400011ZM10.3999 2.43601L12.6741 4.75781H10.3999V2.43601Z"
        fill="white"
        stroke="#F55F44"
        strokeWidth="0.8"
      />
      <path
        d="M4.3938 8.35242H11.604V9.55242H4.3938V8.35242Z"
        fill="white"
        stroke="#F55F44"
        strokeWidth="0.8"
      />
      <path
        d="M4.3938 10.9524H8.004V12.1524H4.3938V10.9524Z"
        fill="white"
        stroke="#F55F44"
        strokeWidth="0.8"
      />
      <path
        d="M18.0381 17.9422V12.4C18.0381 10.7719 14.1921 10.7258 13.7537 10.7258C13.3154 10.7258 9.47168 10.7758 9.47168 12.4V17.9796C9.47246 18.0406 9.48262 18.1007 9.50215 18.1577C9.84355 19.5601 13.3381 19.5999 13.7561 19.5999C14.1741 19.5999 17.9561 19.5523 18.0357 17.9741C18.0357 17.9656 18.0381 17.9562 18.0381 17.9421L18.0381 17.9422ZM16.8381 14.1422C16.5998 14.3618 15.4998 14.7203 13.7561 14.7203C12.0115 14.7203 10.9201 14.3617 10.6717 14.15V13.6344C11.8396 14.0602 13.4717 14.0782 13.7561 14.0782C14.0405 14.0782 15.6717 14.0578 16.8405 13.6344L16.8381 14.1422ZM10.6717 15.4758C11.8396 15.9016 13.4717 15.9196 13.7561 15.9196C14.0405 15.9196 15.6717 15.8993 16.8405 15.4758L16.8397 16C16.592 16.2118 15.4999 16.5704 13.7553 16.5704C12.0115 16.5704 10.9201 16.2 10.6717 16L10.6717 15.4758ZM13.7561 11.9298C15.2561 11.9298 16.2741 12.1954 16.6881 12.404C16.274 12.604 15.256 12.8783 13.7561 12.8783C12.2561 12.8783 11.2357 12.6142 10.8241 12.4001C11.2358 12.2001 12.2538 11.9298 13.7561 11.9298ZM10.6717 17.8344V17.318C11.8396 17.7438 13.4717 17.7618 13.7561 17.7618C14.0405 17.7618 15.6717 17.7415 16.8405 17.318V17.8336C16.5897 18.0461 15.4999 18.4 13.7561 18.4C12.0115 18.4 10.9201 18.0461 10.6717 17.8344Z"
        fill="white"
        stroke="#F55F44"
        strokeWidth="0.8"
      />
    </g>
    <defs>
      <linearGradient
        id="gradient3"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f7cac1ff" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

const SavingsIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="40" height="40" rx="20" fill="url(#gradient4)" />
    <g transform="translate(10, 10) scale(0.9)">
      <path
        d="M11.625 -0.0996094C12.9713 -0.099582 14.2046 0.131079 15.1055 0.53418C15.9998 0.934439 16.6006 1.52193 16.6006 2.25C16.6006 2.97807 15.9998 3.56556 15.1055 3.96582C14.2046 4.36892 12.9713 4.59958 11.625 4.59961C10.2789 4.59961 9.04534 4.36898 8.14453 3.96582C7.25029 3.56556 6.65039 2.97807 6.65039 2.25C6.65039 1.52193 7.25029 0.934439 8.14453 0.53418C9.04534 0.131021 10.2789 -0.0996094 11.625 -0.0996094ZM11.625 0.850586C10.486 0.850586 9.467 1.03887 8.73633 1.31641C8.37056 1.45534 8.08125 1.61488 7.88574 1.78027C7.68851 1.9472 7.60059 2.10808 7.60059 2.25C7.60059 2.39192 7.68851 2.5528 7.88574 2.71973C8.08125 2.88512 8.37056 3.04466 8.73633 3.18359C9.467 3.46113 10.486 3.64941 11.625 3.64941C12.7639 3.64939 13.7829 3.46113 14.5137 3.18359C14.8795 3.04466 15.1687 2.88512 15.3643 2.71973C15.5616 2.55277 15.6504 2.39193 15.6504 2.25C15.6504 2.10807 15.5616 1.94723 15.3643 1.78027C15.1687 1.61488 14.8795 1.45534 14.5137 1.31641C13.7829 1.03887 12.7639 0.850612 11.625 0.850586Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M7.60059 2.15039V4.5C7.60059 4.64192 7.68851 4.8028 7.88574 4.96973C8.08125 5.13512 8.37056 5.29466 8.73633 5.43359C9.467 5.71113 10.486 5.89941 11.625 5.89941C12.7639 5.89939 13.7829 5.71112 14.5137 5.43359C14.8795 5.29466 15.1687 5.13512 15.3643 4.96973C15.5616 4.80277 15.6504 4.64193 15.6504 4.5V2.15039H16.6006V4.5C16.6006 5.22807 15.9998 5.81556 15.1055 6.21582C14.2046 6.61892 12.9713 6.84958 11.625 6.84961C10.2789 6.84961 9.04534 6.61898 8.14453 6.21582C7.25029 5.81556 6.65039 5.22807 6.65039 4.5V2.15039H7.60059Z"
        fill="white"
        stroke="#FF3366"
        stroke-width="0.8"
      />
      <path
        d="M16.6006 4.40033V6.74994C16.6006 7.47801 15.9998 8.0655 15.1055 8.46576C14.2046 8.86886 12.9713 9.09952 11.625 9.09955C11.2407 9.09955 10.8653 9.08103 10.5049 9.04486L10.501 8.94525L10.415 8.9472C10.4059 8.56978 10.3994 8.31446 10.3994 8.24994C10.3994 8.23408 10.3987 8.21696 10.3965 8.20013L10.3799 8.07318L10.5068 8.08783C10.8616 8.12817 11.2363 8.14935 11.625 8.14935C12.7639 8.14933 13.7829 7.96106 14.5137 7.68353C14.8795 7.5446 15.1687 7.38506 15.3643 7.21967C15.5616 7.05271 15.6504 6.89187 15.6504 6.74994V4.40033H16.6006ZM7.60059 4.40033V6.74994C7.60059 6.76643 7.60126 6.78284 7.60352 6.79974L7.62012 6.9267L7.49316 6.91205C7.25315 6.88492 7.00295 6.86641 6.74609 6.85736L6.73828 6.85638L6.72949 6.85443L6.65039 6.83881V4.40033H7.60059Z"
        fill="white"
        stroke="#FF3366"
        stroke-width="0.8"
      />
      <path
        d="M16.6006 6.65045V9.00006C16.6006 9.72813 15.9998 10.3156 15.1055 10.7159C14.2046 11.119 12.9713 11.3496 11.625 11.3497C11.2612 11.3497 10.9053 11.3335 10.5625 11.3008L10.3096 11.2764L10.4707 11.1514C10.4642 10.9101 10.458 10.6738 10.4521 10.4464L10.4492 10.3321L10.5635 10.3438C10.9008 10.38 11.2574 10.3995 11.625 10.3995C12.7639 10.3994 13.7829 10.2112 14.5137 9.93365C14.8795 9.79473 15.1687 9.63517 15.3643 9.46979C15.5616 9.30285 15.6504 9.14198 15.6504 9.00006V6.65045H16.6006ZM7.60059 6.65045V6.92389L7.48926 6.91119C7.24972 6.88473 7.00153 6.86653 6.74609 6.85748L6.65039 6.85358V6.65045H7.60059Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M6.37476 6.65039C7.72076 6.65039 8.95444 6.88108 9.85522 7.28418C10.7495 7.68444 11.3503 8.27193 11.3503 9C11.3503 9.72807 10.7495 10.3156 9.85522 10.7158C8.95444 11.1189 7.72076 11.3496 6.37476 11.3496C5.02844 11.3496 3.79508 11.119 2.89429 10.7158C1.99996 10.3156 1.40015 9.72807 1.40015 9C1.40015 8.27193 1.99996 7.68444 2.89429 7.28418C3.79508 6.88105 5.02844 6.65045 6.37476 6.65039ZM6.37476 7.60059C5.23596 7.60064 4.21684 7.7889 3.48608 8.06641C3.12051 8.20526 2.832 8.365 2.63647 8.53027C2.439 8.69728 2.35034 8.85803 2.35034 9C2.35034 9.14196 2.439 9.30272 2.63647 9.46973C2.832 9.635 3.12052 9.79474 3.48608 9.93359C4.21684 10.2111 5.23596 10.3994 6.37476 10.3994C7.51361 10.3994 8.53277 10.2111 9.26343 9.93359C9.6292 9.79466 9.9185 9.63512 10.114 9.46973C10.3113 9.30276 10.4001 9.14195 10.4001 9C10.4001 8.85805 10.3113 8.69724 10.114 8.53027C9.9185 8.36488 9.6292 8.20534 9.26343 8.06641C8.53277 7.78891 7.51361 7.60059 6.37476 7.60059Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M2.35034 8.90039V11.25C2.35034 11.392 2.439 11.5527 2.63647 11.7197C2.832 11.885 3.12052 12.0447 3.48608 12.1836C4.21684 12.4611 5.23596 12.6494 6.37476 12.6494C7.51361 12.6494 8.53277 12.4611 9.26343 12.1836C9.6292 12.0447 9.9185 11.8851 10.114 11.7197C10.3113 11.5528 10.4001 11.392 10.4001 11.25V8.90039H11.3503V11.25C11.3503 11.9781 10.7495 12.5656 9.85522 12.9658C8.95444 13.3689 7.72076 13.5996 6.37476 13.5996C5.02844 13.5996 3.79508 13.369 2.89429 12.9658C1.99996 12.5656 1.40015 11.9781 1.40015 11.25V8.90039H2.35034Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M2.35034 11.1504V13.5C2.35034 13.642 2.439 13.8027 2.63647 13.9697C2.832 14.135 3.12052 14.2947 3.48608 14.4336C4.21684 14.7111 5.23596 14.8994 6.37476 14.8994C7.51361 14.8994 8.53277 14.7111 9.26343 14.4336C9.6292 14.2947 9.9185 14.1351 10.114 13.9697C10.3113 13.8028 10.4001 13.642 10.4001 13.5V11.1504H11.3503V13.5C11.3503 14.2281 10.7495 14.8156 9.85522 15.2158C8.95444 15.6189 7.72076 15.8496 6.37476 15.8496C5.02844 15.8496 3.79508 15.619 2.89429 15.2158C1.99996 14.8156 1.40015 14.2281 1.40015 13.5V11.1504H2.35034Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M2.35034 13.4004V15.75C2.35034 15.892 2.439 16.0527 2.63647 16.2197C2.832 16.385 3.12052 16.5447 3.48608 16.6836C4.21684 16.9611 5.23596 17.1494 6.37476 17.1494C7.51361 17.1494 8.53277 16.9611 9.26343 16.6836C9.6292 16.5447 9.9185 16.3851 10.114 16.2197C10.3113 16.0528 10.4001 15.892 10.4001 15.75V13.4004H11.3503V15.75C11.3503 16.4781 10.7495 17.0656 9.85522 17.4658C8.95444 17.8689 7.72076 18.0996 6.37476 18.0996C5.02844 18.0996 3.79508 17.869 2.89429 17.4658C1.99996 17.0656 1.40015 16.4781 1.40015 15.75V13.4004H2.35034Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M16.6006 8.90042V11.25C16.6006 11.9781 15.9998 12.5656 15.1055 12.9659C14.2046 13.3689 12.9713 13.5996 11.625 13.5996C11.2825 13.5996 10.9474 13.5848 10.623 13.5557L10.5625 13.5508L10.5391 13.4942L10.5322 13.4776V13.459C10.5259 13.2153 10.519 12.961 10.5127 12.7022L10.5098 12.5889L10.6221 12.6006C10.9422 12.6326 11.2782 12.6494 11.625 12.6494C12.7639 12.6494 13.7828 12.4612 14.5137 12.1836C14.8795 12.0447 15.1687 11.8852 15.3643 11.7198C15.5616 11.5528 15.6504 11.392 15.6504 11.25V8.90042H16.6006Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
      <path
        d="M16.6003 11.1504V13.5C16.6003 14.228 16.0003 14.8156 15.1062 15.2158C14.2053 15.619 12.9713 15.8496 11.6248 15.8496C11.3043 15.8496 10.9895 15.8363 10.6853 15.8115L10.6208 15.8066L10.5994 15.7461L10.5935 15.7305V15.7148C10.5907 15.6183 10.5835 15.345 10.573 14.958L10.5691 14.8457L10.6824 14.8555C10.9843 14.884 11.2996 14.8994 11.6248 14.8994C12.7637 14.8994 13.7826 14.7111 14.5134 14.4336C14.8793 14.2947 15.1684 14.1351 15.364 13.9697C15.5614 13.8027 15.6501 13.6419 15.6501 13.5V11.1504H16.6003Z"
        fill="white"
        stroke="#FF3366"
        strokeWidth="0.8"
      />
    </g>
    <defs>
      <linearGradient
        id="gradient4"
        x1="0"
        y1="0"
        x2="40"
        y2="40"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#f9cdd8ff" stopOpacity="1" />
      </linearGradient>
    </defs>
  </svg>
);

const UsersPage = ({ userId, onClose }) => {
  const [showItemsPerPage, setShowItemsPerPage] = useState("10");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [activeFilter, setActiveFilter] = useState(null);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [usersData, setUsersData] = useState([]);
  const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [filterValues, setFilterValues] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });

  const [appliedFilters, setAppliedFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });

  const [inputFilters, setInputFilters] = useState({
    organization: "",
    username: "",
    email: "",
    phoneNumber: "",
    dateJoined: "",
    status: "",
  });
  const debounce = (func, delay) => {
    let timer;
    return function (...args) {
      clearTimeout(timer);
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  };
  const applyFilters = useCallback(() => {
    const filtered = usersData.filter((user) => {
      return (
        (!appliedFilters.organization ||
          user.organization
            .toLowerCase()
            .includes(appliedFilters.organization.toLowerCase())) &&
        (!appliedFilters.username ||
          user.username
            .toLowerCase()
            .includes(appliedFilters.username.toLowerCase())) &&
        (!appliedFilters.email ||
          user.email
            .toLowerCase()
            .includes(appliedFilters.email.toLowerCase())) &&
        (!appliedFilters.phoneNumber ||
          user.phoneNumber.includes(appliedFilters.phoneNumber)) &&
        (!appliedFilters.dateJoined ||
          user.dateJoined.includes(appliedFilters.dateJoined)) &&
        (!appliedFilters.status ||
          user.status.toLowerCase() === appliedFilters.status.toLowerCase())
      );
    });
    setFilteredUsers(filtered);
    setCurrentPage(1);
  }, [appliedFilters, usersData]);
  const debouncedApplyFilters = useCallback(debounce(applyFilters, 500), [
    applyFilters,
  ]);
  useEffect(() => {
    debouncedApplyFilters();
  }, [appliedFilters, debouncedApplyFilters]);

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       const response = await axios.get("http://localhost:3001/users");
  //       setUsersData(response.data);
  //       setFilteredUsers(response.data);
  //       localStorage.setItem("usersList", JSON.stringify(response.data));
  //       setLoading(false);
  //     } catch (err) {
  //       console.error("Error fetching users:", err);
  //       setError("Failed to load users.");
  //       setLoading(false);
  //     }
  //   };
  //   fetchUsers();
  // }, []);

  useEffect(() => {
    setUsersData(mockUsers);
    setFilteredUsers(mockUsers);
    localStorage.setItem("usersList", JSON.stringify(mockUsers));
    setLoading(false);
  }, []);

  // Calculate pagination
  const itemsPerPage = parseInt(showItemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = usersData.slice(indexOfFirstItem, indexOfLastItem);
  //   const totalPages = Math.ceil(usersData.length / itemsPerPage);
  const currentItems =
    filteredUsers.length > 0
      ? filteredUsers.slice(indexOfFirstItem, indexOfLastItem)
      : usersData.slice(indexOfFirstItem, indexOfLastItem);

  const totalPages = Math.ceil(
    (filteredUsers.length > 0 ? filteredUsers.length : usersData.length) /
      itemsPerPage
  );

  if (loading) {
    return <div className="loading">Loading users...</div>;
  }

  const statsCards = [
    {
      icon: UsersIcon,
      title: "USERS",
      value: "2,453",
      className: "users-card",
    },
    {
      icon: ActiveUsersIcon,
      title: "ACTIVE USERS",
      value: "2,453",
      className: "active-users-card",
    },
    {
      icon: LoansIcon,
      title: "USERS WITH LOANS",
      value: "12,453",
      className: "loans-card",
    },
    {
      icon: SavingsIcon,
      title: "USERS WITH SAVINGS",
      value: "102,453",
      className: "savings-card",
    },
  ];

  const handleViewDetails = (user) => {
    localStorage.setItem("selectedUser", JSON.stringify(user));
    navigate(`/users/${user.id}`);
  };

  const handleFilterClick = (column) => {
    setActiveFilter(activeFilter === column ? null : column);
  };

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilterValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleResetFilters = () => {
    const resetFilters = {
      organization: "",
      username: "",
      email: "",
      phoneNumber: "",
      dateJoined: "",
      status: "",
    };
    setInputFilters(resetFilters);
    setAppliedFilters(resetFilters);
    setActiveFilter(null);
  };

  // Replace your current handleFilterChange with this:
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputFilters((prev) => ({ ...prev, [name]: value }));
  };

  // Replace your current handleApplyFilters with this:
  const handleApplyFilters = () => {
    // Only update the applied filters when the Filter button is clicked
    setAppliedFilters(inputFilters);
    setActiveFilter(null);
  };
  //   const FilterPanel = () => (
  //     <div className="filter-panel">
  //       {/* Filter fields same as your original */}
  //       <div className="filter-group">
  //         <label>Organization</label>
  //         <select
  //           name="organization"
  //           value={filterValues.organization}
  //           onChange={handleFilterChange}
  //         >
  //           <option value="">Select</option>
  //           {[...new Set(usersData.map((u) => u.organization))].map((org) => (
  //             <option key={org}>{org}</option>
  //           ))}
  //         </select>
  //       </div>
  //       {/* Username, email, date, phoneNumber, status fields */}
  //       <div className="filter-actions">
  //         <button onClick={handleResetFilters}>Reset</button>
  //         <button onClick={handleApplyFilters}>Filter</button>
  //       </div>
  //     </div>
  //   );

  const FilterPanel = () => (
    <div className="filter-panel">
      <div className="filter-panel-header">
        <h3>Filter</h3>
      </div>

      {/* Organization Field */}
      <div className="filter-group">
        <label>Organization</label>
        <div className="select-wrapper">
          <select
            name="organization"
            value={inputFilters.organization}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            {[...new Set(usersData.map((u) => u.organization))].map((org) => (
              <option key={org} value={org}>
                {org}
              </option>
            ))}
          </select>
          <ChevronDown className="select-icon" />
        </div>
      </div>

      {/* Username Field */}
      <div className="filter-group">
        <label>Username</label>
        <input
          type="text"
          name="username"
          value={inputFilters.username}
          onChange={handleFilterChange}
          placeholder="User"
        />
      </div>

      {/* Email Field */}
      <div className="filter-group">
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={inputFilters.email}
          onChange={handleFilterChange}
          placeholder="Email"
        />
      </div>

      {/* Date Field */}
      <div className="filter-group">
        <label>Date</label>
        <div className="input-wrapper">
          <input
            type="date"
            name="dateJoined"
            value={inputFilters.dateJoined}
            onChange={handleFilterChange}
            placeholder="Date"
          />
          <Calendar className="input-icon" />
        </div>
      </div>

      {/* Phone Number Field */}
      <div className="filter-group">
        <label>Phone Number</label>
        <input
          type="tel"
          name="phoneNumber"
          value={inputFilters.phoneNumber}
          onChange={handleFilterChange}
          placeholder="Phone Number"
        />
      </div>

      {/* Status Field */}
      <div className="filter-group">
        <label>Status</label>
        <div className="select-wrapper">
          <select
            name="status"
            value={inputFilters.status}
            onChange={handleFilterChange}
          >
            <option value="">Select</option>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
            <option value="Pending">Pending</option>
            <option value="Blacklisted">Blacklisted</option>
          </select>
          <ChevronDown className="select-icon" />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="filter-actions">
        <button className="reset-btn" onClick={handleResetFilters}>
          Reset
        </button>
        <button className="filter-btn" onClick={handleApplyFilters}>
          Filter
        </button>
      </div>
    </div>
  );

  const ActionDropdown = ({ isVisible, user }) => (
    <div className={`action-dropdown ${isVisible ? "active" : ""}`}>
      <div className="dropdown-content">
        <button
          className="dropdown-item"
          onClick={() => handleViewDetails(user)}
        >
          <Eye size={14} /> View Details
        </button>
        <button className="dropdown-item" onClick={onClose}>
          <UserX size={14} />
          <span>Blacklist User</span>
        </button>
        <button className="dropdown-item" onClick={onClose}>
          <UserPlus size={14} />
          <span>Activate User</span>
        </button>
      </div>
    </div>
  );

  return (
    <div className="users-page">
      {/* Page Title */}
      <h1 className="page-title">Users</h1>

      {/* Stats Cards */}
      <div className="stats-grid">
        {statsCards.map((card, index) => {
          const IconComponent = card.icon;
          return (
            <div key={index} className={`stat-card ${card.className}`}>
              <div className="stat-icon">
                <IconComponent />
              </div>
              <div className="stat-content">
                <div className="stat-title">{card.title}</div>
                <div className="stat-value">{card.value}</div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Table Container */}
      <div className="table-container">
        <div className="table-wrapper">
          <table className="users-table">
            <thead>
              <tr>
                <th>
                  <div className="header-cell">
                    <span>ORGANIZATION</span>
                    <div
                      className={`filter-container ${
                        activeFilter === "organization" ? "active" : ""
                      }`}
                    >
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "organization" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("organization")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "organization" && (
                        <FilterPanel
                          className={
                            window.innerWidth < 480 ? "left-align" : ""
                          }
                        />
                      )}
                    </div>
                  </div>
                </th>
                {/* Repeat for other columns */}
                <th>
                  <div className="header-cell">
                    <span>USERNAME</span>
                    <div className="filter-container">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "username" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("username")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "username" && <FilterPanel />}
                    </div>
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>EMAIL</span>
                    <div className="filter-container">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "email" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("email")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "email" && <FilterPanel />}
                    </div>
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>PHONE NUMBER</span>
                    <div className="filter-container">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "phoneNumber" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("phoneNumber")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "phoneNumber" && <FilterPanel />}
                    </div>
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>DATE JOINED</span>
                    <div className="filter-container">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "dateJoined" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("dateJoined")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "dateJoined" && <FilterPanel />}
                    </div>
                  </div>
                </th>
                <th>
                  <div className="header-cell">
                    <span>STATUS</span>
                    <div className="filter-container">
                      <svg
                        width="16"
                        height="12"
                        viewBox="0 0 16 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`filter-icon ${
                          activeFilter === "status" ? "active" : ""
                        }`}
                        onClick={() => handleFilterClick("status")}
                      >
                        <path
                          d="M6.22222 11.3333H9.77778V9.55554H6.22222V11.3333ZM0 0.666656V2.44443H16V0.666656H0ZM2.66667 6.88888H13.3333V5.1111H2.66667V6.88888Z"
                          fill="currentColor"
                        />
                      </svg>
                      {activeFilter === "status" && <FilterPanel />}
                    </div>
                  </div>
                </th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {currentItems.map((user, index) => (
                <tr key={user.id || index}>
                  <td>{user.organization}</td>
                  <td>{user.username}</td>
                  <td>{user.email}</td>
                  <td>{user.phoneNumber}</td>
                  <td>{user.dateJoined}</td>
                  <td>
                    <span
                      className={`status-badge status-${user.status.toLowerCase()}`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td>
                    <div className="action-cell">
                      <button
                        className="action-button"
                        onClick={() =>
                          setActiveDropdown(
                            activeDropdown === index ? null : index
                          )
                        }
                      >
                        <MoreVertical size={16} />
                      </button>
                      <ActionDropdown
                        isVisible={activeDropdown === index}
                        onClose={() => setActiveDropdown(null)}
                        user={user}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="pagination-container">
          <div className="pagination-info">
            <span>Showing</span>
            <select
              value={showItemsPerPage}
              onChange={(e) => {
                setShowItemsPerPage(e.target.value);
                setCurrentPage(1); // Reset to first page when changing items per page
              }}
              className="items-select"
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="50">50</option>
              <option value="25">25</option>
              <option value="100">100</option>
            </select>
            {/* <span>out of {usersData.length}</span> */}
            <span>
              out of{" "}
              {filteredUsers.length > 0
                ? filteredUsers.length
                : usersData.length}
            </span>
          </div>

          <div className="pagination-controls">
            <button
              className="pagination-button"
              disabled={currentPage === 1}
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            >
              &lt;
            </button>

            {/* Dynamic pagination numbers */}
            {Array.from({ length: Math.min(5, totalPages) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={pageNum}
                  className={`pagination-button ${
                    currentPage === pageNum ? "active" : ""
                  }`}
                  onClick={() => setCurrentPage(pageNum)}
                >
                  {pageNum}
                </button>
              );
            })}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <span className="pagination-ellipsis">...</span>
            )}

            {totalPages > 5 && currentPage < totalPages - 2 && (
              <button
                className="pagination-button"
                onClick={() => setCurrentPage(totalPages)}
              >
                {totalPages}
              </button>
            )}

            <button
              className="pagination-button"
              disabled={currentPage === totalPages}
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
            >
              &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersPage;
