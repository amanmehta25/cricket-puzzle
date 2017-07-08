import React from 'react';
import BarChart from 'react-bar-chart';

import Puzzle from './Puzzle';

const margin = {top: 20, right: 20, bottom: 30, left: 40};

class Main extends React.Component {
    constructor() {
        super();
        this.state = {
            error: false,
            isSubmitted: false
        }
        this.clearForm = this.clearForm.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    clearForm() {
        this.setState({
            error: false,
            isSubmitted: false
        });
        this.props.clearForm();
    }

    handleSubmit() {
        let flag = 0;
        this.props.data.forEach((data, index) => {
            if (!data.marked) {
                flag = 1;
                this.setState({
                    error: true
                });
            }
        });

        if (!flag) {
            console.log('haha');
            let incorrect = 0, correct = 0;
            this.props.data.forEach((data, index) => {
                if (data.selectedOption === data.answer) {
                    correct++;
                    this.props.markIncorrect(index, false);
                } else {
                    incorrect++;
                    this.props.markIncorrect(index, true);
                    this.setState({
                        error: true
                    });
                }
            });

            this.setState({
                isSubmitted: true,
                data: [
                    { text: 'Correct', value: correct },
                    { text: 'Incorrect', value: incorrect },
                ]
            });
        }
    }

    render() {
        return (
            <div className="main-container">
                <div className="main-container__heading">Cricket Puzzle</div>
                <div>
                    {
                        this.props.data.map((data, i) => 
                            <Puzzle {...this.props} error={this.state.error} key={i} index={i} data={data} />
                        )
                    }
                </div>
                <div>
                    <button className="btn btn--primary" onClick={this.handleSubmit}>Submit</button>
                    <button className="btn btn--secondary" onClick={this.clearForm}>Clear Values</button>
                </div>
                {
                    this.state.isSubmitted ? (
                        <div className="main-container__bar-chart">
                            <BarChart
                                ylabel='Number'
                                width={320}
                                height={320}
                                margin={margin}
                                data={this.state.data}
                            />
                        </div>
                    ) : null
                }
            </div>
        );
    }
}

export default Main;
