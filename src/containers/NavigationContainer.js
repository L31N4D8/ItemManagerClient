import { connect } from "react-redux"
import Navigation from "../components/Navigation"

export default connect(
    (_, props) => ({
        pathname: props.location.pathname,
    }),
    (_, props) => ({
        onAddItemClick: () => props.history.push("/"),
        onLogClick: () => props.history.push("/log")
    })
)(Navigation)