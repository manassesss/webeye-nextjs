import {
    Stack,
    Spinner
} from '@chakra-ui/react';
import React, { Component } from "react";
import ReactTextTransition, { presets } from "react-text-transition";

class Loading extends Component {
    state = {
        paragraphIndex: 0
    };

    componentDidMount() {
            setInterval(() => {
                if(this.state.paragraphIndex < this.props.messages.length-1) 
                    this.setState({paragraphIndex: this.state.paragraphIndex + 1 });
            }, 2000);
    }

    render() {
        return (
            <Stack
                direction="column"
                spacing={4}
                alignItems="center"
            >
                <Spinner
                    thickness="5px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.400"
                    size="xl" />

                <ReactTextTransition
                    text={this.props.messages[this.state.paragraphIndex]}
                    overflow
                />

            </Stack>
        );
    }
}

export default Loading;
