import TableHeader from "./table-header"
import TableContent from "./table-content"
import { useState } from "react"
import {MdOfflineBolt} from "react-icons/md"
import {BsFillPersonLinesFill} from "react-icons/bs"
import {BiCommentDetail} from "react-icons/bi"
import {RiShareForwardLine} from "react-icons/ri"
const posts = [{
    userId: 1,
    id: 1,
    title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
    body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
    },
    {
    userId: 1,
    id: 2,
    title: "qui est esse",
    body: "est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla"
    },
    {
    userId: 1,
    id: 3,
    title: "ea molestias quasi exercitationem repellat qui ipsa sit aut",
    body: "et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut"
    },
    {
    userId: 1,
    id: 4,
    title: "eum et est occaecati",
    body: "ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit"
    },
    {
    userId: 1,
    id: 5,
    title: "nesciunt quas odio",
    body: "repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque"
    },
    {
    userId: 1,
    id: 6,
    title: "dolorem eum magni eos aperiam quia",
    body: "ut aspernatur corporis harum nihil quis provident sequi\nmollitia nobis aliquid molestiae\nperspiciatis et ea nemo ab reprehenderit accusantium quas\nvoluptate dolores velit et doloremque molestiae"
    },
    {
    userId: 1,
    id: 7,
    title: "magnam facilis autem",
    body: "dolore placeat quibusdam ea quo vitae\nmagni quis enim qui quis quo nemo aut saepe\nquidem repellat excepturi ut quia\nsunt ut sequi eos ea sed quas"
    },
    {
    userId: 1,
    id: 8,
    title: "dolorem dolore est ipsam",
    body: "dignissimos aperiam dolorem qui eum\nfacilis quibusdam animi sint suscipit qui sint possimus cum\nquaerat magni maiores excepturi\nipsam ut commodi dolor voluptatum modi aut vitae"
    },
    {
    userId: 1,
    id: 9,
    title: "nesciunt iure omnis dolorem tempora et accusantium",
    body: "consectetur animi nesciunt iure dolore\nenim quia ad\nveniam autem ut quam aut nobis\net est aut quod aut provident voluptas autem voluptas"
    },
    {
    userId: 1,
    id: 10,
    title: "optio molestias id quia eum",
    body: "quo et expedita modi cum officia vel magni\ndoloribus qui repudiandae\nvero nisi sit\nquos veniam quod sed accusamus veritatis error"
    },
    {
    "userId": 2,
    "id": 11,
    "title": "et ea vero quia laudantium autem",
    "body": "delectus reiciendis molestiae occaecati non minima eveniet qui voluptatibus\naccusamus in eum beatae sit\nvel qui neque voluptates ut commodi qui incidunt\nut animi commodi"
    },
    {
    "userId": 2,
    "id": 12,
    "title": "in quibusdam tempore odit est dolorem",
    "body": "itaque id aut magnam\npraesentium quia et ea odit et ea voluptas et\nsapiente quia nihil amet occaecati quia id voluptatem\nincidunt ea est distinctio odio"
    },]
const PostTabel = () => {
    const [open, setOpen] = useState(false)
    const [selected, setSelected] = useState(null)
    const changeState = (changing) => () => {
        if (changing === false) {
            setOpen(false)
            return
        }
        setOpen(true)
        setSelected(changing)
    }
    
    return (<>
    <div className="overflow-x-auto w-full">
    <table className="table w-full">
        <TableHeader />
        <tbody>
            {posts.map(({id, title, body}) => <TableContent key={id} title={title} body={body} showModal={changeState} id={id} />)}
        </tbody>
    </table>
    
</div>
<input type="checkbox" id="my-modal" className="modal-toggle" checked={open} readOnly/>
        <div className="modal">
        <div className="modal-box relative md:w-11/12 md:max-w-5xl md:grid md:grid-cols-2 ">
        <button className="btn btn-sm btn-circle absolute right-2 top-2" onClick={changeState(false)}>✕</button>
            <div>

        <div className="flex items-center space-x-3">
            <div className="avatar">
              <div className="mask mask-squircle w-12 h-12">
                <img src="http://placeimg.com/100/100/person" alt="Avatar Tailwind CSS Component" />
              </div>
            </div>
            <div>
              <div className="font-bold">Hart Hagerty</div>
              <div className="text-sm opacity-50">publie le {
                new Date().toLocaleString('fr', {
                    weekday: 'long',
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                })
}</div>
            </div>
    <p className="text-primary font-bold underline">{selected?.title}</p>
          </div>
            <p className="py-4">{selected?.body}</p>
            <div className="w-full">
                <img src="http://placeimg.com/1000/500/person" className="rounded-md" alt="Avatar Tailwind CSS Component" />
              </div>
              <section className="grid place-items-center bg-gray-300 my-3 py-3 rounded-md">
<h3>Espace astuces</h3>
</section>
              <section className="flex flex-wrap items-center justify-between my-3">
		
			<div className="flex flex-col justify-center align-middle">
				<p className="text-xl font-semibold leading-none">200</p>
				<p className="capitalize">Like</p>
			</div>
	
			<div className="flex flex-col justify-center align-middle">
				<p className="text-xl font-semibold leading-none">7500</p>
				<p className="capitalize">Interation
                </p>
			</div>
        <button className="btn btn-info">Boost <MdOfflineBolt className="w-6 h-6 ml-1"/></button>

		
</section>

<div className="flex items-center justify-between">
    <button className="btn gap-2 btn-outline border-none rounded-none">
        <BiCommentDetail className="w-5 h-5" />
        Commenter</button>
        <div className="tooltip" data-tip="partager dans un groupe">
    <button className="btn gap-2 btn-outline border-none rounded-none">
    <RiShareForwardLine className="w-5 h-5" />
        Partage
        </button>
</div>
        <div className="tooltip" data-tip="Reatribuer">

    <button className="btn m-1 btn-outline border-none">
  <BsFillPersonLinesFill className="w-5 h-5" />
  </button>
        </div>
    
</div>
            
            </div>
            <div className="px-2">
                <h3 className="text-lg font-bold">Performences de votre publication</h3>
                <div className="divider m-1"></div>
                <div className="flex gap-2 px-2">
				<p className="text-xl font-semibold leading-none">189</p>
				<p className="capitalize">Personne touchée</p>
			</div>
                <div className="divider m-1">
                </div>
                <div className="flex gap-2 px-2">
				<p className="text-xl font-semibold leading-none">1</p>
				<p className="capitalize">Mention j' aime, commentaire et pargtages</p>
			</div>
<div className="flex flex-col my-2 gap-1">
   {[{id: 1, name: "mention j'aime", stats: [12, 5, 7]}, {id: 2, name: "Commentaires", stats: [6, 3, 3]},
    {id: 3, name: "partages", stats: [3, 1,2]}].map(({id, name, stats}) => <div className="flex gap-2" key={id}>
        <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">{name}</p>
			</div>
            <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur la publication</p>
			</div>
            <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur les partages</p>
			</div>
    </div>
    )}
</div>
<div className="divider m-1" />

<div className="flex gap-2 px-2">
				<p className="text-xl font-semibold leading-none">189</p>
				<p className="capitalize">Personne touchée</p>
			</div>
<div className="divider m-1" />

            <div className="flex gap-2">
        <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-1">
				<p className="text-lg font-semibold leading-none">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Photos</p>
			</div>
            <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur la publication</p>
			</div>
            <div className="flex w-1/3 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur les partages</p>
			</div>
    </div>
    <div className="divider m-1" />
    <h3 className="text-lg font-bold">Commentaire negatifs</h3>
    <div className="flex gap-2">
        <div className="flex w-1/2 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Masquer publication</p>
			</div>
            <div className="flex w-1/2 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur la publication</p>
			</div>
            
    </div>
    <div className="flex gap-2">
        <div className="flex w-1/2 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">signaler comme indesirable</p>
			</div>
            <div className="flex w-1/2 bg-slate-200 flex-col justify-center align-middle p-2">
				<p className="text-lg font-semibold leading-none ">{Math.floor(Math.random()*100)}</p>
				<p className="capitalize text-blue-800">Sur la publication</p>
			</div>
            
    </div>
            </div>
            
            
        </div>
    </div>
    </>
)
}
export default PostTabel