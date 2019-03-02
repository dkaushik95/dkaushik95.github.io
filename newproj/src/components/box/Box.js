import React, {Component} from 'react'
import pose from 'react-pose'
import './box.css'

const trans = {
    width: {
        ease: 'easeInOut',
        duration: 300,
        delay: 300
    },
    height: {
        ease: 'easeInOut',
        duration: 300,
        delay: 0
    }
}

const AnimatedBox = pose.div({
    hoverable: true,
    init: {
      boxShadow: 'inset 0px 0px 0px 0px rgba(0,0,0,0.39)',
      height: '33.33vh',
      width: '33.33%',
      transition: trans,
      overflow: 'hidden',
      position: 'relative',
      top: 'initial',
      left: 'initial'
    },
    hover: {
      boxShadow: 'inset 0px 0px 46px 0px rgba(0,0,0,0.39)',
      height: '33.33vh',
      width: '33.33%',
      transition: trans,
      overflow: 'hidden',
      position: 'relative',
      top: 'initial',
      left: 'initial'
    },
    expanded: {
      height: '100vh',
      width: '100%',
      transition: trans,
      overflow: 'scroll',
      position: 'absolute',
      top: 0,
      left: 0
    }
})

export default class Box extends Component {
    constructor(props){
        super(props)
        this.state = {
            toggle: true
        }
    }

    onClick = () => {
        this.setState({
            toggle: !this.state.toggle
        })
    }

    render() {
        return (
            <AnimatedBox onClick={this.onClick} className='box' pose={this.state.toggle ? 'init' : 'expanded'}>
                <span className='heading'>{this.props.heading}</span>
            </AnimatedBox>
        )
    }
    
}