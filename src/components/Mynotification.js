import React, { } from 'react'
import { withRouter } from 'react-router-dom';
import {
  CDropdownItem,CDropdownMenu,CDropdownToggle,CBadge
} from '@coreui/react'
import CIcon from '@coreui/icons-react'

import Myloading from './Myloading.js'
//REUSABLE COMPONENT
class Mynotification extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          users : [],
            showLoading : false
        };
        
      }
      myData()
      {
        this.setState({showLoading: true  });
          fetch(this.props.url)
          .then(response => response.json())
          .then(
            json => this.setState({users: json}),
            this.timeout = setTimeout(() => {
              this.setState({showLoading: false  });
            }, 500)
          )
      }
      componentDidMount() {
        //wait 500 miliseconds
        setTimeout(() => {
          this.myData();
        }, 500);
        //wait 500 miliseconds
        setInterval(() => {
          this.myData();
        }, 120000);
        
      }
      render() {
        return <>
         <CDropdownToggle className="c-header-nav-link" caret={false}>
          <CIcon name="cil-bell"/>
          <CBadge shape="pill" color={this.props.color}>{this.state.users.length} </CBadge>
        </CDropdownToggle>
          <CDropdownMenu  placement="bottom-end" className="pt-0">
          {
            this.state.users.length == 0
              ? <CDropdownItem   key="1"> NO {this.props.mname} </CDropdownItem> 
              : this.state.users.map(user => (
                <CDropdownItem href="#" key={user.id}>
                  <div className="message">
                    <div>
                      <small className="text-muted">{user.name}</small>
                      <small className="text-muted float-right mt-1"></small>
                    </div>
                    <div className="text-truncate font-weight-bold">{user.activity}</div>
                    <div className="small text-muted text-truncate">{user.createdon}
                    </div>
                  </div>
                </CDropdownItem>
              ))
          }
          <CDropdownItem
            header tag="div"
            className="text-center" color="light">
            <strong>You have {this.state.users.length} notifications</strong>
          </CDropdownItem>
        </CDropdownMenu>
        </>;
      }
  }


  export default Mynotification