import { connect } from "react-redux"
import Logs from "../components/Logs"
import { fetchLogs } from "../actions"

export default connect(
    state => ({
        logs: state.logs,
    }),
    dispatch => ({
        fetch: () => dispatch(fetchLogs())
    })
)(Logs)