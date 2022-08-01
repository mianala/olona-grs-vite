
import {useState} from 'react'
import Tabs from './tabs'
import Global from './global-stats/global'
import Audience from './audience/audience'
import SocialList from '../../components/layout/social-list'

const Statistique = () => {
const [view, setView] = useState('global')
const changeView = (new_view) => () => {
  setView(new_view)
}
  return (
  <div>
    
    <Tabs changeView={changeView} view={view}  />
    <SocialList />
    <div className='mb-5'>
      {view === 'global' ? <Global /> : <Audience />}
    </div>
  </div>
    )
}
export default Statistique
