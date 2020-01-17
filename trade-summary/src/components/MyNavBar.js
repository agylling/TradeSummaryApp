import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavDropdown from 'react-bootstrap/NavDropdown'
import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

import {BrowserRouter, Route, Switch, Link, Redirect} from 'react-router-dom'

import DataTables from './DataTables'
import Home from './Home'
import StockPage from './StockPage'
import { setStockpage } from '../actions'
import Graphs from './Graphs'

const MyNavBar = ({setStockpage, summaries, dispatch}) => {

  const items = (summaries) => {
    return(
      summaries.map(entry => {
        var url = "/StockPage";
        return(
          <NavDropdown.Item className="navCenter"><Link onClick={() => setStockpage(entry.name)} to={url}>{entry.name}</Link></NavDropdown.Item>
        )
      })
    )
  }

  return(
    <BrowserRouter>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Trade Summary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto navCenter">
            <Link className="navCenter" to="/Home">Home</Link>
            <Link className="navCenter" to="/DataTables">Data Tables</Link>
            <Link className="navCenter" to="/Graphs">Graphs</Link>
          </Nav>
          <Nav>
            <Link className="navCenter" to="#About">About</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact from="/" component={Home} />
        <Route exact path="/TradeSummaryApp" component={Home} />
        <Route exact path="/Home" component={Home} />
        <Route path="/DataTables" component={DataTables} />
        <Route path="/StockPage" component={StockPage} />
        <Route path="/Graphs" component={Graphs} />
      </Switch>
    </BrowserRouter>
  )
}

MyNavBar.propTypes = {
  summaries: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    amountOwned: PropTypes.number.isRequired,
    paid: PropTypes.number.isRequired,
    sharesBought: PropTypes.number.isRequired,
    sold: PropTypes.number.isRequired,
    sharesSold: PropTypes.number.isRequired,
    avgBought: PropTypes.number.isRequired,
    divident: PropTypes.number.isRequired,
    profit: PropTypes.number.isRequired,
    brokerage: PropTypes.number.isRequired
  }).isRequired).isRequired
}

const getSummaries = (summaries) =>{
  return (
    [...summaries].sort((a,b) =>{
      if(parseFloat(a["name"]) < parseFloat(b["name"])){
        return 1;
      }else if(parseFloat(a["name"]) > parseFloat(b["name"])){
        return -1;
      }else{
        return 0;
      }
  })
  )
}

const mapStateToProps = (state) => ({
  summaries: getSummaries(state.TransactionsStore.summaries)
})

const mapDispatchToProps = dispatch => ({
  setStockpage: (name) => dispatch(setStockpage(name))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyNavBar);
