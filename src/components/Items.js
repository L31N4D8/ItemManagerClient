import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import { groupBy, map } from "lodash"
import ColumnItems from "./ColumnItems"
import styles from "./Grid.css"

const Items = ({ items }) => (
    <Grid fluid>
        <Row>
            { items.length ? (
                map(groupBy(items, "column"), (columnItems, key) => (
                    <Col key={key} xs={12} sm={6} md={4} lg={3} className={styles.clear}>
                        <ColumnItems name={key} items={columnItems} />
                    </Col>
                ) )
            ) : (
                <Col xs={12}>
                    <h3>No items</h3>
                </Col>
            ) }
        </Row>
    </Grid> 
)

export default Items