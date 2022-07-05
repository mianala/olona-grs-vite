export const BasicNotification = ({ type, content }) => {
  return (
    <div className={`alert alert-${type} shadow-lg`}>
      <div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="stroke-current flex-shrink-0 h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeLidth="2"
            d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <span>{content}</span>
      </div>
    </div>
  )
}
export const ComplexNotification = ({ type, content, child }) => {
  return <>{child}</>
}
