import React from 'react'
import { Card, CardBody, Heading, Text } from '@pancakeswap-libs/uikit'
import BigNumber from 'bignumber.js/bignumber'
import styled from 'styled-components'
import { getActualValueInDecimal, getBalanceNumber } from 'utils/formatBalance'
import { useAurumTotalSupply, useAurumBurnedBalance } from 'hooks/useAurumTokenBalance'
import useI18n from 'hooks/useI18n'
import { getAurumAddress } from 'utils/addressHelpers'
import CardValue from './CardValue'
import { useAurumFarms, usePriceAurumBusd } from '../../../state/aurumHooks'

const StyledAurumStats = styled(Card)`
  margin-left: auto;
  margin-right: auto;
`

const Row = styled.div`
  align-items: center;
  display: flex;
  font-size: 14px;
  justify-content: space-between;
  margin-bottom: 8px;
`

const AurumStats = () => {
  const TranslateString = useI18n();
  const totalSupply = useAurumTotalSupply();  
  const burnedBalance = useAurumBurnedBalance(getAurumAddress());
  const aurumFarms = useAurumFarms();
  const aurumPrice = usePriceAurumBusd();      
  const circSupply = totalSupply ? totalSupply.minus(burnedBalance) : new BigNumber(0);
  const aurumSupply = getBalanceNumber(circSupply);
  const marketCap = aurumPrice.times(circSupply)

  let rbtPerBlock = 0;
  if(aurumFarms && aurumFarms[0] && aurumFarms[0].rbtPerBlock){
    rbtPerBlock = new BigNumber(aurumFarms[0].rbtPerBlock).div(new BigNumber(10).pow(18)).toNumber();
  }

  return (
    <StyledAurumStats>
      <CardBody>
        <Heading size="xl" mb="24px">
          Rare Bourbon Stats
        </Heading>
        <Row>
          <Text fontSize="14px">RBT Price</Text>
          <CardValue fontSize="14px" value={getActualValueInDecimal(aurumPrice)} decimals={2} prefix="$" />          
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10005, 'Market Cap')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(marketCap)} decimals={0} prefix="$" />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(536, 'Total Minted')}</Text>
          {totalSupply && <CardValue fontSize="14px" value={getBalanceNumber(totalSupply)} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(538, 'Total Burned')}</Text>
          <CardValue fontSize="14px" value={getBalanceNumber(burnedBalance)} decimals={0} />
        </Row>
        <Row>
          <Text fontSize="14px">{TranslateString(10004, 'Circulating Supply')}</Text>
          {aurumSupply && <CardValue fontSize="14px" value={aurumSupply} decimals={0} />}
        </Row>
        <Row>
          <Text fontSize="14px">RBT/block</Text>
          <Text bold fontSize="14px">{rbtPerBlock}</Text>
        </Row>
      </CardBody>
    </StyledAurumStats>
  )
}

export default AurumStats
