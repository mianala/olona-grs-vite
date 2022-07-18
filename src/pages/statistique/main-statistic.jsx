
import {useState} from 'react'
import Tabs from './tabs'
import Global from './global'
import Audience from './audience'
const Statistique = () => {
const [view, setView] = useState('global')
const changeView = (new_view) => () => {
  setView(new_view)
}
  return (
  <div>
    <Tabs changeView={changeView} view={view}  />
    <div>
      {view === 'global' ? <Global /> : <Audience />}
    </div>
  </div>
    )
}
export default Statistique
