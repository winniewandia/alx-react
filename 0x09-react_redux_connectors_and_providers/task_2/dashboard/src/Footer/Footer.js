import React, {useContext} from 'react';
import './Footer.css';
import { getFullYear, getFooterCopy } from '../utils/utils';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

export function Footer({ user }) {
  return (
    <div className="App">
      <div className='App-footer'>
        <footer>
        {user && (
          <p>
            <a href='#'>Contact us</a>
          </p>
        )}
        <p>Copyright {getFullYear()} - {getFooterCopy(true)}</p>
        </footer>
      </div>
    </div>
  );
}

Footer.defaultProps = {
  user: null,
};

Footer.propTypes = {
  user: PropTypes.object,
};

const mapStateToProps = (state) => {
  return {
    user: state.get('user'),
  };
};

export default connect(mapStateToProps, null)(Footer);
