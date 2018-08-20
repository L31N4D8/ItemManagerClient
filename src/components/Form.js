import React from "react"
import Input from "react-toolbox/lib/input"
import Autocomplete from "react-toolbox/lib/autocomplete"
import { Button } from "react-toolbox/lib/button"
import styles from "./Form.css"

const Form = ({ item, column, search, columns, onItemChange, onColumnChange, onSearchChange, onAddItem }) => (
    <div className={styles.form}>
        <form onSubmit={event => {
            event && event.preventDefault()
            onAddItem({ item, column })
        }}>
            <div className={styles.border}>
                <Input 
                    theme={styles}
                    required
                    name="item"
                    label="Enter Item" 
                    value={item}
                    onChange={onItemChange} />
            </div>
            <div className={styles.border}>
                <Autocomplete 
                    theme={styles}
                    required
                    allowCreate={true}
                    multiple={false}
                    label="Choose Column" 
                    source={columns}
                    value={column}
                    onQueryChange={onColumnChange}
                    onChange={onColumnChange} />
            </div>
            <div className={styles.border}>
                <Button
                    theme={styles}
                    type="submit"
                    icon="add"
                    label="Add Item" />
            </div>
            <div className={styles.border}>
                <Input
                    theme={styles}
                    type="search"
                    name="search"
                    icon="search"
                    label="Search an Item"
                    hint="Search" 
                    value={search}
                    onChange={onSearchChange} />
            </div>
        </form>
    </div>
)

export default Form