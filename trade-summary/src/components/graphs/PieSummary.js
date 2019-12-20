import React from 'react'
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import {ResponsiveContainer,Cell, Tooltip, PieChart, Pie} from 'recharts';
import {Container, Row, Col } from 'react-bootstrap';

const PieSummary = ({summaries,renderData, dataKey, dispatch}) => {
  if(renderData === false){
    return (null);
  }

  const COLORS = [
    "#ff0000", "#ff8c00", "#c2f249", "#00ffff",
    "#0077e6", "#de6df2", "#59000a", "#f20000",
    "#bf9056", "#276600", "#00bfbf", "#344b73",
    "#733464", "#8c000c", "#ff8873", "#ffb300",
    "#00ff26", "#00a6a6", "#4d61ff", "#ff00a2",
    "#733439", "#bf561d", "#332500", "#73ff91",
    "#005259", "#0b0a40", "#40001e", "#662500",
    "#f2de6d", "#0f3322", "#00b4e6", "#4400ff",
    "#a6004b", "#66462e", "#57591b", "#11734a",
    "#002033", "#481173", "#ff0051"
  ];

  var totalBought = 0;
  var totalSold = 0;
  for(var entry of summaries){
    totalBought += parseFloat(entry.paid);
    totalSold += parseFloat(entry.sold);
  }

  const renderBought = () => {
    console.log("totalBought: " + totalBought);
    return (
        <Col>
            <p className="GraphSummaries"> Total spend: {totalBought.toFixed(2)}  </p>
        </Col>
    )
  }

  const renderSold = () => {
    console.log("totalSold: " + totalSold);
    return (
        <Col>
            <p className="GraphSummaries"> Total sold: {totalSold.toFixed(2)}  </p>
        </Col>
    )
  }

  const RenderInfo = () => {
    if(dataKey === "paid"){
        return renderBought();
    }else if(dataKey === "sold"){
        return renderSold();
    }else{
        return null;
    }
  }

  return (
    <Container>
      <Row>
        <ResponsiveContainer width="100%" aspect={3/2}>
                <PieChart >
                    <Tooltip/>
                    <Pie
                        data={summaries} 
                        cx="50%" 
                        cy="50%" 
                        innerRadius={50}
                        outerRadius={250} 
                        fill="#8884d8"
                        paddingAngle={0}
                        dataKey={dataKey}
                        >
                        {
                        summaries.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]}/>)
                        }
                    </Pie>
                </PieChart>
        </ResponsiveContainer>
      </Row>
        <Row>
          <RenderInfo/>
        </Row>
    </Container>
  );
}

PieSummary.propTypes = {
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
    }).isRequired).isRequired,
    dataKey: PropTypes.string.isRequired,
    renderData: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => ({
summaries: state.TransactionsStore.summaries,
renderData: state.TransactionsStore.renderData
})

const mapDispatchToProps = dispatch => ({
})

export default connect(mapStateToProps, mapDispatchToProps)(PieSummary)
