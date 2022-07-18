import Resume from "./resume"
import { FcIdea} from 'react-icons/fc'
import PostTabel from "./table-posts"
const Global = () => {
    
  return (
    <div>
        <Resume />
        <Notice />
        <PostTabel />
    </div>
  )
}
export default Global


























function Notice() {
    return (
    <div className="container py-3 flex flex-wrap">
              <div className="flex flex-wrap">
              
                  <div className="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col">
                  <div className="sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0">
                      <FcIdea className="w-16 h-16" />
                  </div>
                  <div className="flex-grow">
                      <h2 className="text-gray-900 text-lg title-font font-medium mb-3">Les Resultats publicataires ont ete deplace</h2>
                      <p className="leading-relaxed text-base">Blue bottle crucifix vinyl post-ironic four dollar toast vegan taxidermy. Gastropub indxgo juice poutine.</p>
                      <a className="mt-3 text-indigo-500 inline-flex items-center">Learn More
                      <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
                          <path d="M5 12h14M12 5l7 7-7 7"></path>
                      </svg>
                      </a>
                  </div>
                  </div>
              </div>
          </div>);
  }