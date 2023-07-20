const ChevronDownIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}

const ShareIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M10.1141,4.49112 L9.91063,7.63542 L9.891,8.05196 L9.8012,8.06134 C5.36297,8.583 2,12.3671 2,17 C2,17.457 2.03414,17.91 2.10168,18.3565 C2.38094,20.2022 2.59088,20.3807 3.87391,18.8547 C4.18977,18.479 4.54227,18.1439 4.91368,17.8247 C6.24977,16.7224 7.90632,16.0786 9.66842,16.0067 L9.894,16.002 L9.95549,17.2308 L10.1215,19.576 C10.2008,20.38 11.0467,20.9293 11.8253,20.4902 C12.1766,20.2919 12.52,20.0809 12.8641,19.8706 C14.652,18.7519 16.3249,17.4666 17.9553,16.1321 C18.9147,15.3326 19.7558,14.5744 20.4714,13.8844 C20.8007,13.5606 21.1304,13.2376 21.4496,12.9037 C21.9118,12.42 21.9575,11.6189 21.4737,11.1124 C20.3603,9.94706 18.7862,8.48751 16.8271,6.94049 C15.2394,5.69825 13.597,4.53773 11.8571,3.51856 C11.0203,3.04172 10.1902,3.69599 10.1141,4.49112 Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}

const InviteIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M9.5 0C12.5376 0 15 2.46243 15 5.5C15 8.5376 12.5376 11 9.5 11C6.46243 11 4 8.5376 4 5.5C4 2.46243 6.46243 0 9.5 0zM0.949967 20C0.425315 20 0 19.613 0 19.1357V17.3215C0 14.9348 2.12657 13 4.74983 13H14.2502C16.8734 13 19 14.9348 19 17.3215V19.1357C19 19.613 18.5747 20 18.05 20H0.949967zM21.5 7C21.5 6.44772 21.0523 6 20.5 6C19.9477 6 19.5 6.44772 19.5 7V8.5H18C17.4477 8.5 17 8.9477 17 9.5C17 10.0523 17.4477 10.5 18 10.5H19.5V12C19.5 12.5523 19.9477 13 20.5 13C21.0523 13 21.5 12.5523 21.5 12V10.5H23C23.5523 10.5 24 10.0523 24 9.5C24 8.9477 23.5523 8.5 23 8.5H21.5V7z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}

const SaveWorkspaceIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M5 0V7C5 7.55228 5.44772 8 6 8H16C16.5523 8 17 7.55228 17 7V0H18L22 5V21C22 22.6569 20.6569 24 19 24H3C1.34315 24 0 22.6569 0 21V3C0 1.34315 1.34315 0 3 0H5zM7 0H15V6H7V0zM6.2 15H15.8C16.4627 15 17 14.5523 17 14C17 13.4477 16.4627 13 15.8 13H6.2C5.53726 13 5 13.4477 5 14C5 14.5523 5.53726 15 6.2 15zM6.2 19H15.8C16.4627 19 17 18.5523 17 18C17 17.4477 16.4627 17 15.8 17H6.2C5.53726 17 5 17.4477 5 18C5 18.5523 5.53726 19 6.2 19z" fill="#0072F5"/>
    </svg>
  )
}

const MyWorkspaceIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}

const FriendsIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      data-name="Iconly/Curved/Activity"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        fill="transparent"
        d="M8.03 4.46c-.29 1.28.55 3.46 1.97 3.46 1.41 0 2.25-2.18 1.96-3.46-.22-.98-1.08-1.63-1.96-1.63-.89 0-1.74.65-1.97 1.63zm-4.13.9c-.25 1.08.47 2.93 1.67 2.93s1.92-1.85 1.67-2.93c-.19-.83-.92-1.39-1.67-1.39s-1.48.56-1.67 1.39zm8.86 0c-.25 1.08.47 2.93 1.66 2.93 1.2 0 1.92-1.85 1.67-2.93-.19-.83-.92-1.39-1.67-1.39-.74 0-1.47.56-1.66 1.39zm-.59 11.43l1.25-4.3C14.2 10 12.71 8.47 10 8.47c-2.72 0-4.21 1.53-3.44 4.02l1.26 4.3C8.05 17.51 9 18 10 18c.98 0 1.94-.49 2.17-1.21zm-6.1-7.63c-.49.67-.96 1.83-.42 3.59l1.12 3.79c-.34.2-.77.31-1.2.31-.85 0-1.65-.41-1.85-1.03l-1.07-3.65c-.65-2.11.61-3.4 2.92-3.4.27 0 .54.02.79.06-.1.1-.2.22-.29.33zm8.35-.39c2.31 0 3.58 1.29 2.92 3.4l-1.07 3.65c-.2.62-1 1.03-1.85 1.03-.43 0-.86-.11-1.2-.31l1.11-3.77c.55-1.78.08-2.94-.42-3.61-.08-.11-.18-.23-.28-.33.25-.04.51-.06.79-.06z"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  )
}

const ProfileIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 22.01C17.5228 22.01 22 17.5329 22 12.01C22 6.48716 17.5228 2.01001 12 2.01001C6.47715 2.01001 2 6.48716 2 12.01C2 17.5329 6.47715 22.01 12 22.01Z"
        fill="#292D32"
        opacity="0.4"
      />
      <path
        d="M12 6.93994C9.93 6.93994 8.25 8.61994 8.25 10.6899C8.25 12.7199 9.84 14.3699 11.95 14.4299C11.98 14.4299 12.02 14.4299 12.04 14.4299C12.06 14.4299 12.09 14.4299 12.11 14.4299C12.12 14.4299 12.13 14.4299 12.13 14.4299C14.15 14.3599 15.74 12.7199 15.75 10.6899C15.75 8.61994 14.07 6.93994 12 6.93994Z"
        fill="#292D32"
      />
      <path
        d="M18.7807 19.36C17.0007 21 14.6207 22.01 12.0007 22.01C9.3807 22.01 7.0007 21 5.2207 19.36C5.4607 18.45 6.1107 17.62 7.0607 16.98C9.7907 15.16 14.2307 15.16 16.9407 16.98C17.9007 17.62 18.5407 18.45 18.7807 19.36Z"
        fill="#292D32"
      />
    </svg>
  )
}

const CopyIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#000"/>
      <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#000"/>
    </svg>
  )
}

const CopiedIcon = ({ fill, size, width = 24, height = 24, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height}
      viewBox="0 0 24 24"
      width={size || width}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M16 12.9V17.1C16 20.6 14.6 22 11.1 22H6.9C3.4 22 2 20.6 2 17.1V12.9C2 9.4 3.4 8 6.9 8H11.1C14.6 8 16 9.4 16 12.9Z" fill="#0072F5"/>
      <path d="M17.0998 2H12.8998C9.81668 2 8.37074 3.09409 8.06951 5.73901C8.00649 6.29235 8.46476 6.75 9.02167 6.75H11.0998C15.2998 6.75 17.2498 8.7 17.2498 12.9V14.9781C17.2498 15.535 17.7074 15.9933 18.2608 15.9303C20.9057 15.629 21.9998 14.1831 21.9998 11.1V6.9C21.9998 3.4 20.5998 2 17.0998 2Z" fill="#0072F5"/>
    </svg>
  )
}

export const icons = {
  chevron:       <ChevronDownIcon   fill="currentColor"                   size={16} />,
  profile:       <ProfileIcon       fill="var(--nextui-colors-warning)"   size={25} />,
  friends:       <FriendsIcon       fill="var(--nextui-colors-secondary)" size={25} />,
  myworkspace:   <MyWorkspaceIcon   fill="#023A46"                        size={25} />,
  saveworkspace: <SaveWorkspaceIcon fill="#023A46"                        size={20} />,
  invite:        <InviteIcon        fill="#F5A524"                        size={25} />,
  share:         <ShareIcon         fill="var(--nextui-colors-success)"   size={25} />,
  copy:          <CopyIcon          fill="var(--nextui-colors-success)"   size={25} />,
  copied:        <CopiedIcon        fill="var(--nextui-colors-success)"   size={25} />,
}