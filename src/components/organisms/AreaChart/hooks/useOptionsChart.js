import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { formatDate, formatMoney } from '../../../../utils/formatter'
import { normalizeInvestmentData } from '../../../../utils/normalize'
import tokens from '../../../../utils/tokens'

const { fontFamily, chartBulletColor, chartSeriesColor, chartSeriesfillColor, chartSize } = tokens

export default function useOptionsChart({ chartData }) {
  const { t } = useTranslation('app')
  const [chartOptions, setChartOptions] = useState({})
  const dataNormalized = normalizeInvestmentData({ chartData })

  useEffect(() => {
    setChartOptions({
      chart: {
        type: 'area',
        width: chartSize,
        style: {
          fontFamily,
          color: chartBulletColor,
        },
      },
      accessibility: {
        description: t('chartSubtitle'),
      },
      title: {
        text: `<strong>${t('chartTitle')}</strong>`,
      },
      subtitle: {
        text: t('chartSubtitle'),
      },
      series: {
        data: dataNormalized,
        color: chartSeriesColor,
      },
      plotOptions: {
        series: {
          marker: {
            enabled: true,
            radius: 3,
          },
          fillColor: chartSeriesfillColor,
        },
      },
      tooltip: {
        formatter() {
          const money = this.y
          return formatMoney({ money })
        },
      },
      xAxis: {
        title: {
          text: t('chartPeriodLabel'),
        },
        allowDecimals: false,
        accessibility: {
          rangeDescription: t('chartRangeDescription'),
        },
        labels: {
          formatter() {
            const period = this.value
            return formatDate({ period })
          },
        },
      },
      yAxis: {
        title: {
          text: t('chartMonetaryLabel'),
        },
        labels: {
          formatter() {
            const money = this.value
            return formatMoney({ money })
          },
        },
      },
    })
  }, [t, dataNormalized])

  return chartOptions
}
