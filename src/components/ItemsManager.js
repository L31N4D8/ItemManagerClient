import React from "react"
import { Grid, Row, Col } from "react-flexbox-grid"
import AutoFetcher from "./AutoFetcher"
import Form from "../components/Form"
import Items from "../components/Items"
import styles from "./Grid.css"

const ItemsManager = ({ item, column, search, items, columns, fetch, onItemChange, onColumnChange, onSearchChange, onAddItem }) => (
    <AutoFetcher fetch={fetch}>
        <Grid fluid className={styles.clear}>
            <Row>
                <Col xs={12} sm={4} md={3} lg={3} className={styles.marginRight}>
                    <Form
                        item={item}
                        column={column}
                        search={search}
                        columns={columns}
                        onItemChange={onItemChange}
                        onColumnChange={onColumnChange}
                        onSearchChange={onSearchChange}
                        onAddItem={onAddItem}
                        />
                </Col>
                <Col xs className={styles.clear}>
                    <Items items={items} />
                </Col>
            </Row>
        </Grid>
    </AutoFetcher>
)

export default ItemsManager