import React from 'react'
import { Link } from 'react-router-dom'

import SearchForm from '../../containers/SearchFormContainer'
import ToggleMenuButton from './ToggleMenuButton'

export default ({ searchText, actions, uiActions, ui, location }) => (
  <div id="header">
    <ToggleMenuButton
      actions={actions}
    />
    <div className="container">
      <div className="header-row">
        <div className="col-1">
          <Link to={'/'} className="link-logo" >
            <img src="/svg/bestofjs.svg" width="160" alt="bestof.js.org" />
          </Link>
        </div>
        <div className="col-2">
          <SearchForm
            searchText={searchText}
            location={location}
          />
        </div>
      </div>
    </div>
  </div>
)
