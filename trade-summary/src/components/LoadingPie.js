import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { VictoryPie, VictoryAnimation, VictoryLabel } from 'victory'
import ProgressBar from 'react-bootstrap/ProgressBar'

const LoadingPie = ({readPercentage}) => {

  return(
    <div>
      <ProgressBar striped variant="success" now={Math.round(readPercentage[0].y*100)} />
      <svg viewBox="0 0 400 400" width="10%" height="10%">
        <VictoryPie
          standalone={false}
          animate={{ duration: 5000 }}
          width={400} height={400}
          data={readPercentage}
          innerRadius={120}
          cornerRadius={25}
          labels={() => null}
          style={{
            data: { fill: ({ datum }) => {
              const color = (datum.y*100) > 30 ? "green" : "red";
              return datum.y*100 > 99 ? color : "transparent";
            }
            }
          }}
        />
        <VictoryAnimation duration={1000} data={readPercentage}>
          {(newProps) => {
            return (
              <VictoryLabel
                textAnchor="middle" verticalAnchor="middle"
                x={200} y={200}
                text={`${Math.round(readPercentage[0].y*100)}%`}
                style={{ fontSize: 45 }}
              />
            );
          }}
        </VictoryAnimation>
      </svg>
    </div>
  )
}

LoadingPie.propTypes = {
  readPercentage: PropTypes.number.isRequired
}

// Container Component

const mapStateToProps = state => ({
  readPercentage: state.TransactionsStore.readPercentage
})


export default connect(
  mapStateToProps,
  null
)(LoadingPie)
