import PropType from 'prop-types';

import Navbar from "../components/navbar"

const AdminLayout = ({ children }) => {
  return (
    <div>
        <Navbar />
        { children }
    </div>
  )
}

AdminLayout.propTypes = {
  children: PropType.node.isRequired
}

export default AdminLayout