interface IconProps {
  className: string;
}

export const GridIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 3H11V11H3V3ZM3 13H11V21H3V13ZM13 3H21V11H13V3ZM13 13H21V21H13V13ZM15 5V9H19V5H15ZM15 15V19H19V15H15ZM5 5V9H9V5H5ZM5 15V19H9V15H5Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const ListIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M0 0H18V2H0V0ZM0 7H18V9H0V7ZM0 14H18V16H0V14Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const NotificationIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18 15H20V17H0V15H2V8C2 5.87827 2.84285 3.84344 4.34315 2.34315C5.84344 0.842855 7.87827 0 10 0C12.1217 0 14.1566 0.842855 15.6569 2.34315C17.1571 3.84344 18 5.87827 18 8V15ZM16 15V8C16 6.4087 15.3679 4.88258 14.2426 3.75736C13.1174 2.63214 11.5913 2 10 2C8.4087 2 6.88258 2.63214 5.75736 3.75736C4.63214 4.88258 4 6.4087 4 8V15H16ZM7 19H13V21H7V19Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const PlusIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 14 14"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="currentColor" />
    </svg>
  );
};
export const SearchIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 21 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M16.031 14.617L20.314 18.899L18.899 20.314L14.617 16.031C13.0237 17.3082 11.042 18.0029 9 18C4.032 18 0 13.968 0 9C0 4.032 4.032 0 9 0C13.968 0 18 4.032 18 9C18.0029 11.042 17.3082 13.0237 16.031 14.617ZM14.025 13.875C15.2941 12.5699 16.0029 10.8204 16 9C16 5.132 12.867 2 9 2C5.132 2 2 5.132 2 9C2 12.867 5.132 16 9 16C10.8204 16.0029 12.5699 15.2941 13.875 14.025L14.025 13.875Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const EllipsisHorizontalIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 4"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2 0C0.9 0 0 0.9 0 2C0 3.1 0.9 4 2 4C3.1 4 4 3.1 4 2C4 0.9 3.1 0 2 0ZM16 0C14.9 0 14 0.9 14 2C14 3.1 14.9 4 16 4C17.1 4 18 3.1 18 2C18 0.9 17.1 0 16 0ZM9 0C7.9 0 7 0.9 7 2C7 3.1 7.9 4 9 4C10.1 4 11 3.1 11 2C11 0.9 10.1 0 9 0Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const UserIcon = ({ className }: IconProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="currentColor"
      className={className}
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
      />
    </svg>
  );
};
export const TrashIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5 2V0H15V2H20V4H18V19C18 19.2652 17.8946 19.5196 17.7071 19.7071C17.5196 19.8946 17.2652 20 17 20H3C2.73478 20 2.48043 19.8946 2.29289 19.7071C2.10536 19.5196 2 19.2652 2 19V4H0V2H5ZM4 4V18H16V4H4ZM7 7H9V15H7V7ZM11 7H13V15H11V7Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const EditIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.728 6.68596L11.314 5.27196L2 14.586V16H3.414L12.728 6.68596ZM14.142 5.27196L15.556 3.85796L14.142 2.44396L12.728 3.85796L14.142 5.27196ZM4.242 18H0V13.757L13.435 0.321961C13.6225 0.13449 13.8768 0.0291748 14.142 0.0291748C14.4072 0.0291748 14.6615 0.13449 14.849 0.321961L17.678 3.15096C17.8655 3.33849 17.9708 3.5928 17.9708 3.85796C17.9708 4.12313 17.8655 4.37743 17.678 4.56496L4.243 18H4.242Z"
        fill="currentColor"
      />
    </svg>
  );
};
export const AlarmIcon = ({ className }: IconProps) => {
  return (
    <svg
      className={className}
      viewBox="0 0 22 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M11 20C9.81811 20 8.64779 19.7672 7.55586 19.3149C6.46393 18.8626 5.47178 18.1997 4.63605 17.364C3.80032 16.5282 3.13739 15.5361 2.68509 14.4442C2.2328 13.3522 2.00001 12.1819 2.00001 11C2.00001 9.81811 2.2328 8.64779 2.68509 7.55586C3.13739 6.46393 3.80032 5.47178 4.63605 4.63605C5.47178 3.80032 6.46393 3.13739 7.55586 2.68509C8.64779 2.2328 9.81811 2.00001 11 2.00001C13.387 2.00001 15.6761 2.94822 17.364 4.63605C19.0518 6.32388 20 8.61306 20 11C20 13.387 19.0518 15.6761 17.364 17.364C15.6761 19.0518 13.387 20 11 20ZM11 18C11.9193 18 12.8295 17.819 13.6788 17.4672C14.5281 17.1154 15.2997 16.5998 15.9498 15.9498C16.5998 15.2997 17.1154 14.5281 17.4672 13.6788C17.819 12.8295 18 11.9193 18 11C18 10.0808 17.819 9.1705 17.4672 8.32123C17.1154 7.47195 16.5998 6.70027 15.9498 6.05026C15.2997 5.40025 14.5281 4.88464 13.6788 4.53285C12.8295 4.18107 11.9193 4.00001 11 4.00001C9.14349 4.00001 7.36302 4.73751 6.05026 6.05026C4.73751 7.36302 4.00001 9.14349 4.00001 11C4.00001 12.8565 4.73751 14.637 6.05026 15.9498C7.36302 17.2625 9.14349 18 11 18ZM12 11H15V13H10V6.00001H12V11ZM0.747009 4.28201L4.28201 0.747009L5.69701 2.16101L2.16001 5.69701L0.747009 4.28201ZM17.717 0.747009L21.253 4.28201L19.839 5.69701L16.303 2.16101L17.718 0.747009H17.717Z"
        fill="currentColor"
      />
    </svg>
  );
};
