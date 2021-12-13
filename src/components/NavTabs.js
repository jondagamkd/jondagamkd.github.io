import React from 'react';

// Props are passed through our functional component.
function NavTabs(props) {
  const tabs = ['About', 'Portfolio', 'Contact', 'Resume'];
  return (
    <ul className="flex-row" id="header">
      <h2>
        <a id="c" data-testid="link" href="/">
          John Woodland
        </a>
      </h2>
      {tabs.map(tab => (
        <li className="mx-2 my-5" key={tab}>
          <a
            href={'#' + tab.toLowerCase()}
            // Whenever a tab is clicked on,
            // the current page is set through the handlePageChange props.
            onClick={() => props.handlePageChange(tab)}
            className={
              props.currentPage === tab ? 'nav-link active' : 'nav-link'
            }
          >
            {tab}
          </a>
        </li>
      ))}
    </ul>
  );
}

export default NavTabs;
