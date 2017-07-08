import React from 'react';
import Dropdown from 'react-dropdown';
import classnames from 'classnames';

class Puzzle extends React.Component {
    constructor() {
        super();
        this.handleChange = this.handleChange.bind(this); 
    }

    handleChange(e) {
        const option = this.props.data.options.findIndex((opt) => opt === e.value);
        this.props.selectOption(option, this.props.index);
    }

    render() {
        const { data, index, error } = this.props;

        let gridClassname;
        if (error) {
            gridClassname = classnames({
                'puzzle-grid': true,
                'puzzle-grid--error': !data.marked || data.uncorrect
            });
        } else {
            gridClassname = classnames({
                'puzzle-grid': true
            });
        }

        return (
            <div className={gridClassname}>
              <div className="puzzle-grid__question">{index + 1}. {data.question}</div>
              <div className="puzzle-grid__option">
                <Dropdown
                    options={data.options}
                    value={data.options[data.selectedOption]}
                    onChange={this.handleChange}
                    placeholder="Select an option"
                />
              </div>
            </div>
        );
    }
}

export default Puzzle;