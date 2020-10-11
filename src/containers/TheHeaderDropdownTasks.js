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
const TheHeaderDropdownTasks = () => {
  const itemsCount = 0
  return (
    <CDropdown
      inNav
      className="c-header-nav-item mx-2"
    >
      <Mynotification url="https://api.the-v.net/creativelab/maintenance" mname="MAINTENANCE" color="warning"/>
    </CDropdown>
  )
}

export default TheHeaderDropdownTasks