export default function Chat() {
  return (
    <>
      <div className="main flex-1 flex flex-col">
        <div className="flex-1 flex h-full">
          <div className="sidebar hidden lg:flex w-1/4 flex-2 flex-col pr-6">
            <div className="hidden lg:block heading flex-2 p-4">
              <h1 className="text-3xl text-gray-700 mb-4">Messages</h1>
            </div>
            <div className="search flex-2 pb-6 px-2">
              <form>
                <label
                  for="default-search"
                  className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
                >
                  Placeholder
                </label>
                <div className="relative">
                  <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                    <svg
                      className="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="default-search"
                    className="block p-4 pl-10 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="Placeholder..."
                    required
                  />
                </div>
              </form>
            </div>
            <div className="flex-1 h-full overflow-auto px-2">
              <div className="cursor-pointer bg-white hover:bg-slate-200 p-4 flex">
                <div className="flex-2">
                  <div className="w-12 h-12 relative">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src="https://placeimg.com/300/300/person"
                      alt="chat-user"
                    />
                    <span className="absolute w-4 h-4 bg-green-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="truncate w-32">
                    <span className="text-gray-800 font-bold">Ryann Remo</span>
                  </div>
                  <div>
                    <small className="text-gray-600">Yea, Sure!</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="chat-area flex-1 flex flex-col">
            <div className="flex-3">
              <h2 className="text-xl py-1 mb-8 border-b-2 border-gray-200">
                <b>Ryann Remo</b>
              </h2>
            </div>
            <div className="messages flex-1 overflow-auto">
              <div className="message mb-4 flex">
                <div className="flex-2">
                  <div className="w-12 h-12 relative">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src="https://placeimg.com/300/300/person"
                      alt="chat-user"
                    />
                    <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>
                      Hey there. We would like to invite you over to our office
                      for a visit. How about it?
                    </span>
                  </div>
                  <div className="pl-4">
                    <small className="text-gray-500">15 April</small>
                  </div>
                </div>
              </div>
              <div className="message mb-4 flex">
                <div className="flex-2">
                  <div className="w-12 h-12 relative">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src="https://placeimg.com/300/300/person"
                      alt="chat-user"
                    />
                    <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>
                      All travel expenses are covered by us of course :D
                    </span>
                  </div>
                  <div className="pl-4">
                    <small className="text-gray-500">15 April</small>
                  </div>
                </div>
              </div>
              <div className="message me mb-4 flex text-right">
                <div className="flex-1 px-2">
                  <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                    <span>It's like a dream come true</span>
                  </div>
                  <div className="pr-4">
                    <small className="text-gray-500">15 April</small>
                  </div>
                </div>
              </div>
              <div className="message me mb-4 flex text-right">
                <div className="flex-1 px-2">
                  <div className="inline-block bg-blue-600 rounded-full p-2 px-6 text-white">
                    <span>I accept. Thank you very much.</span>
                  </div>
                  <div className="pr-4">
                    <small className="text-gray-500">15 April</small>
                  </div>
                </div>
              </div>
              <div className="message mb-4 flex">
                <div className="flex-2">
                  <div className="w-12 h-12 relative">
                    <img
                      className="w-12 h-12 rounded-full mx-auto"
                      src="https://placeimg.com/300/300/person"
                      alt="chat-user"
                    />
                    <span className="absolute w-4 h-4 bg-gray-400 rounded-full right-0 bottom-0 border-2 border-white"></span>
                  </div>
                </div>
                <div className="flex-1 px-2">
                  <div className="inline-block bg-gray-300 rounded-full p-2 px-6 text-gray-700">
                    <span>You are welome. We will stay in touch.</span>
                  </div>
                  <div className="pl-4">
                    <small className="text-gray-500">15 April</small>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex-2 pt-4 pb-10">
              <div className="write bg-white shadow flex rounded-lg">
                <div className="flex-3 flex content-center items-center text-center p-4 pr-0">
                  <span className="block text-center text-gray-400 hover:text-gray-800">
                    <svg
                      fill="none"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="h-6 w-6"
                    >
                      <path d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                    </svg>
                  </span>
                </div>
                <div className="flex-1">
                  <textarea
                    name="message"
                    className="w-full block outline-none py-4 px-4 bg-transparent"
                    rows="1"
                    placeholder="Type a message..."
                    autofocus
                  ></textarea>
                </div>
                <div className="flex-2 w-32 p-2 flex content-center items-center">
                  <div className="flex-1 text-center">
                    <span className="text-gray-400 hover:text-gray-800">
                      <span className="inline-block align-text-bottom">
                        <svg
                          fill="none"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          className="w-6 h-6"
                        >
                          <path d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"></path>
                        </svg>
                      </span>
                    </span>
                  </div>
                  <div className="flex-1">
                    <button className="bg-blue-400 w-10 h-10 rounded-full inline-block">
                      <span className="inline-block align-text-bottom">
                        <svg
                          fill="none"
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          viewBox="0 0 24 24"
                          className="w-4 h-4 text-white"
                        >
                          <path d="M5 13l4 4L19 7"></path>
                        </svg>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
