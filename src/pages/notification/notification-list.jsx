import { FiMoreVertical } from "react-icons/fi"
import notifications from "../../assets/fakedata/notifications.json"
import SocialList from "../../components/layout/social-list"

export default function NotificationList() {
  const parseDate = (input) => {
    return new Date(input).toISOString().split("T")[0]
  }
  return (
    <div className="mx-3 flex-col gap-5 flex">
      <div className="flex justify-between">
        <span>Liste des notifications</span>
        <FiMoreVertical />
      </div>
      <hr />
      <SocialList />
      <div className="flex gap-3">
        <div className="badge badge-primary">Tous</div>
        <div className="badge badge-ghost">non lus</div>
      </div>
      <div className="flex flex-col gap-3 px-5">
        {notifications.map((notification, index) => (
          <div key={index} className="flex items-center gap-2">
            <div className="w-12 h-12 relative">
              <img
                className="w-12 h-12 rounded-full mx-auto"
                src={notification.avatar}
                alt="user-avatar"
              />
              <span
                className={`absolute w-4 h-4 ${
                  notification.unread ? "bg-green-400" : "bg-gray-400"
                }   rounded-full right-0 bottom-0 border-2 border-white`}
              ></span>
            </div>
            <div className="flex flex-col">
              <div>
                <span className="font-bold">{notification.full_name}</span>{" "}
                {(notification.user_action == "Liked") |
                (notification.user_action == "Following") ? (
                  <>
                    <span>{notification.user_action}</span>
                    {" your"}{" "}
                  </>
                ) : (
                  <>
                    <span>{notification.user_action}</span>
                    {" to your"}{" "}
                  </>
                )}
                <span className="font-semibold italic">
                  {notification.cible}
                </span>
                {" on "}
                <span className="">{notification.platform}</span>
              </div>
              <div className="italic font-medium">"{notification.text}"</div>
              <div>{parseDate(notification.duration)}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
