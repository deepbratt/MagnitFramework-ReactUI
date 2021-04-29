import useScrollTrigger from '@material-ui/core/useScrollTrigger';

const Scrolltrigger = () => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 600
      })
      
      return{trigger}
}

export default Scrolltrigger
