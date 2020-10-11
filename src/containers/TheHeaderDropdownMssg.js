import React from 'react'
import {
  CBadge,
  CDropdown,
  CDropdownItem,
  CDropdownMenu,
  CDropdownToggle,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import Mynotification from '../components/Mynotification.js'
const TheHeaderDropdownMssg = () => {
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
      direction="down"
    >
      <Mynotification url="https://api.the-v.net/creativelab/members" mname="MEMBERS" color="info"/>
    </CDropdown>
  )
}

export default TheHeaderDropdownMssg