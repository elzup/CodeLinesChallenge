const timezones = Intl.supportedValuesOf('timeZone')

const getUTCOffset = (timezone) => {
  const date = new Date()
  const offset = new Intl.DateTimeFormat(undefined, {
    timeZone: timezone,
    timeZoneName: 'longOffset',
    hour: 'numeric',
    minute: 'numeric',
    hour12: false,
  })
    .format(date)
    .split('GMT')[1]
    .trim()

  return offset
}
const data = timezones.map((tz) => ({ tz, offset: getUTCOffset(tz) }))
data.sort((a, b) => a.offset.localeCompare(b.offset))

data.forEach((element) => {
  console.log(element.offset, element.tz)
})
