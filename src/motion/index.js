export const hidFromTopVariant = {
    hidden: {
      opacity: 0,
      y: -30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        duration: 0.8,
        stiffness: 30
      }
    }
}

export const hidFromBottomVariant = {
    hidden: {
      opacity: 0,
      y: 30
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        delay: 0.6,
        duration: 0.8,
        stiffness: 30
      }
    }
}

export const CTAVariant = {
  hidden: {
    opacity: 0,
    y: -30
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.8,
      duration: 0.8,
      stiffness: 30
    }
  }
}
