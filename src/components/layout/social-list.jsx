import { socialIcon } from "../neccessities/icon"

const SocialMedia = [{
    id: 1,
    social_media: "facebook",
    icon: socialIcon.facebookIcon,
},
{
    id: 2,
    social_media: "twitter",
    icon: socialIcon.twitterIcon,
},{
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
    social_media: "Upwork",
    icon: socialIcon.upworkIcon,
}
]

export default  function SocialList() {
return (<div className="flex flex-wrap gap-5 items-center my-2">
    {SocialMedia.map(social => {
        return <div key={social.id} className="flex gap-3 items-center btn border-none btn-outline">
            <img src={social.icon} alt={social.social_media} className="h-8 w-8" />
            <span className="text-md">{social.social_media}</span>
        </div>
    })}
</div>)
}