import React from "react"
import { List, ListItem, ListSubHeader } from "react-toolbox/lib/list"
import { map } from "lodash"
import moment from "moment"
import AutoFetcher from "./AutoFetcher"
import styles from "./List.css"

const Logs = ({ logs, fetch }) => (
    <AutoFetcher fetch={fetch}>
        <List className={styles.list}>
            <ListSubHeader caption="Logs" />
            { map(logs, (log, index) => <ListItem key={index} caption={log.msg} legend={moment(log.date).from(moment())} /> ) }
        </List>
    </AutoFetcher>
)

export default Logs