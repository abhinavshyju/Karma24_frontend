import { Link } from "react-router-dom";

const ForumComp = ({ id, title, discription, time, user }) => {
  return (
    <Link
      to={`/forum-in/${id}`}
      className="grid grid-cols-6 border-t-2  border-b-2 py-3 border-gray-500 w-full "
    >
      <div className="flex flex-col col-span-5 ">
        <div className="flex items-center gap-2">
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            height="1.5em"
            width="1.5em"
          >
            <path d="M4 2a2 2 0 00-2 2v12a2 2 0 002 2h4v3a1 1 0 001 1h.5c.25 0 .5-.1.7-.29L13.9 18H20a2 2 0 002-2V4a2 2 0 00-2-2H4m0 2h16v12h-6.92L10 19.08V16H4V4m8.19 1.5c-.89 0-1.6.18-2.14.54-.55.36-.83.96-.78 1.65h1.97c0-.28.1-.49.26-.63.2-.14.42-.21.69-.21.31 0 .58.08.76.26.18.17.27.39.27.69 0 .28-.08.53-.22.74-.17.22-.38.4-.64.54-.52.32-.86.6-1.07.84-.19.24-.29.58-.29 1.08h2c0-.28.05-.5.14-.68.09-.17.26-.32.52-.47.46-.21.84-.49 1.13-.85.29-.37.44-.76.44-1.2 0-.7-.27-1.26-.81-1.68-.54-.41-1.29-.62-2.23-.62M11 12v2h2v-2h-2z" />
          </svg>
          <p className="font-bold text-xl mb-2">{title}</p>
        </div>
        <p className="text-sm">{discription}</p>
      </div>
      <div className="flex flex-col  text-right text-sm">
        <p>{time}</p>
        <p>Created by {user}</p>
      </div>
    </Link>
  );
};

export default ForumComp;
