import PropType from 'prop-types';

const AuthLayout = ({ children }) => {
  return (
    <div>
        { children }
    </div>
  )
}

AuthLayout.propTypes = {
  children: PropType.node.isRequired
}

export default AuthLayout