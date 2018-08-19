import React from "react"
import { BrowserRouter, Route } from "react-router-dom"
import { Grid, Row, Col } from "react-flexbox-grid"
import { Layout } from "react-toolbox/lib/layout"
import Header from "../components/Header"
import NavigationContainer from "../containers/NavigationContainer"
import ItemsManagerContainer from "../containers/ItemsManagerContainer"
import LogsContainer from "../containers/LogsContainer"
import styles from "./Grid.css"
import "./App.css"

const App = () => (
  <BrowserRouter>
    <Layout>
      <Grid fluid>
        <Row>
          <Col xs={12}>
            <Header />
          </Col>
        </Row>
        <Row className={styles.marginBottom}>
          <Col xs={12}>
            <Route component={NavigationContainer} />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <Route exact path="/" component={ItemsManagerContainer}/>
            <Route path="/log" component={LogsContainer}/>
          </Col>
        </Row>
      </Grid>
    </Layout>
  </BrowserRouter>
)

export default App