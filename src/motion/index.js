import { delay } from "motion"

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

export const FromTopVariant = {
  hidden: {
    opacity: 0,
    y: -30
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

export const FromBottomVariant = {
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

// ABOUT

export const AboutContentVariant = {
  hidden: {
    opacity: 0
  },
  visible: {
    opacity: 1,
    transition: {
      delay: 1
    }
  }
}

export const AboutCardVariant = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.9 * index,
      duration: 0.8,
      stiffness: 30
    }
  })
}

export const AboutCardTextVariant = {
  hidden: {
    opacity: 0,
    x: 30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 0.8,
      stiffness: 30
    }
  }
}

export const AboutButtonVariant = {
  hidden: {
    opacity: 0,
    y: 25
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 1,
      duration: 0.8,
      stiffness: 10
    }
  }
}

export const AboutImgVariant = {
  hidden: {
    opacity: 0,
    x: -30
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 0.7,
      duration: 0.8,
      stiffness: 30
    }
  }
}

// Skills

export const SkillsContainerVariant = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      delay: 0.8,
      duration: 0.5,
      stiffness: 25
    }
  }
}

export const SkillsContentVariant = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      type: 'spring',
      delay: 1 * index,
      duration: 0.7,
      stiffness: 25
    }
  })
}
