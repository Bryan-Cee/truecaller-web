import Message from "@/components/Message";

export default function Home() {
  return (
    <div className="flex flex-row w-full h-full">
      <div className="flex flex-col min-w-[27rem]">
        <div className="flex-row min-h-[4.5rem] h-[4.5rem] search-bar-custom-shadow items-center justify-between rounded-2xl bg-white mx-4 mb-2 flex shadow-[0_1px_12px_#00000026]">
          <button className="hidden">
            <svg
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="text-ink-secondary text-xl"
            >
              <path
                fill="currentColor"
                d="M20 11H7.83l5.59-5.59L12 4l-8 8l8 8l1.41-1.41L7.83 13H20v-2z"
              ></path>
            </svg>
          </button>
          <input
            placeholder="Search or start a new chat"
            className="text-ink-primary text-md placeholder-ink-tertiary block w-full rounded-2xl px-6 font-normal focus:outline-none"
          ></input>
          <button>
            <svg
              fill="currentColor"
              width="31"
              height="31"
              viewBox="0 0 31 31"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M24.3334 0H27V4H31V6.66667H27V10.6667H24.3334V6.66667H20.3334V4H24.3334V0ZM0.333374 17.3333C0.333374 9.96954 6.30291 4 13.6667 4H16.3334V6.66667H13.6667C7.77567 6.66667 3.00004 11.4423 3.00004 17.3333C3.00004 19.6966 3.7674 21.9355 5.16428 23.7755L5.89467 24.7376L5.22887 28H13.6667C19.5577 28 24.3334 23.2244 24.3334 17.3333V14.6667H27V17.3333C27 24.6971 21.0305 30.6667 13.6667 30.6667H1.963L3.04032 25.388C1.29364 23.0872 0.333374 20.2827 0.333374 17.3333ZM9.66671 17.3333C9.66671 18.0697 9.06975 18.6667 8.33337 18.6667C7.59699 18.6667 7.00004 18.0697 7.00004 17.3333C7.00004 16.597 7.59699 16 8.33337 16C9.06975 16 9.66671 16.597 9.66671 17.3333ZM13.6667 18.6667C14.4031 18.6667 15 18.0697 15 17.3333C15 16.597 14.4031 16 13.6667 16C12.9303 16 12.3334 16.597 12.3334 17.3333C12.3334 18.0697 12.9303 18.6667 13.6667 18.6667ZM20.3334 17.3333C20.3334 18.0697 19.7364 18.6667 19 18.6667C18.2637 18.6667 17.6667 18.0697 17.6667 17.3333C17.6667 16.597 18.2637 16 19 16C19.7364 16 20.3334 16.597 20.3334 17.3333Z"
                fill="#212B36"
                fillOpacity="0.75"
              ></path>
            </svg>
          </button>
          <button data-v-213d70ff="" className="mr-1 flex items-center p-3">
            <svg
              data-v-213d70ff=""
              viewBox="0 0 24 24"
              width="1.2em"
              height="1.2em"
              className="text-xl"
            >
              <path
                fill="currentColor"
                d="M12 8c1.1 0 2-.9 2-2s-.9-2-2-2s-2 .9-2 2s.9 2 2 2zm0 2c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2zm0 6c-1.1 0-2 .9-2 2s.9 2 2 2s2-.9 2-2s-.9-2-2-2z"
              ></path>
            </svg>
          </button>
        </div>
        <div className="flex h-full w-full flex-col overflow-y-scroll">
          <div className="flex flex-col">
            {Array(23)
              .fill(1)
              .map((i) => (
                <Message key={i} />
              ))}
          </div>
        </div>
      </div>
      <div className="bg-custom-fill-1 flex-grow rounded-lg p-2 min-w-[33.75rem]">
        <div className="bg-white rounded-md h-full">
          <div className="flex flex-col w-full h-full justify-center items-center">
            <h3 className="font-bold text-4xl py-4">Truecaller for Web</h3>
            <p className="text-center">
              Search or start a new conversation. Get updates for all new
              messages by keeping desktop notifications turned on.
            </p>
            <button className="uppercase font-bold text-lg bg-blue-500 text-white py-4 px-6 rounded-md my-4">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
