import NavMenu from './NavMenu'
import ScrollToTop from "react-scroll-to-top"

const RootComponents = (props) => {
  return (
    <>
      <ScrollToTop smooth/>
      <NavMenu/>
      {props.children}
    </>
  )
}

export default RootComponents