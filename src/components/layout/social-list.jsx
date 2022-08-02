import { socialIcon } from "../neccessities/icon"
import { BsFilterSquare } from "react-icons/bs"

const SocialMedias = [
  {
    id: 1,
    social_media: "Facebook",
    icon: socialIcon.facebookIcon,
  },
  {
    id: 2,
    social_media: "Twitter",
    icon: socialIcon.twitterIcon,
  },
  {
    id: 3,
    social_media: "Youtube",
    icon: socialIcon.youtubeIcon,
  },
  {
    id: 5,
    social_media: "Linkedin",
    icon: socialIcon.linkedinIcon,
  },
  {
    id: 6,
    social_media: "Pinterest",
    icon: socialIcon.pinterestIcon,
  },
]

export default function SocialList() {
  return (
    <div className="flex flex-wrap gap-1 items-center my-2 mb-5">
      <div
        key={0}
        className="flex gap-1 items-center btn border-none btn-outline"
      >
        <BsFilterSquare className="h-6 w-6" />
        <span className="text-md">Tous</span>
      </div>
      {SocialMedias.map((social) => {
        return (
          <div
            key={social.id}
            className="flex gap-1 items-center btn border-none btn-outline"
          >
            <img
              src={social.icon}
              alt={social.social_media}
              className="h-6 w-6"
            />
            <span className="text-md">{social.social_media}</span>
          </div>
        )
      })}
    </div>
  )
}
