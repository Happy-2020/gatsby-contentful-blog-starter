import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `rebeccapurple`,
      marginBottom: `1.45rem`,
    }}
  >
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </div>
  </header>
  // <header>
  //   <div class="container-fluid">
  //     <div class="row">
  //         <div class="col-lg-3 logo_section">
  //           <div class="full">
  //               <div class="center-desk">
                 
  //               </div>
  //           </div>
  //         </div>
  //         <div class="col-lg-9">
  //           <div class="menu-area">
  //               <div class="limit-box">

  //               </div>
  //           </div>
  //         </div>
  //     </div>
  //   </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
