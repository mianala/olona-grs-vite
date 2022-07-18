import TableHeader from "./table-header"
import TableContent from "./table-content"
const posts = [{
    title: ""
}]
const PostTabel = () => {
    return (<div className="overflow-x-auto w-full">
    <table className="table w-full">
        <TableHeader />
        <TableContent />
    </table>
</div>)
}
export default PostTabel