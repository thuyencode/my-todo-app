import PropTypes from 'prop-types'
import SpriteSvg from '/sprite.svg'

function Icon ({ id, className }) {
  return (
    <svg className={className}>
      <use xlinkHref={`${SpriteSvg}#${id}`} />
    </svg>
  )
}

Icon.propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string
}

Icon.defaultProps = {
  className: 'h-5 w-5 inline'
}

export default Icon
