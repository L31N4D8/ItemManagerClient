import { Component } from "react"

export default class AutoFetcher extends Component {
    componentWillMount() {
        this.props.fetch && this.props.fetch()
        this.interval = setInterval(() => this.props.fetch && this.props.fetch(), 60000)
    }
    componentWillUnmount() {
        clearInterval(this.interval)
        this.interval = null
    }
    render() {
        return this.props.children
    }
}